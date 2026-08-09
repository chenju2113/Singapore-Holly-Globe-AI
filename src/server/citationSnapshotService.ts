import fs from 'node:fs';
import path from 'node:path';
import { CitationFormData, CitationSnapshotData } from '../types/citation';
import { generateChinaPlatformSnapshot, hasChinaPlatformImport } from './chinaPlatformImport';
import { mapHgBrandCitationResult } from './citationReportMapper';
import { runHgBrandCitationWorkflow } from './hgBrandCitationWorkflow';
import { analyzeBrandCitationsWithAI } from './aiCitationAnalyzer';

export interface CitationSnapshotServiceDeps {
  runWorkflow: typeof runHgBrandCitationWorkflow;
  mapResult: typeof mapHgBrandCitationResult;
  config: {
    scriptPath: string;
    workDir: string;
    timeoutMs: number;
  };
}

function isValidScriptPath(scriptPath?: string): boolean {
  if (!scriptPath || scriptPath === 'n.a' || !scriptPath.trim()) return false;
  try {
    const stat = fs.statSync(scriptPath);
    return stat.isFile();
  } catch {
    return false;
  }
}

/**
 * Lazily reads env vars at call time so dotenv.config() in server.ts can run first.
 * If defaultDeps were a const, process.env would be read at module-load time before
 * dotenv has populated it.
 */
function getDefaultDeps(): CitationSnapshotServiceDeps {
  const envScript = process.env.HG_BRAND_CITATION_SCRIPT || '';
  const fixtureScript = path.join(process.cwd(), 'src', 'server', '__fixtures__', 'hg-brand-citation', 'fake-hg-brand-citation.py');

  let scriptPath = '';
  if (isValidScriptPath(envScript)) {
    scriptPath = envScript;
  } else if (isValidScriptPath(fixtureScript)) {
    scriptPath = fixtureScript;
  }

  const envWorkDir = process.env.HG_BRAND_CITATION_WORKDIR || '';
  const workDir = envWorkDir && envWorkDir !== 'n.a' ? envWorkDir : path.join(process.cwd(), 'tmp');

  return {
    runWorkflow: runHgBrandCitationWorkflow,
    mapResult: mapHgBrandCitationResult,
    config: {
      scriptPath,
      workDir,
      timeoutMs: Number(process.env.HG_BRAND_CITATION_TIMEOUT_MS || 120000),
    },
  };
}

export async function generateCitationSnapshot(
  params: CitationFormData,
  deps: Partial<CitationSnapshotServiceDeps> = {},
): Promise<CitationSnapshotData> {
  if (hasChinaPlatformImport(params.chinaPlatformResults)) {
    return generateChinaPlatformSnapshot(params);
  }

  const defaultDeps = getDefaultDeps();
  const mergedDeps: CitationSnapshotServiceDeps = {
    ...defaultDeps,
    ...deps,
    config: {
      ...defaultDeps.config,
      ...(deps.config || {}),
    },
  };

  if (mergedDeps.config.scriptPath && mergedDeps.config.workDir) {
    try {
      const workflow = await mergedDeps.runWorkflow(params, mergedDeps.config);
      return mergedDeps.mapResult(workflow);
    } catch (err) {
      console.warn('hg-brand-citation script execution failed, falling back to AI citation analyzer:', err);
    }
  }

  return analyzeBrandCitationsWithAI(params);
}



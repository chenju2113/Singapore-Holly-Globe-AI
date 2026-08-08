import { CitationFormData, CitationSnapshotData } from '../types/citation';
import { generateChinaPlatformSnapshot, hasChinaPlatformImport } from './chinaPlatformImport';
import { mapHgBrandCitationResult } from './citationReportMapper';
import { runHgBrandCitationWorkflow } from './hgBrandCitationWorkflow';

export interface CitationSnapshotServiceDeps {
  runWorkflow: typeof runHgBrandCitationWorkflow;
  mapResult: typeof mapHgBrandCitationResult;
  config: {
    scriptPath: string;
    workDir: string;
    timeoutMs: number;
  };
}

/**
 * Lazily reads env vars at call time so dotenv.config() in server.ts can run first.
 * If defaultDeps were a const, process.env would be read at module-load time before
 * dotenv has populated it.
 */
function getDefaultDeps(): CitationSnapshotServiceDeps {
  return {
    runWorkflow: runHgBrandCitationWorkflow,
    mapResult: mapHgBrandCitationResult,
    config: {
      scriptPath: process.env.HG_BRAND_CITATION_SCRIPT || '',
      workDir: process.env.HG_BRAND_CITATION_WORKDIR || '',
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

  const workflow = await mergedDeps.runWorkflow(params, mergedDeps.config);
  return mergedDeps.mapResult(workflow);
}

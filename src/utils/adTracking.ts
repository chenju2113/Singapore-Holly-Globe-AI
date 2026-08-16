declare global {
  interface Window {
    lintrk?: (action: string, payload: { conversion_id: number; event_id?: string; [key: string]: any }) => void;
  }
}

/**
 * Unified Ad Conversion Tracking Helper.
 * Triggers LinkedIn Ads lead conversion events
 * when a user successfully submits a contact / lead form.
 */
export function trackQualifiedLeadCapture(): void {
  if (typeof window === 'undefined') return;

  // LinkedIn Ads Lead Conversion Tracking (ID: 27761860)
  if (typeof window.lintrk === 'function') {
    try {
      const eventId =
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

      window.lintrk('track', {
        conversion_id: 27761860,
        event_id: eventId,
      });
    } catch (err) {
      console.warn('LinkedIn tracking warning:', err);
    }
  }
}

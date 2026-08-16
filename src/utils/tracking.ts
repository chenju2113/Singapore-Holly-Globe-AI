export function trackMicrosoftLeadConversion(eventLabel: string) {
  if (typeof window === 'undefined') {
    return;
  }

  const uetQueue = (window as any).uetq;
  if (!uetQueue || typeof uetQueue.push !== 'function') {
    return;
  }

  uetQueue.push('event', 'generate_lead', {
    event_category: 'lead',
    event_label: eventLabel,
    event_value: 1,
  });
}

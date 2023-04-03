export function dispatch<T extends any = any>(
  element: Element,
  eventType: string,
  detail?: T,
  eventInit: EventInit = { bubbles: true },
  /** This is an internal thing used by SMUI to duplicate some SMUI events as MDC events. */
  duplicateEventForMDC = false
) {
  if (typeof Event === 'undefined') {
    throw new Error('Event not defined.');
  }
  if (!element) {
    throw new Error('Tried to dipatch event without element.');
  }
  const event: CustomEvent<T> = new CustomEvent(eventType, {
    ...eventInit,
    detail,
  });
  element?.dispatchEvent(event);
  if (duplicateEventForMDC && eventType.startsWith('SMUI')) {
    const duplicateEvent: CustomEvent<T> = new CustomEvent(
      eventType.replace(/^SMUI/g, () => 'MDC'),
      {
        ...eventInit,
        detail,
      }
    );
    element?.dispatchEvent(duplicateEvent);
    if (duplicateEvent.defaultPrevented) {
      event.preventDefault();
    }
  }
  return event;
}

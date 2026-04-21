export function dispatch<T extends any = any>(
  element: Element,
  eventType: string,
  detail?: T,
  eventInit: EventInit = { bubbles: true },
) {
  if (typeof Event === 'undefined') {
    throw new Error('Event not defined.');
  }
  if (!element) {
    console.warn('Tried to dispatch event without element.', eventType, detail);
  }
  const event: CustomEvent<T> = new CustomEvent(eventType, {
    ...eventInit,
    detail,
  });
  element?.dispatchEvent(event);
  return event;
}

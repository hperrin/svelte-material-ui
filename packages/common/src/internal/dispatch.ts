export function dispatch<T extends any = any>(
  element: Element,
  eventType: string,
  detail?: T,
  eventInit: EventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event: CustomEvent<T> = new CustomEvent(eventType, {
      ...eventInit,
      detail,
    });
    element?.dispatchEvent(event);
    return event;
  }
}

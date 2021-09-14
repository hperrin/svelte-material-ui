export function dispatch<T extends any = any>(
  element: Element | { getElement: () => Element },
  eventType: string,
  detail?: T,
  eventInit: EventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event: CustomEvent<T> = new CustomEvent(eventType, {
      ...eventInit,
      detail,
    });
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
    return event;
  }
}

export type SmuiEvent = Event & {
  detail: { [k: string]: any };
};

export function dispatch(
  element: Element | { getElement: () => Element },
  eventType: string,
  detail: { [k: string]: any } = {},
  eventInit: EventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event: SmuiEvent = new Event(eventType, eventInit) as SmuiEvent;
    event.detail = detail;
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
    return event;
  }
}

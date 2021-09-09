import type { SMUIEventDetail, SMUIEvent } from './Events.d';

export function dispatch<T extends SMUIEventDetail = SMUIEventDetail>(
  element: Element | { getElement: () => Element },
  eventType: string,
  detail?: T,
  eventInit: EventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event: SMUIEvent<T> = new Event(eventType, eventInit) as SMUIEvent<T>;
    event.detail = detail;
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
    return event;
  }
}

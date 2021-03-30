export function dispatch(element, eventType, detail = {}) {
  if (typeof Event !== 'undefined' && element) {
    const event = new Event(eventType, { bubbles: true });
    event.detail = detail;
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
  }
}

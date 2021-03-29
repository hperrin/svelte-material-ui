export function dispatch(element, eventType, details = {}) {
  if (typeof Event !== 'undefined' && element) {
    const event = new Event(eventType, { bubbles: true });
    event.details = details;
    element.dispatchEvent(event);
  }
}

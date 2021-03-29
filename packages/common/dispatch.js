export function dispatch(element, eventType, details = {}) {
  const event = new Event(eventType, { bubbles: true });
  event.details = details;
  element.dispatchEvent(event);
}

import { on } from 'svelte/events';

/**
 * A way to keep track of things you've "on"ed so you can "off" them too.
 *
 * This is needed because Svelte doesn't have an "off" function, it returns
 * unlisten functions from its "on" function, and MDC-Web expects register and
 * deregister functions in the adapters.
 */
export class SvelteEventManager {
  elementMap = new Map<
    Element | Window | Document,
    { [k: string]: Map<Function, Function> }
  >();

  /**
   * Listen to an event on an element.
   */
  on<T extends Event>(
    element: Element | Window | Document,
    event: string,
    handler: (evt: T) => void,
    options?: AddEventListenerOptions,
  ) {
    if (!this.elementMap.has(element)) {
      this.elementMap.set(element, {});
    }

    const eventMap = this.elementMap.get(element);

    if (eventMap == null) {
      throw new Error("Event map couldn't be created.");
    }

    if (!(event in eventMap)) {
      eventMap[event] = new Map<Function, Function>();
    }

    const handlerMap = eventMap[event];

    handlerMap.set(
      handler,
      on(element, event, handler as EventListener, options),
    );
  }

  /**
   * Unlisten to an event on an element.
   */
  off<T extends Event>(
    element: Element | Window | Document,
    event: string,
    handler: (evt: T) => void,
  ) {
    const eventMap = this.elementMap.get(element);

    if (eventMap == null || !(event in eventMap)) {
      return;
    }

    const handlerMap = eventMap[event];
    const unlisten = handlerMap.get(handler);

    if (unlisten != null) {
      unlisten();
      handlerMap.delete(handler);
      if (handlerMap.size === 0) {
        delete eventMap[event];

        if (Object.keys(eventMap).length === 0) {
          this.elementMap.delete(element);
        }
      }
    }
  }

  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((eventMaps, _element) => {
      for (let [_event, eventMap] of Object.entries(eventMaps)) {
        eventMap.forEach((unlisten, _handler) => {
          unlisten();
        });
      }
    });
    this.elementMap.clear();
  }
}

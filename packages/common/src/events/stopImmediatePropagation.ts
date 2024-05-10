export function stopImmediatePropagation<T extends EventListener>(fn: T): T {
  return function (event: Event) {
    event.stopImmediatePropagation();
    // @ts-ignore
    return fn.call(this, event);
  } as T;
}

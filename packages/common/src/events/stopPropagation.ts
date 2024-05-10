export function stopPropagation<T extends EventListener>(fn: T): T {
  return function (event: Event) {
    event.stopPropagation();
    // @ts-ignore
    return fn.call(this, event);
  } as T;
}

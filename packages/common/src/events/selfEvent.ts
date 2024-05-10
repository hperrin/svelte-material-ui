export function selfEvent<T extends EventListener>(fn: T): T {
  return function (event: Event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    // @ts-ignore
    return fn.call(this, event);
  } as T;
}

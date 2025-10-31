export function trustedEvent<T extends EventListener>(fn: T): T {
  return function (event: Event) {
    if (!event.isTrusted) {
      return;
    }
    // @ts-ignore
    return fn.call(this, event);
  } as T;
}

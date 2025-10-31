export function once<T extends EventListener>(fn: T | null): T {
  return function (event: Event) {
    if (fn) {
      // @ts-ignore
      fn.call(this, event);
    }
    fn = null;
  } as T;
}

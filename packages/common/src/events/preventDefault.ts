export function preventDefault<T extends EventListener>(fn: T): T {
  return function (event: Event) {
    event.preventDefault();
    // @ts-ignore
    fn.call(this, event);
  } as T;
}

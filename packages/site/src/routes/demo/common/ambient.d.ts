// Needed until https://github.com/sveltejs/language-tools/issues/431 is solved.
declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:MyEvent']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

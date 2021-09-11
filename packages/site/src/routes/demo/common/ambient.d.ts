// Needed until https://github.com/sveltejs/language-tools/issues/431 is solved.
declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onMyEvent']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

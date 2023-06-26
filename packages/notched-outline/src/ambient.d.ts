/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUIFloatingLabel:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIFloatingLabel:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

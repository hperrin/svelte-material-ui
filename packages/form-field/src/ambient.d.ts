/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUIGenericInput:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIGenericInput:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

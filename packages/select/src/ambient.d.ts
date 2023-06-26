/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUISelectLeadingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUISelectLeadingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUITab:mount']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUITab:unmount']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:MDCTab:interacted']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUITab:interacted']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

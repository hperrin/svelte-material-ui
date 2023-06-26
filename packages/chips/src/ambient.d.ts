/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUIChipsChip:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIChipsChip:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:MDCChip:interaction']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIChip:interaction']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:MDCChip:selection']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUIChip:selection']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:MDCChip:removal']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUIChip:removal']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:MDCChip:navigation']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIChip:navigation']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:MDCDialog:opening']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUIDialog:opening']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:MDCDialog:opened']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUIDialog:opened']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:MDCDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
    ['on:SMUIDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

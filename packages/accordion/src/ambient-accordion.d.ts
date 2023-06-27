/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUIAccordionPanel:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIAccordionPanel:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIAccordionPanel:activate']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIAccordionPanel:opening']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDialog:opening']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIAccordionPanel:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIAccordionPanel:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIAccordionPanel:activate']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIAccordionPanel:opening']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDialog:opening']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUIDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

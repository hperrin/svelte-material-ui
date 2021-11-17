/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onMDCDialog:opening']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUIDialog:opening']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCDialog:opened']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUIDialog:opened']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUIDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

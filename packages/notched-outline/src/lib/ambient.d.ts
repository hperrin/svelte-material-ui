/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIFloatingLabel:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIFloatingLabel:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

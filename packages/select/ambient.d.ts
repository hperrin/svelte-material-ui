/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUISelectLeadingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUISelectLeadingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

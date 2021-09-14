/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUITab:mount']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUITab:unmount']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCTab:interacted']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

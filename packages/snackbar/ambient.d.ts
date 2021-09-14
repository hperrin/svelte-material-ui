/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onMDCSnackbar:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUISegmentedButtonSegment:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUISegmentedButtonSegment:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onselected']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

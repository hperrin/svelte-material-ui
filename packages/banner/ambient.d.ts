/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIBannerButton:primaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIBannerButton:secondaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

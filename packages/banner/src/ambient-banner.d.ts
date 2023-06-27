/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUIBannerButton:primaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIBannerButton:secondaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

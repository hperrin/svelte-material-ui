declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}

  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIBannerButton:primaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIBannerButton:secondaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

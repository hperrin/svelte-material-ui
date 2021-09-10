declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIBannerButton:primaryActionClick']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIBannerButton:secondaryActionClick']?: any;
  }
}

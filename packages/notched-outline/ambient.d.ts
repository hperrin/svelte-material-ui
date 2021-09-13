declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}

  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIFloatingLabel:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIFloatingLabel:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

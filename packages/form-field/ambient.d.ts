declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}

  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIGenericInput:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIGenericInput:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

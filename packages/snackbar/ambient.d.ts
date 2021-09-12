declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onMDCSnackbar:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

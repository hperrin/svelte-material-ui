declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}

  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUIChipsChip:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIChipsChip:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onMDCChip:interaction']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onMDCChip:selection']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCChip:removal']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCChip:navigation']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}

  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onMDCDialog:opening']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCDialog:opened']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onMDCDialog:closed']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}

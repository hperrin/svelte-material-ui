declare namespace svelte.JSX {
  interface HTMLAttributes<T> {}
}

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUITopAppBarIconButton:nav']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

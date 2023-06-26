/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUISegmentedButtonSegment:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUISegmentedButtonSegment:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:selected']?: (event: CustomEvent<any> & { target: T }) => any;
  }
}

declare module '@material/segmented-button/dist/mdc.segmentedButton.js' {
  export * from '@material/segmented-button';
}

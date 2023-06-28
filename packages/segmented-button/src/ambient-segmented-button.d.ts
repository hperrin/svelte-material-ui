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

// TODO: Remove this when MDC's segmented button is fixed.
declare module '@material/segmented-button/index.js' {
  export * from '@material/segmented-button';
}

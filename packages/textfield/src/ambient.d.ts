/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUITextfieldLeadingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUITextfieldLeadingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUITextfieldTrailingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUITextfieldTrailingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUITextfieldCharacterCounter:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUITextfieldCharacterCounter:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

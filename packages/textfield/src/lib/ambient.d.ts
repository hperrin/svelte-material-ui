/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUITextfieldLeadingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUITextfieldLeadingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUITextfieldTrailingIcon:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUITextfieldTrailingIcon:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUITextfieldCharacterCounter:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUITextfieldCharacterCounter:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

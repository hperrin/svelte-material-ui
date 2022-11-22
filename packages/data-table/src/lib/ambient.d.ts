/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelte.JSX {
  interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
    ['onSMUICheckbox:mount']?: (event: CustomEvent<any> & { target: T }) => any;
    ['onSMUICheckbox:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableRow:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableRow:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableCell:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableCell:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableHeader:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableHeader:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableBody:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableBody:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableHeader:click']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableRow:click']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableHeaderCheckbox:change']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['onSMUIDataTableBodyCheckbox:change']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

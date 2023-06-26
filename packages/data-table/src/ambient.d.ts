/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    ['on:SMUICheckbox:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUICheckbox:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableRow:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableRow:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableCell:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableCell:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableHeader:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableHeader:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableBody:mount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableBody:unmount']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableHeader:click']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableRow:click']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableHeaderCheckbox:change']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
    ['on:SMUIDataTableBodyCheckbox:change']?: (
      event: CustomEvent<any> & { target: T }
    ) => any;
  }
}

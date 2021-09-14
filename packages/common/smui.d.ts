import { SvelteComponentDev, SvelteComponentTyped } from 'svelte/internal';

// SMUI Components.

export declare class SMUIComponent extends SvelteComponentDev {
  getElement(): HTMLElement;
}

export declare class SMUIComponentTyped<
  Props extends Record<string, any> = any,
  Events extends Record<string, any> = any,
  Slots extends Record<string, any> = any
> extends SvelteComponentTyped<Props, Events, Slots> {
  getElement(): HTMLElement;
}

// Layout listeners.

export type RemoveLayoutListener = () => void;
export type AddLayoutListener = (callback: () => void) => RemoveLayoutListener;

// Input accessors.

export interface SMUIInputAccessor {
  readonly element: Element;
  activateRipple(): void;
  deactivateRipple(): void;
}

export interface SMUICheckInputAccessor extends SMUIInputAccessor {
  checked: boolean;
}

export interface SMUICheckboxInputAccessor extends SMUICheckInputAccessor {
  _smui_checkbox_accessor: true;
  indeterminate: boolean;
}

export interface SMUIRadioInputAccessor extends SMUICheckInputAccessor {
  _smui_radio_accessor: true;
}

export interface SMUISliderInputAccessor extends SMUIInputAccessor {}

export interface SMUISwitchInputAccessor extends SMUICheckInputAccessor {}

export type SMUIGenericInputAccessor =
  | SMUICheckboxInputAccessor
  | SMUIRadioInputAccessor
  | SMUISliderInputAccessor
  | SMUISwitchInputAccessor;

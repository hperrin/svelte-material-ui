import type { SvelteComponentTyped, SvelteComponentDev } from 'svelte/internal';
import type SmuiElement from './SmuiElement.svelte';

export type SmuiElementTagNameMap = HTMLElementTagNameMap;

export interface SmuiComponentTyped<T extends keyof SmuiElementTagNameMap>
  extends SvelteComponentTyped {
  getElement(): SmuiElementTagNameMap[T];
}

/**
 * You must implement a `getElement()` function that returns an `HTMLElement`.
 */
export interface SmuiComponentDev extends SvelteComponentDev {
  // This doesn't work. It should. Grr.
  // getElement(): HTMLElement;
}

export type SmuiComponent<T extends keyof SmuiElementTagNameMap = 'div'> =
  SmuiElement extends SvelteComponentTyped
    ? SmuiComponentTyped<T>
    : SmuiComponentDev;

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

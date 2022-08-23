import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './Item.svelte';

export declare class ItemComponentDev<
    T extends string = 'li',
    C extends SmuiComponentDev = ElementComponentDev<T>
  >
  extends Component
  implements SmuiComponentDev
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<ReturnType<C['getElement']>>>,
    | 'use'
    | 'class'
    | 'style'
    | 'color'
    | 'nonInteractive'
    | 'ripple'
    | 'activated'
    | 'role'
    | 'selected'
    | 'disabled'
    | 'skipRestoreFocus'
    | 'inputId'
    | 'href'
    | 'component'
    | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}

export interface SMUIListItemAccessor {
  _smui_list_item_accessor: true;
  readonly element: Element;
  selected: boolean;
  hasClass(className: string): boolean;
  addClass(className: string): void;
  removeClass(className: string): void;
  getAttr(name: string): string | null;
  addAttr(name: string, value: string): void;
  removeAttr(name: string): void;
  getPrimaryText(): string;

  // For inputs within item.
  checked: boolean;
  readonly hasCheckbox: boolean;
  readonly hasRadio: boolean;
  activateRipple(): void;
  deactivateRipple(): void;

  // For select options.
  getValue(): any;

  // For autocomplete.
  action(e: Event): void;
  tabindex: number;
  readonly disabled: boolean;
  activated: boolean;
}

import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './Item.svelte';
import type { LiComponentDev as LiElementComponentDev } from '@smui/common/elements/index.js';

export declare class ItemComponentDev<
  C extends SvelteComponentDev = LiElementComponentDev
> extends Component {
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
    | 'inputId'
    | 'href'
    | 'component'
  > &
    Component['$$prop_def'];
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
}

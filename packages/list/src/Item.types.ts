import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, SmuiElementComponentDev } from '@smui/common';
import type Component from './Item.svelte';

export declare class ItemComponentDev<
  T extends string = 'li',
  C extends ComponentType<SmuiComponent> = ComponentType<
    SmuiElementComponentDev<T>
  >
> extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<
      svelte.JSX.HTMLAttributes<ReturnType<InstanceType<C>['getElement']>>
    >,
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
    ComponentProps<Component>;
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

import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './Chip.svelte';

export declare class ChipComponentDev<
    T extends string = 'div',
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
    | 'chip'
    | 'ripple'
    | 'touch'
    | 'shouldRemoveOnTrailingIconClick'
    | 'shouldFocusPrimaryActionOnClick'
    | 'component'
    | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
}

export interface SMUIChipsChipAccessor {
  chipId: any;
  readonly selected: boolean;
  focusPrimaryAction(): void;
  focusTrailingAction(): void;
  removeFocus(): void;
  setSelectedFromChipSet(value: boolean, shouldNotifyClients: boolean): void;
}

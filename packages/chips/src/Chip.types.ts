import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './Chip.svelte';
import type { DivComponentDev as DivElementComponentDev } from '@smui/common/elements';

export declare class ChipComponentDev<
  C extends SvelteComponentDev = DivElementComponentDev
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
    | 'chip'
    | 'ripple'
    | 'touch'
    | 'shouldRemoveOnTrailingIconClick'
    | 'shouldFocusPrimaryActionOnClick'
    | 'component'
  > &
    Component['$$prop_def'];
}

export interface SMUIChipsChipAccessor {
  chipId: any;
  readonly selected: boolean;
  focusPrimaryAction(): void;
  focusTrailingAction(): void;
  removeFocus(): void;
  setSelectedFromChipSet(value: boolean, shouldNotifyClients: boolean): void;
}

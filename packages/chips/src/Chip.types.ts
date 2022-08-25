import type { ComponentProps, ComponentType } from 'svelte';
import type { SmuiComponent, ElementComponentDev } from '@smui/common';
import type Component from './Chip.svelte';

export declare class ChipComponentDev<
    T extends string = 'div',
    C extends ComponentType<SmuiComponent> = ComponentType<
      ElementComponentDev<T>
    >
  >
  extends Component
  implements SmuiComponent
{
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
    | 'chip'
    | 'ripple'
    | 'touch'
    | 'shouldRemoveOnTrailingIconClick'
    | 'shouldFocusPrimaryActionOnClick'
    | 'component'
    | 'tag'
  > &
    ComponentProps<Component>;

  getElement(): ReturnType<InstanceType<C>['getElement']>;
}

export interface SMUIChipsChipAccessor {
  chipId: any;
  readonly selected: boolean;
  focusPrimaryAction(): void;
  focusTrailingAction(): void;
  removeFocus(): void;
  setSelectedFromChipSet(value: boolean, shouldNotifyClients: boolean): void;
}

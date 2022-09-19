import type { ComponentProps } from 'svelte';
import type { PaperComponentDev } from '@smui/paper';
import type Component from './Panel.svelte';

export declare class PanelComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    PaperComponentDev['$$prop_def'],
    | 'use'
    | 'class'
    | 'variant'
    | 'color'
    | 'elevation'
    | 'open'
    | 'disabled'
    | 'nonInteractive'
    | 'extend'
    | 'extendedElevation'
  > &
    ComponentProps<Component>;
}

export interface SMUIAccordionPanelAccessor {
  readonly open: boolean;
  setOpen(value: boolean): void;
}

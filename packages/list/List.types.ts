import type { SvelteComponentDev } from 'svelte/internal';
import type Component from './List.svelte';
import type { UlComponentDev as UlElementComponentDev } from '@smui/common/elements/index.js';

export declare class ListComponentDev<
  C extends SvelteComponentDev = UlElementComponentDev
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
    | 'nonInteractive'
    | 'dense'
    | 'textualList'
    | 'avatarList'
    | 'iconList'
    | 'imageList'
    | 'thumbnailList'
    | 'videoList'
    | 'twoLine'
    | 'threeLine'
    | 'vertical'
    | 'wrapFocus'
    | 'singleSelection'
    | 'selectedIndex'
    | 'radioList'
    | 'checkList'
    | 'hasTypeahead'
    | 'component'
  > &
    Component['$$prop_def'];
}

import type { SMUIListItemAccessor } from './Item.types.js';

export interface SMUIListAccessor {
  readonly element: Element;
  readonly items: SMUIListItemAccessor[];
  readonly typeaheadInProgress: boolean;
  typeaheadMatchItem(nextChar: string, startingIndex?: number): number;
  getOrderedList(): SMUIListItemAccessor[];
  focusItemAtIndex(index: number): void;
  addClassForElementIndex(index: number, className: string): void;
  removeClassForElementIndex(index: number, className: string): void;
  setAttributeForElementIndex(index: number, name: string, value: string): void;
  removeAttributeForElementIndex(index: number, name: string): void;
  getPrimaryTextAtIndex(index: number): string;
}

import type { SmuiComponentDev, ElementComponentDev } from '@smui/common';
import type Component from './List.svelte';

export declare class ListComponentDev<
    T extends string = 'ul',
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
    | 'tag'
  > &
    Component['$$prop_def'];

  getElement(): ReturnType<C['getElement']>;
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
  getAttributeFromElementIndex(index: number, name: string): string | null;
  getPrimaryTextAtIndex(index: number): string;
}

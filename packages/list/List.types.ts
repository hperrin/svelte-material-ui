import type { SMUIListItemAccessor } from './Item.types';

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

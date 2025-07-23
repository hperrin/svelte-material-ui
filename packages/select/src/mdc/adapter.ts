/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { Corner } from '@smui/menu-surface/constants';

/**
 * Defines the shape of the adapter expected by the foundation.
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface MDCSelectAdapter {
  /**
   * Adds class to select anchor element.
   */
  addClass(className: string): void;

  /**
   * Removes a class from the select anchor element.
   */
  removeClass(className: string): void;

  /**
   * Returns true if the select anchor element contains the given class name.
   */
  hasClass(className: string): boolean;

  /**
   * Activates the bottom line, showing a focused state.
   */
  activateBottomLine(): void;

  /**
   * Deactivates the bottom line.
   */
  deactivateBottomLine(): void;

  /**
   * Returns true if label exists, false if it doesn't.
   */
  hasLabel(): boolean;

  /**
   * Floats label determined based off of the shouldFloat argument.
   */
  floatLabel(shouldFloat: boolean): void;

  /**
   * Returns width of label in pixels, if the label exists.
   */
  getLabelWidth(): number;

  /**
   * Styles the label as required, if the label exists.
   */
  setLabelRequired(isRequired: boolean): void;

  /**
   * Returns true if outline element exists, false if it doesn't.
   */
  hasOutline(): boolean;

  /**
   * Only implement if outline element exists.
   */
  notchOutline(labelWidth: number): void;

  /**
   * Closes notch in outline element, if the outline exists.
   */
  closeOutline(): void;

  /**
   * Sets the line ripple transform origin center.
   */
  setRippleCenter(normalizedX: number): void;

  /**
   * Emits a change event when an element is selected.
   */
  notifyChange(value: string): void;

  /**
   * Sets the text content of the selectedText element to the given string.
   */
  setSelectedText(text: string): void;

  /**
   * Returns whether the select anchor is focused.
   */
  isSelectAnchorFocused(): boolean;

  /**
   * Gets the given attribute on the select anchor element.
   */
  getSelectAnchorAttr(attr: string): string | null;

  /**
   * Sets the given attribute on the select anchor element.
   */
  setSelectAnchorAttr(attr: string, value: string): void;

  /**
   * Removes the given attribute on the select anchor element.
   */
  removeSelectAnchorAttr(attr: string): void;

  // Menu-related methods ======================================================
  /**
   * Adds class to the menu element.
   */
  addMenuClass(className: string): void;

  /**
   * Removes a class from the menu element.
   */
  removeMenuClass(className: string): void;

  /**
   * Opens the menu.
   */
  openMenu(): void;

  /**
   * Closes the menu.
   */
  closeMenu(): void;

  /**
   * Returns the select anchor element.
   */
  getAnchorElement(): Element | null;

  /**
   * Sets the menu anchor element.
   */
  setMenuAnchorElement(anchorEl: Element): void;

  /**
   * Sets the menu anchor corner.
   */
  setMenuAnchorCorner(anchorCorner: Corner): void;

  /**
   * Sets whether the menu should wrap focus.
   */
  setMenuWrapFocus(wrapFocus: boolean): void;

  /**
   * Focuses the menu item element at the given index.
   */
  focusMenuItemAtIndex(index: number): void;

  /**
   * Returns the number of menu items.
   */
  getMenuItemCount(): number;

  /**
   * Returns an array representing the VALUE_ATTR attributes of each menu item.
   */
  getMenuItemValues(): string[];

  /**
   * Gets the text content of the menu item element at the given index.
   */
  getMenuItemTextAtIndex(index: number): string;

  /**
   * Returns the selected index.
   */
  getSelectedIndex(): number;

  /**
   * Sets the selected index in the menu.
   */
  setSelectedIndex(index: number): void;

  /**
   * Returns whether typeahead is in progress in the menu.
   */
  isTypeaheadInProgress(): boolean;

  /**
   * Adds a character to the list typeahead buffer and returns index of the
   * next item in the list matching the buffer.
   */
  typeaheadMatchItem(nextChar: string, startingIndex: number): number;
}

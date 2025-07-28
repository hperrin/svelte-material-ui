/**
 * @license
 * Copyright 2019 Google Inc.
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

import { SortValue } from './constants';

export interface MDCDataTableRowSelectionChangedEventDetail {
  rowIndex: number;
  rowId: string | null;
  selected: boolean;
}

/**
 * Event data required for sort action callback - `handleSortAction()`.
 * Component must send this data to foundation when sort action triggered on
 * sortable header cell.
 */
export interface SortActionEventData {
  columnId: string | null;
  columnIndex: number;
  headerCell: HTMLElement;
}

/**
 * Event detail triggered by foundation on sort action. This event detail is
 * used to trigger DOM event by component.
 */
export interface SortActionEventDetail {
  columnId: string | null;
  columnIndex: number;
  headerCell: HTMLElement;
  sortValue: SortValue;
}

/**
 * Event data used for data table row click action.
 */
export interface RowClickEventData {
  rowId: string | null;
  row: HTMLElement;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
}

/** Event details used for data table row click action. */
export interface RowClickEventDetail extends RowClickEventData {}

/**
 * Styles used to dynamically set dimensions of progress indicator based on
 * table header & body.
 */
export interface ProgressIndicatorStyles {
  height: string;
  top: string;
}

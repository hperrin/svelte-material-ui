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

import type { MDCTabScrollerAdapter } from './adapter';
import type { MDCTabScrollerAnimation } from './types';

export abstract class MDCTabScrollerRTL {
  constructor(protected readonly adapter: MDCTabScrollerAdapter) {}

  abstract getScrollPositionRTL(translateX: number): number;

  abstract scrollToRTL(scrollX: number): MDCTabScrollerAnimation;

  abstract incrementScrollRTL(scrollX: number): MDCTabScrollerAnimation;

  /**
   * @param scrollX The current scrollX position
   * @param translateX The current translateX position
   */
  abstract getAnimatingScrollPosition(
    scrollX: number,
    translateX: number,
  ): number;
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTabScrollerRTL;

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

import { MDCFoundation } from '@smui/base/foundation';
import type { MDCTabIndicatorAdapter } from './adapter';
import { cssClasses, strings } from './constants';

export abstract class MDCTabIndicatorFoundation extends MDCFoundation<MDCTabIndicatorAdapter> {
  static override get cssClasses() {
    return cssClasses;
  }

  static override get strings() {
    return strings;
  }

  static override get defaultAdapter(): MDCTabIndicatorAdapter {
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    return {
      addClass: () => undefined,
      removeClass: () => undefined,
      computeContentClientRect: () =>
        ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }) as any,
      setContentStyleProperty: () => undefined,
    };
    // tslint:enable:object-literal-sort-keys
  }

  constructor(adapter?: Partial<MDCTabIndicatorAdapter>) {
    super({ ...MDCTabIndicatorFoundation.defaultAdapter, ...adapter });
  }

  computeContentClientRect(): DOMRect {
    return this.adapter.computeContentClientRect();
  }

  abstract activate(previousIndicatorClientRect?: DOMRect): void;
  abstract deactivate(): void;
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTabIndicatorFoundation;

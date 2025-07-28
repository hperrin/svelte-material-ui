/**
 * @license
 * Copyright 2016 Google Inc.
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

import type { MDCRadioAdapter } from './adapter';
import { cssClasses, strings } from './constants';

/** MDC Radio Foundation */
export class MDCRadioFoundation extends MDCFoundation<MDCRadioAdapter> {
  static override get cssClasses() {
    return cssClasses;
  }

  static override get strings() {
    return strings;
  }

  static override get defaultAdapter(): MDCRadioAdapter {
    return {
      addClass: () => undefined,
      removeClass: () => undefined,
      setNativeControlDisabled: () => undefined,
    };
  }

  constructor(adapter?: Partial<MDCRadioAdapter>) {
    super({ ...MDCRadioFoundation.defaultAdapter, ...adapter });
  }

  setDisabled(disabled: boolean) {
    const { DISABLED } = MDCRadioFoundation.cssClasses;
    this.adapter.setNativeControlDisabled(disabled);
    if (disabled) {
      this.adapter.addClass(DISABLED);
    } else {
      this.adapter.removeClass(DISABLED);
    }
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCRadioFoundation;

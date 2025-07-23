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

import { MDCComponent } from '@smui/base/component';
import { estimateScrollWidth } from '@smui/dom/ponyfill';
import type { MDCFloatingLabelAdapter } from './adapter';
import { MDCFloatingLabelFoundation } from './foundation';

export type MDCFloatingLabelFactory = (
  el: Element,
  foundation?: MDCFloatingLabelFoundation,
) => MDCFloatingLabel;

export class MDCFloatingLabel extends MDCComponent<MDCFloatingLabelFoundation> {
  static override attachTo(root: Element): MDCFloatingLabel {
    return new MDCFloatingLabel(root);
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */
  shake(shouldShake: boolean) {
    this.foundation.shake(shouldShake);
  }

  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */
  float(shouldFloat: boolean) {
    this.foundation.float(shouldFloat);
  }

  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */
  setRequired(isRequired: boolean) {
    this.foundation.setRequired(isRequired);
  }

  getWidth(): number {
    return this.foundation.getWidth();
  }

  override getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    const adapter: MDCFloatingLabelAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      getWidth: () => estimateScrollWidth(this.root),
      registerInteractionHandler: (evtType, handler) =>
        this.listen(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        this.unlisten(evtType, handler),
    };
    // tslint:enable:object-literal-sort-keys
    return new MDCFloatingLabelFoundation(adapter);
  }
}

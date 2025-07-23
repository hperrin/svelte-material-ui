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
import type { SpecificEventListener } from '@smui/base/types';
import type { MDCFloatingLabelAdapter } from './adapter';
import { cssClasses } from './constants';

export class MDCFloatingLabelFoundation extends MDCFoundation<MDCFloatingLabelAdapter> {
  static override get cssClasses() {
    return cssClasses;
  }

  /**
   * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
   */
  static override get defaultAdapter(): MDCFloatingLabelAdapter {
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    return {
      addClass: () => undefined,
      removeClass: () => undefined,
      getWidth: () => 0,
      registerInteractionHandler: () => undefined,
      deregisterInteractionHandler: () => undefined,
    };
    // tslint:enable:object-literal-sort-keys
  }

  private readonly shakeAnimationEndHandler: SpecificEventListener<'animationend'>;

  constructor(adapter?: Partial<MDCFloatingLabelAdapter>) {
    super({ ...MDCFloatingLabelFoundation.defaultAdapter, ...adapter });

    this.shakeAnimationEndHandler = () => {
      this.handleShakeAnimationEnd();
    };
  }

  override init() {
    this.adapter.registerInteractionHandler(
      'animationend',
      this.shakeAnimationEndHandler,
    );
  }

  override destroy() {
    this.adapter.deregisterInteractionHandler(
      'animationend',
      this.shakeAnimationEndHandler,
    );
  }

  /**
   * Returns the width of the label element.
   */
  getWidth(): number {
    return this.adapter.getWidth();
  }

  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */
  shake(shouldShake: boolean) {
    const { LABEL_SHAKE } = MDCFloatingLabelFoundation.cssClasses;
    if (shouldShake) {
      this.adapter.addClass(LABEL_SHAKE);
    } else {
      this.adapter.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */
  float(shouldFloat: boolean) {
    const { LABEL_FLOAT_ABOVE, LABEL_SHAKE } =
      MDCFloatingLabelFoundation.cssClasses;
    if (shouldFloat) {
      this.adapter.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */
  setRequired(isRequired: boolean) {
    const { LABEL_REQUIRED } = MDCFloatingLabelFoundation.cssClasses;
    if (isRequired) {
      this.adapter.addClass(LABEL_REQUIRED);
    } else {
      this.adapter.removeClass(LABEL_REQUIRED);
    }
  }

  private handleShakeAnimationEnd() {
    const { LABEL_SHAKE } = MDCFloatingLabelFoundation.cssClasses;
    this.adapter.removeClass(LABEL_SHAKE);
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCFloatingLabelFoundation;

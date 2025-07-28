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

import type { MDCIconButtonToggleAdapter } from './adapter';
import { cssClasses, strings } from './constants';

/** MDC Icon Button Toggle Foundation */
export class MDCIconButtonToggleFoundation extends MDCFoundation<MDCIconButtonToggleAdapter> {
  /**
   * Whether the icon button has an aria-label that changes depending on
   * toggled state.
   */
  private hasToggledAriaLabel = false;

  static override get cssClasses() {
    return cssClasses;
  }

  static override get strings() {
    return strings;
  }

  static override get defaultAdapter(): MDCIconButtonToggleAdapter {
    return {
      addClass: () => undefined,
      hasClass: () => false,
      notifyChange: () => undefined,
      removeClass: () => undefined,
      getAttr: () => null,
      setAttr: () => undefined,
    };
  }

  constructor(adapter?: Partial<MDCIconButtonToggleAdapter>) {
    super({ ...MDCIconButtonToggleFoundation.defaultAdapter, ...adapter });
  }

  override init() {
    const ariaLabelOn = this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON);
    const ariaLabelOff = this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(strings.ARIA_PRESSED) !== null) {
        throw new Error(
          'MDCIconButtonToggleFoundation: Button should not set ' +
            '`aria-pressed` if it has a toggled ARIA label.',
        );
      }

      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, String(this.isOn()));
    }
  }

  handleClick() {
    this.toggle();
    this.adapter.notifyChange({ isOn: this.isOn() });
  }

  isOn(): boolean {
    return this.adapter.hasClass(cssClasses.ICON_BUTTON_ON);
  }

  toggle(isOn: boolean = !this.isOn()) {
    // Toggle UI based on state.
    if (isOn) {
      this.adapter.addClass(cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(cssClasses.ICON_BUTTON_ON);
    }

    // Toggle aria attributes based on state.
    if (this.hasToggledAriaLabel) {
      const ariaLabel = isOn
        ? this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON)
        : this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(strings.ARIA_LABEL, ariaLabel || '');
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, `${isOn}`);
    }
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCIconButtonToggleFoundation;

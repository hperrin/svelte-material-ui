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

import type { MDCDrawerAdapter } from '../adapter';
import { cssClasses, strings } from '../constants';

/** MDC Dismissible Drawer Foundation */
export class MDCDismissibleDrawerFoundation extends MDCFoundation<MDCDrawerAdapter> {
  static override get strings() {
    return strings;
  }

  static override get cssClasses() {
    return cssClasses;
  }

  static override get defaultAdapter(): MDCDrawerAdapter {
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    return {
      addClass: () => undefined,
      removeClass: () => undefined,
      hasClass: () => false,
      elementHasClass: () => false,
      notifyClose: () => undefined,
      notifyOpen: () => undefined,
      saveFocus: () => undefined,
      restoreFocus: () => undefined,
      focusActiveNavigationItem: () => undefined,
      trapFocus: () => undefined,
      releaseFocus: () => undefined,
    };
    // tslint:enable:object-literal-sort-keys
  }

  private animationFrame = 0;
  private animationTimer = 0;

  constructor(adapter?: Partial<MDCDrawerAdapter>) {
    super({ ...MDCDismissibleDrawerFoundation.defaultAdapter, ...adapter });
  }

  override destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }

  /**
   * Opens the drawer from the closed state.
   */
  open() {
    if (this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter.addClass(cssClasses.OPEN);
    this.adapter.addClass(cssClasses.ANIMATE);

    // Wait a frame once display is no longer "none", to establish basis for
    // animation
    this.runNextAnimationFrame(() => {
      this.adapter.addClass(cssClasses.OPENING);
    });

    this.adapter.saveFocus();
  }

  /**
   * Closes the drawer from the open state.
   */
  close() {
    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter.addClass(cssClasses.CLOSING);
  }

  /**
   * Returns true if the drawer is in the open position.
   * @return true if drawer is in open state.
   */
  isOpen(): boolean {
    return this.adapter.hasClass(cssClasses.OPEN);
  }

  /**
   * Returns true if the drawer is animating open.
   * @return true if drawer is animating open.
   */
  isOpening(): boolean {
    return (
      this.adapter.hasClass(cssClasses.OPENING) ||
      this.adapter.hasClass(cssClasses.ANIMATE)
    );
  }

  /**
   * Returns true if the drawer is animating closed.
   * @return true if drawer is animating closed.
   */
  isClosing(): boolean {
    return this.adapter.hasClass(cssClasses.CLOSING);
  }

  /**
   * Keydown handler to close drawer when key is escape.
   */
  handleKeydown(event: KeyboardEvent) {
    const { keyCode, key } = event;
    const isEscape = key === 'Escape' || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  }

  /**
   * Handles the `transitionend` event when the drawer finishes opening/closing.
   */
  handleTransitionEnd(event: TransitionEvent) {
    const { OPENING, CLOSING, OPEN, ANIMATE, ROOT } = cssClasses;

    // In Edge, transitionend on ripple pseudo-elements yields a target without
    // classList, so check for Element first.
    const isRootElement =
      this.isElement(event.target) &&
      this.adapter.elementHasClass(event.target, ROOT);
    if (!isRootElement) {
      return;
    }

    if (this.isClosing()) {
      this.adapter.removeClass(OPEN);
      this.closed();
      this.adapter.restoreFocus();
      this.adapter.notifyClose();
    } else {
      this.adapter.focusActiveNavigationItem();
      this.opened();
      this.adapter.notifyOpen();
    }

    this.adapter.removeClass(ANIMATE);
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(CLOSING);
  }

  /**
   * Extension point for when drawer finishes open animation.
   */
  protected opened() {} // tslint:disable-line:no-empty

  /**
   * Extension point for when drawer finishes close animation.
   */
  protected closed() {} // tslint:disable-line:no-empty

  /**
   * Runs the given logic on the next animation frame, using setTimeout to
   * factor in Firefox reflow behavior.
   */
  private runNextAnimationFrame(callback: () => void) {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(() => {
      this.animationFrame = 0;
      clearTimeout(this.animationTimer);
      this.animationTimer = setTimeout(callback, 0) as unknown as number;
    });
  }

  private isElement(element: unknown): element is Element {
    // In Edge, transitionend on ripple pseudo-elements yields a target without
    // classList.
    return Boolean((element as Element).classList);
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCDismissibleDrawerFoundation;

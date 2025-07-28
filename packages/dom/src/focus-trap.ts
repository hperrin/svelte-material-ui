/**
 * @license
 * Copyright 2020 Google Inc.
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

const FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';

/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
export class FocusTrap {
  // Previously focused element before trapping focus.
  private elFocusedBeforeTrapFocus: HTMLElement | null = null;

  constructor(
    private readonly root: HTMLElement,
    private readonly options: FocusOptions = {},
  ) {}

  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */
  trapFocus() {
    const focusableEls = this.getFocusableElements(this.root);
    if (focusableEls.length === 0) {
      throw new Error(
        'FocusTrap: Element must have at least one focusable child.',
      );
    }

    this.elFocusedBeforeTrapFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    this.wrapTabFocus(this.root);

    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  }

  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */
  releaseFocus() {
    Array.from(
      this.root.querySelectorAll<HTMLElement>(`.${FOCUS_SENTINEL_CLASS}`),
    ).forEach((sentinelEl: HTMLElement) => {
      sentinelEl.parentElement!.removeChild(sentinelEl);
    });

    if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  }

  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */
  private wrapTabFocus(el: HTMLElement) {
    const sentinelStart = this.createSentinel();
    const sentinelEnd = this.createSentinel();

    sentinelStart.addEventListener('focus', () => {
      const focusableEls = this.getFocusableElements(el);
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener('focus', () => {
      const focusableEls = this.getFocusableElements(el);
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });

    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  }

  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */
  private focusInitialElement(
    focusableEls: HTMLElement[],
    initialFocusEl?: HTMLElement,
  ) {
    let focusIndex = 0;
    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }
    focusableEls[focusIndex].focus();
  }

  private getFocusableElements(root: HTMLElement): HTMLElement[] {
    const focusableEls = Array.from(
      root.querySelectorAll<HTMLElement>(
        '[autofocus], [tabindex], a, input, textarea, select, button',
      ),
    );
    return focusableEls.filter((el) => {
      const isDisabledOrHidden =
        el.getAttribute('aria-disabled') === 'true' ||
        el.getAttribute('disabled') != null ||
        el.getAttribute('hidden') != null ||
        el.getAttribute('aria-hidden') === 'true';
      const isTabbableAndVisible =
        el.tabIndex >= 0 &&
        el.getBoundingClientRect().width > 0 &&
        !el.classList.contains(FOCUS_SENTINEL_CLASS) &&
        !isDisabledOrHidden;

      let isProgrammaticallyHidden = false;
      if (isTabbableAndVisible) {
        const style = getComputedStyle(el);
        isProgrammaticallyHidden =
          style.display === 'none' || style.visibility === 'hidden';
      }
      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  }

  private createSentinel() {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('tabindex', '0');
    // Don't announce in screen readers.
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  }
}

/** Customization options. */
export interface FocusOptions {
  // The element to focus initially when trapping focus.
  //  Must be a child of the root element.
  initialFocusEl?: HTMLElement;

  // Whether to skip initially focusing on any element when trapping focus.
  // By default, focus is set on the first focusable child element of the root.
  // This is useful if the caller wants to handle setting initial focus.
  skipInitialFocus?: boolean;

  // Whether to restore focus on the previously focused element when releasing
  // focus. This is useful if the caller wants to handle restoring focus.
  skipRestoreFocus?: boolean;
}

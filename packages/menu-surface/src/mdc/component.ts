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

import { MDCComponent } from '@smui/base/component';
import type { SpecificEventListener } from '@smui/base/types';
import type { MDCMenuSurfaceAdapter } from './adapter';
import { Corner, cssClasses, strings } from './constants';
import { MDCMenuSurfaceFoundation } from './foundation';
import type { MDCMenuDistance } from './types';
import { getCorrectPropertyName } from '@smui/animation/util';

type RegisterFunction = () => void;

export type MDCMenuSurfaceFactory = (
  el: Element,
  foundation?: MDCMenuSurfaceFoundation,
) => MDCMenuSurface;

export class MDCMenuSurface extends MDCComponent<MDCMenuSurfaceFoundation> {
  static override attachTo(root: Element): MDCMenuSurface {
    return new MDCMenuSurface(root);
  }

  anchorElement!: Element | null; // assigned in initialSyncWithDOM()

  private previousFocus?: HTMLElement | SVGElement | null;

  private handleKeydown!: SpecificEventListener<'keydown'>; // assigned in initialSyncWithDOM()
  private handleBodyClick!: SpecificEventListener<'click'>; // assigned in initialSyncWithDOM()

  private registerBodyClickListener!: RegisterFunction; // assigned in initialSyncWithDOM()
  private deregisterBodyClickListener!: RegisterFunction; // assigned in initialSyncWithDOM()

  override initialSyncWithDOM() {
    const parentEl = this.root.parentElement;
    this.anchorElement =
      parentEl && parentEl.classList.contains(cssClasses.ANCHOR)
        ? parentEl
        : null;

    if (this.root.classList.contains(cssClasses.FIXED)) {
      this.setFixedPosition(true);
    }

    this.handleKeydown = (event) => {
      this.foundation.handleKeydown(event);
    };
    this.handleBodyClick = (event) => {
      this.foundation.handleBodyClick(event);
    };

    // capture so that no race between handleBodyClick and quickOpen when
    // menusurface opened on button click which registers this listener
    this.registerBodyClickListener = () => {
      document.body.addEventListener('click', this.handleBodyClick, {
        capture: true,
      });
    };
    this.deregisterBodyClickListener = () => {
      document.body.removeEventListener('click', this.handleBodyClick, {
        capture: true,
      });
    };

    this.listen('keydown', this.handleKeydown);
    this.listen(strings.OPENED_EVENT, this.registerBodyClickListener);
    this.listen(strings.CLOSED_EVENT, this.deregisterBodyClickListener);
  }

  override destroy() {
    this.unlisten('keydown', this.handleKeydown);
    this.unlisten(strings.OPENED_EVENT, this.registerBodyClickListener);
    this.unlisten(strings.CLOSED_EVENT, this.deregisterBodyClickListener);
    super.destroy();
  }

  isOpen(): boolean {
    return this.foundation.isOpen();
  }

  open() {
    this.foundation.open();
  }

  close(skipRestoreFocus = false) {
    this.foundation.close(skipRestoreFocus);
  }

  set quickOpen(quickOpen: boolean) {
    this.foundation.setQuickOpen(quickOpen);
  }

  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */
  setIsHoisted(isHoisted: boolean) {
    this.foundation.setIsHoisted(isHoisted);
  }

  /** Sets the element that the menu-surface is anchored to. */
  setMenuSurfaceAnchorElement(element: Element) {
    this.anchorElement = element;
  }

  /** Sets the menu-surface to position: fixed. */
  setFixedPosition(isFixed: boolean) {
    if (isFixed) {
      this.root.classList.add(cssClasses.FIXED);
    } else {
      this.root.classList.remove(cssClasses.FIXED);
    }

    this.foundation.setFixedPosition(isFixed);
  }

  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
  setAbsolutePosition(x: number, y: number) {
    this.foundation.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  }

  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */
  setAnchorCorner(corner: Corner) {
    this.foundation.setAnchorCorner(corner);
  }

  setAnchorMargin(margin: Partial<MDCMenuDistance>) {
    this.foundation.setAnchorMargin(margin);
  }

  override getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    const adapter: MDCMenuSurfaceAdapter = {
      addClass: (className) => this.root.classList.add(className),
      removeClass: (className) => this.root.classList.remove(className),
      hasClass: (className) => this.root.classList.contains(className),
      hasAnchor: () => !!this.anchorElement,
      notifyClose: () =>
        this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {}),
      notifyClosing: () => {
        this.emit(MDCMenuSurfaceFoundation.strings.CLOSING_EVENT, {});
      },
      notifyOpen: () =>
        this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {}),
      notifyOpening: () =>
        this.emit(MDCMenuSurfaceFoundation.strings.OPENING_EVENT, {}),
      isElementInContainer: (el) => this.root.contains(el),
      isRtl: () =>
        getComputedStyle(this.root).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        const propertyName = `${getCorrectPropertyName(window, 'transform')}-origin`;
        (this.root as HTMLElement).style.setProperty(propertyName, origin);
      },

      isFocused: () => document.activeElement === this.root,
      saveFocus: () => {
        this.previousFocus = document.activeElement as
          | HTMLElement
          | SVGElement
          | null;
      },
      restoreFocus: () => {
        if (this.root.contains(document.activeElement)) {
          if (this.previousFocus && this.previousFocus.focus) {
            this.previousFocus.focus();
          }
        }
      },
      getInnerDimensions: () => {
        return {
          width: (this.root as HTMLElement).offsetWidth,
          height: (this.root as HTMLElement).offsetHeight,
        };
      },
      getAnchorDimensions: () =>
        this.anchorElement ? this.anchorElement.getBoundingClientRect() : null,
      getWindowDimensions: () => {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: () => {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        };
      },
      getWindowScroll: () => {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: (position) => {
        const rootHTML = this.root as HTMLElement;
        rootHTML.style.left = 'left' in position ? `${position.left}px` : '';
        rootHTML.style.right = 'right' in position ? `${position.right}px` : '';
        rootHTML.style.top = 'top' in position ? `${position.top}px` : '';
        rootHTML.style.bottom =
          'bottom' in position ? `${position.bottom}px` : '';
      },
      setMaxHeight: (height) => {
        (this.root as HTMLElement).style.maxHeight = height;
      },
    };
    // tslint:enable:object-literal-sort-keys
    return new MDCMenuSurfaceFoundation(adapter);
  }
}

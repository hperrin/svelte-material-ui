/**
 * @license
 * Copyright 2017 Google Inc.
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
import type { MDCProgressIndicator } from '@smui/progress-indicator/component';

import type { MDCLinearProgressAdapter } from './adapter';
import { MDCLinearProgressFoundation } from './foundation';
import type { WithMDCResizeObserver } from './types';

/** MDC Linear Progress */
export class MDCLinearProgress
  extends MDCComponent<MDCLinearProgressFoundation>
  implements MDCProgressIndicator
{
  static override attachTo(root: HTMLElement) {
    return new MDCLinearProgress(root);
  }

  set determinate(value: boolean) {
    this.foundation.setDeterminate(value);
  }

  set progress(value: number) {
    this.foundation.setProgress(value);
  }

  set buffer(value: number) {
    this.foundation.setBuffer(value);
  }

  open() {
    this.foundation.open();
  }

  close() {
    this.foundation.close();
  }

  override initialSyncWithDOM() {
    this.root.addEventListener('transitionend', () => {
      this.foundation.handleTransitionEnd();
    });
  }

  override getDefaultFoundation() {
    // DO NOT INLINE this variable. For backward compatibility, foundations take
    // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
    // methods, we need a separate, strongly typed adapter variable.
    const adapter: MDCLinearProgressAdapter = {
      addClass: (className: string) => {
        this.root.classList.add(className);
      },
      forceLayout: () => {
        this.root.getBoundingClientRect();
      },
      setBufferBarStyle: (styleProperty: string, value: string) => {
        const bufferBar = this.root.querySelector<HTMLElement>(
          MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR,
        );
        if (bufferBar) {
          bufferBar.style.setProperty(styleProperty, value);
        }
      },
      setPrimaryBarStyle: (styleProperty: string, value: string) => {
        const primaryBar = this.root.querySelector<HTMLElement>(
          MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR,
        );
        if (primaryBar) {
          primaryBar.style.setProperty(styleProperty, value);
        }
      },
      hasClass: (className: string) => this.root.classList.contains(className),
      removeAttribute: (attributeName: string) => {
        this.root.removeAttribute(attributeName);
      },
      removeClass: (className: string) => {
        this.root.classList.remove(className);
      },
      setAttribute: (attributeName: string, value: string) => {
        this.safeSetAttribute(this.root, attributeName, value);
      },
      setStyle: (name: string, value: string) => {
        this.root.style.setProperty(name, value);
      },
      attachResizeObserver: (callback) => {
        const RO = (window as unknown as WithMDCResizeObserver).ResizeObserver;
        if (RO) {
          const ro = new RO(callback);
          ro.observe(this.root);
          return ro;
        }

        return null;
      },
      getWidth: () => this.root.offsetWidth,
    };
    return new MDCLinearProgressFoundation(adapter);
  }
}

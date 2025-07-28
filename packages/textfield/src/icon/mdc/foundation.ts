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

import { MDCFoundation } from '@smui/base/foundation';
import type { SpecificEventListener } from '@smui/base/types';

import type { MDCTextFieldIconAdapter } from './adapter';
import { cssClasses, strings } from './constants';

type InteractionEventType = 'click' | 'keydown';

const INTERACTION_EVENTS: InteractionEventType[] = ['click', 'keydown'];

/** MDC Text Field Icon Foundation */
export class MDCTextFieldIconFoundation extends MDCFoundation<MDCTextFieldIconAdapter> {
  static override get strings() {
    return strings;
  }

  static override get cssClasses() {
    return cssClasses;
  }

  /**
   * See {@link MDCTextFieldIconAdapter} for typing information on parameters
   * and return types.
   */
  static override get defaultAdapter(): MDCTextFieldIconAdapter {
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    return {
      getAttr: () => null,
      setAttr: () => undefined,
      removeAttr: () => undefined,
      setContent: () => undefined,
      registerInteractionHandler: () => undefined,
      deregisterInteractionHandler: () => undefined,
      notifyIconAction: () => undefined,
    };
    // tslint:enable:object-literal-sort-keys
  }

  private savedTabIndex: string | null = null;
  private readonly interactionHandler: SpecificEventListener<InteractionEventType>;

  constructor(adapter?: Partial<MDCTextFieldIconAdapter>) {
    super({ ...MDCTextFieldIconFoundation.defaultAdapter, ...adapter });

    this.interactionHandler = (event) => {
      this.handleInteraction(event);
    };
  }

  override init() {
    this.savedTabIndex = this.adapter.getAttr('tabindex');

    for (const eventType of INTERACTION_EVENTS) {
      this.adapter.registerInteractionHandler(
        eventType,
        this.interactionHandler,
      );
    }
  }

  override destroy() {
    for (const eventType of INTERACTION_EVENTS) {
      this.adapter.deregisterInteractionHandler(
        eventType,
        this.interactionHandler,
      );
    }
  }

  setDisabled(disabled: boolean) {
    if (!this.savedTabIndex) {
      return;
    }

    if (disabled) {
      this.adapter.setAttr('tabindex', '-1');
      this.adapter.removeAttr('role');
    } else {
      this.adapter.setAttr('tabindex', this.savedTabIndex);
      this.adapter.setAttr('role', strings.ICON_ROLE);
    }
  }

  setAriaLabel(label: string) {
    this.adapter.setAttr('aria-label', label);
  }

  setContent(content: string) {
    this.adapter.setContent(content);
  }

  handleInteraction(event: MouseEvent | KeyboardEvent) {
    const isEnterKey =
      (event as KeyboardEvent).key === 'Enter' ||
      (event as KeyboardEvent).keyCode === 13;
    const isSpaceKey = (event as KeyboardEvent).key === ' ';
    if (event.type === 'click' || isEnterKey || isSpaceKey) {
      event.preventDefault(); // stop click from causing host label to focus
      // input
      this.adapter.notifyIconAction();
    }
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCTextFieldIconFoundation;

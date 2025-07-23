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

import type { EventType, SpecificEventListener } from '@smui/base/types';
import type { MDCTextFieldNativeInputElement } from './types';

/**
 * Defines the shape of the adapter expected by the foundation.
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface MDCTextFieldAdapter
  extends MDCTextFieldRootAdapter,
    MDCTextFieldInputAdapter,
    MDCTextFieldLabelAdapter,
    MDCTextFieldLineRippleAdapter,
    MDCTextFieldOutlineAdapter {}

export interface MDCTextFieldRootAdapter {
  /**
   * Adds a class to the root Element.
   */
  addClass(className: string): void;

  /**
   * Removes a class from the root Element.
   */
  removeClass(className: string): void;

  /**
   * @return true if the root element contains the given class name.
   */
  hasClass(className: string): boolean;

  /**
   * Registers an event handler on the root element for a given event.
   */
  registerTextFieldInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event handler on the root element for a given event.
   */
  deregisterTextFieldInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Registers a validation attribute change listener on the input element.
   * Handler accepts list of attribute names.
   */
  registerValidationAttributeChangeHandler(
    handler: (attributeNames: string[]) => void,
  ): MutationObserver;

  /**
   * Disconnects a validation attribute observer on the input element.
   */
  deregisterValidationAttributeChangeHandler(observer: MutationObserver): void;
}

export interface MDCTextFieldInputAdapter {
  /**
   * @return The native `<input>` element, or an object with the same shape.
   * Note that this method can return null, which the foundation will handle gracefully.
   */
  getNativeInput(): MDCTextFieldNativeInputElement | null;

  /**
   * Sets the specified attribute to the specified value on the input element.
   */
  setInputAttr(attr: string, value: string): void;

  /**
   * Removes the specified attribute from the input element.
   */
  removeInputAttr(attr: string): void;

  /**
   * @return true if the textfield is focused. We achieve this via `document.activeElement === this.root`.
   */
  isFocused(): boolean;

  /**
   * Registers an event listener on the native input element for a given event.
   */
  registerInputInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event listener on the native input element for a given event.
   */
  deregisterInputInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
  ): void;
}

export interface MDCTextFieldLabelAdapter {
  /**
   * Only implement if label exists.
   * Shakes label if shouldShake is true.
   */
  shakeLabel(shouldShake: boolean): void;

  /**
   * Only implement if label exists.
   * Floats the label above the input element if shouldFloat is true.
   */
  floatLabel(shouldFloat: boolean): void;

  /**
   * @return true if label element exists, false if it doesn't.
   */
  hasLabel(): boolean;

  /**
   * Only implement if label exists.
   * @return width of label in pixels.
   */
  getLabelWidth(): number;

  /**
   * Only implement if label exists.
   * Styles the label as required.
   */
  setLabelRequired(isRequired: boolean): void;
}

export interface MDCTextFieldLineRippleAdapter {
  /**
   * Activates the line ripple.
   */
  activateLineRipple(): void;

  /**
   * Deactivates the line ripple.
   */
  deactivateLineRipple(): void;

  /**
   * Sets the transform origin of the line ripple.
   */
  setLineRippleTransformOrigin(normalizedX: number): void;
}

export interface MDCTextFieldOutlineAdapter {
  /**
   * @return true if outline element exists, false if it doesn't.
   */
  hasOutline(): boolean;

  /**
   * Only implement if outline element exists.
   */
  notchOutline(labelWidth: number): void;

  /**
   * Only implement if outline element exists.
   * Closes notch in outline element.
   */
  closeOutline(): void;
}

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

import type { EventType, SpecificEventListener } from '@smui/base/types';

import { CssClasses } from './constants';

/**
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface MDCTooltipAdapter {
  /**
   * @return the attribute string if present on the root element, null
   * otherwise.
   */
  getAttribute(attr: string): string | null;

  /**
   * Sets an attribute on the root element.
   */
  setAttribute(attr: string, value: string): void;

  /**
   * Removes an attribute on the root element.
   */
  removeAttribute(attr: string): void;

  /**
   * Adds a class onto the root element.
   */
  addClass(className: CssClasses): void;

  /**
   * @return whether or not the root element has the provided className.
   */
  hasClass(className: CssClasses): boolean;

  /**
   * Removes a class from the root element.
   */
  removeClass(className: CssClasses): void;

  /**
   * @return the value of the given computed style property on the root element.
   */
  getComputedStyleProperty(propertyName: string): string;

  /**
   * Sets the property value of the given style property on the root element.
   */
  setStyleProperty(propertyName: string, value: string): void;

  /**
   * Sets the property value of the given style property on the tooltip's
   * surface-animation element (indicated by the
   * "mdc-tooltip__surface-animation" class).
   */
  setSurfaceAnimationStyleProperty(propertyName: string, value: string): void;

  /**
   * @return the width of the viewport.
   */
  getViewportWidth(): number;

  /**
   * @return the height of the viewport.
   */
  getViewportHeight(): number;

  /**
   * @return the width and height of the tooltip element.
   */
  getTooltipSize(): { width: number; height: number };

  /**
   * @return the DOMRect for the anchor element.
   */
  getAnchorBoundingRect(): DOMRect | null;

  /**
   * @return the DOMRect for the parent of the tooltip element.
   */
  getParentBoundingRect(): DOMRect | null;

  /**
   * @return the attribute string if present on the anchor element, null
   * otherwise.
   */
  getAnchorAttribute(attr: string): string | null;

  /**
   * Sets an attribute on the anchor element.
   */
  setAnchorAttribute(attr: string, value: string): void;

  /**
   * @return true if the text direction is right-to-left.
   */
  isRTL(): boolean;

  /**
   * Checks if element is contained within the anchor element.
   */
  anchorContainsElement(element: Element): boolean;

  /**
   * Checks if element is contained within the tooltip element.
   */
  tooltipContainsElement(element: Element): boolean;

  /**
   * Sets focus on the anchor element.
   */
  focusAnchorElement(): void;

  /**
   * Registers an event listener to the root element.
   */
  registerEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event listener to the root element.
   */
  deregisterEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Registers an event listener to the anchor element.
   */
  registerAnchorEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event listener to the anchor element.
   */
  deregisterAnchorEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Registers an event listener to the document body.
   */
  registerDocumentEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event listener to the document body.
   */
  deregisterDocumentEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Registers an event listener to the window.
   */
  registerWindowEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Deregisters an event listener to the window.
   */
  deregisterWindowEventHandler<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
  ): void;

  /**
   * Notification that the tooltip element has been fully hidden. Typically used
   * to wait for the hide animation to complete.
   */
  notifyHidden(): void;

  /**
   * Notification that the tooltip element has been shown.
   */
  notifyShown(): void;

  /**
   * @return the DOMRect for the caret element.
   */
  getTooltipCaretBoundingRect(): DOMRect | null;

  /**
   * Sets the property value of the given style property on both the caret-top
   * and caret-bottom elements.
   */
  setTooltipCaretStyle(propertyName: string, value: string): void;

  /**
   * Clears all inline styles set on the caret-top and caret-bottom elements.
   */
  clearTooltipCaretStyles(): void;

  /**
   * @return the active element of the document that owns the tooltip.
   */
  getActiveElement(): Element | null;

  /**
   * @return whether the provided object is an Element or not. This is
   * required because Elements from iframes are typed differently.
   */
  isInstanceOfElement(eventTarget: EventTarget | null): boolean;
}

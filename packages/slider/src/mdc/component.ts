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

import { MDCComponent } from '@smui/base/component';
import type { EventType, SpecificEventListener } from '@smui/base/types';
import { applyPassive } from '@smui/dom/events';
import { matches } from '@smui/dom/ponyfill';
import type { MDCRippleAdapter } from '@smui/ripple/adapter';
import { MDCRipple } from '@smui/ripple/component';
import { MDCRippleFoundation } from '@smui/ripple/foundation';

import type { MDCSliderAdapter } from './adapter';
import { cssClasses, events } from './constants';
import { MDCSliderFoundation } from './foundation';
import { type MDCSliderChangeEventDetail, Thumb, TickMark } from './types';

/** Vanilla implementation of slider component. */
export class MDCSlider extends MDCComponent<MDCSliderFoundation> {
  static override attachTo(
    root: HTMLElement,
    options: {
      skipInitialUIUpdate?: boolean;
    } = {},
  ) {
    return new MDCSlider(root, undefined, options);
  }

  private inputs!: HTMLInputElement[]; // Assigned in #initialize.
  private thumbs!: HTMLElement[]; // Assigned in #initialize.
  private trackActive!: HTMLElement; // Assigned in #initialize.
  private ripples!: MDCRipple[]; // Assigned in #initialize.

  private skipInitialUIUpdate = false;
  // Function that maps a slider value to the value of the `aria-valuetext`
  // attribute on the thumb element.
  private valueToAriaValueTextFn: ((value: number) => string) | null = null;

  override getDefaultFoundation() {
    // tslint:disable:object-literal-sort-keys Methods should be in the same
    // order as the adapter interface.
    const adapter: MDCSliderAdapter = {
      hasClass: (className) => this.root.classList.contains(className),
      addClass: (className) => {
        this.root.classList.add(className);
      },
      removeClass: (className) => {
        this.root.classList.remove(className);
      },
      addThumbClass: (className, thumb: Thumb) => {
        this.getThumbEl(thumb).classList.add(className);
      },
      removeThumbClass: (className, thumb: Thumb) => {
        this.getThumbEl(thumb).classList.remove(className);
      },
      getAttribute: (attribute) => this.root.getAttribute(attribute),
      getInputValue: (thumb: Thumb) => this.getInput(thumb).value,
      setInputValue: (value: string, thumb: Thumb) => {
        this.getInput(thumb).value = value;
      },
      getInputAttribute: (attribute, thumb: Thumb) =>
        this.getInput(thumb).getAttribute(attribute),
      setInputAttribute: (attribute, value, thumb: Thumb) => {
        this.getInput(thumb).setAttribute(attribute, value);
      },
      removeInputAttribute: (attribute, thumb: Thumb) => {
        this.getInput(thumb).removeAttribute(attribute);
      },
      focusInput: (thumb: Thumb) => {
        this.getInput(thumb).focus();
      },
      isInputFocused: (thumb: Thumb) =>
        this.getInput(thumb) === document.activeElement,
      shouldHideFocusStylesForPointerEvents: () => false,
      getThumbKnobWidth: (thumb: Thumb) => {
        return this.getThumbEl(thumb)
          .querySelector<HTMLElement>(`.${cssClasses.THUMB_KNOB}`)!
          .getBoundingClientRect().width;
      },
      getThumbBoundingClientRect: (thumb: Thumb) =>
        this.getThumbEl(thumb).getBoundingClientRect(),
      getBoundingClientRect: () => this.root.getBoundingClientRect(),
      getValueIndicatorContainerWidth: (thumb: Thumb) => {
        return this.getThumbEl(thumb)
          .querySelector<HTMLElement>(
            `.${cssClasses.VALUE_INDICATOR_CONTAINER}`,
          )!
          .getBoundingClientRect().width;
      },
      isRTL: () => getComputedStyle(this.root).direction === 'rtl',
      setThumbStyleProperty: (propertyName, value, thumb: Thumb) => {
        this.getThumbEl(thumb).style.setProperty(propertyName, value);
      },
      removeThumbStyleProperty: (propertyName, thumb: Thumb) => {
        this.getThumbEl(thumb).style.removeProperty(propertyName);
      },
      setTrackActiveStyleProperty: (propertyName, value) => {
        this.trackActive.style.setProperty(propertyName, value);
      },
      removeTrackActiveStyleProperty: (propertyName) => {
        this.trackActive.style.removeProperty(propertyName);
      },
      setValueIndicatorText: (value: number, thumb: Thumb) => {
        const valueIndicatorEl = this.getThumbEl(
          thumb,
        ).querySelector<HTMLElement>(`.${cssClasses.VALUE_INDICATOR_TEXT}`);
        valueIndicatorEl!.textContent = String(value);
      },
      getValueToAriaValueTextFn: () => this.valueToAriaValueTextFn,
      updateTickMarks: (tickMarks: TickMark[]) => {
        let tickMarksContainer = this.root.querySelector<HTMLElement>(
          `.${cssClasses.TICK_MARKS_CONTAINER}`,
        );
        if (!tickMarksContainer) {
          tickMarksContainer = document.createElement('div');
          tickMarksContainer.classList.add(cssClasses.TICK_MARKS_CONTAINER);
          const track = this.root.querySelector<HTMLElement>(
            `.${cssClasses.TRACK}`,
          );
          track!.appendChild(tickMarksContainer);
        }

        if (tickMarks.length !== tickMarksContainer.children.length) {
          while (tickMarksContainer.firstChild) {
            tickMarksContainer.removeChild(tickMarksContainer.firstChild);
          }
          this.addTickMarks(tickMarksContainer, tickMarks);
        } else {
          this.updateTickMarks(tickMarksContainer, tickMarks);
        }
      },
      setPointerCapture: (pointerId) => {
        this.root.setPointerCapture(pointerId);
      },
      emitChangeEvent: (value, thumb: Thumb) => {
        this.emit<MDCSliderChangeEventDetail>(events.CHANGE, { value, thumb });
      },
      emitInputEvent: (value, thumb: Thumb) => {
        this.emit<MDCSliderChangeEventDetail>(events.INPUT, { value, thumb });
      },
      // tslint:disable-next-line:enforce-name-casing
      emitDragStartEvent: (_, thumb: Thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448

        this.getRipple(thumb).activate();
      },
      // tslint:disable-next-line:enforce-name-casing
      emitDragEndEvent: (_, thumb: Thumb) => {
        // Emitting event is not yet implemented. See issue:
        // https://github.com/material-components/material-components-web/issues/6448

        this.getRipple(thumb).deactivate();
      },
      registerEventHandler: (eventType, handler) => {
        this.listen(eventType, handler);
      },
      deregisterEventHandler: (eventType, handler) => {
        this.unlisten(eventType, handler);
      },
      registerThumbEventHandler: (thumb, eventType, handler) => {
        this.getThumbEl(thumb).addEventListener(eventType, handler);
      },
      deregisterThumbEventHandler: (thumb, eventType, handler) => {
        this.getThumbEl(thumb).removeEventListener(eventType, handler);
      },
      registerInputEventHandler: (thumb, eventType, handler) => {
        this.getInput(thumb).addEventListener(eventType, handler);
      },
      deregisterInputEventHandler: (thumb, eventType, handler) => {
        this.getInput(thumb).removeEventListener(eventType, handler);
      },
      registerBodyEventHandler: (eventType, handler) => {
        document.body.addEventListener(eventType, handler);
      },
      deregisterBodyEventHandler: (eventType, handler) => {
        document.body.removeEventListener(eventType, handler);
      },
      registerWindowEventHandler: (eventType, handler) => {
        window.addEventListener(eventType, handler);
      },
      deregisterWindowEventHandler: (eventType, handler) => {
        window.removeEventListener(eventType, handler);
      },
      // tslint:enable:object-literal-sort-keys
    };
    return new MDCSliderFoundation(adapter);
  }

  /**
   * Initializes component, with the following options:
   * - `skipInitialUIUpdate`: Whether to skip updating the UI when initially
   *   syncing with the DOM. This should be enabled when the slider position
   *   is set before component initialization.
   */
  override initialize({
    skipInitialUIUpdate,
  }: { skipInitialUIUpdate?: boolean } = {}) {
    this.inputs = Array.from(
      this.root.querySelectorAll<HTMLInputElement>(`.${cssClasses.INPUT}`),
    );
    this.thumbs = Array.from(
      this.root.querySelectorAll<HTMLElement>(`.${cssClasses.THUMB}`),
    );
    this.trackActive = this.root.querySelector<HTMLElement>(
      `.${cssClasses.TRACK_ACTIVE}`,
    )!;
    this.ripples = this.createRipples();

    if (skipInitialUIUpdate) {
      this.skipInitialUIUpdate = true;
    }
  }

  override initialSyncWithDOM() {
    this.foundation.layout({ skipUpdateUI: this.skipInitialUIUpdate });
  }

  /** Redraws UI based on DOM (e.g. element dimensions, RTL). */
  layout() {
    this.foundation.layout();
  }

  getValueStart(): number {
    return this.foundation.getValueStart();
  }

  setValueStart(valueStart: number) {
    this.foundation.setValueStart(valueStart);
  }

  getValue(): number {
    return this.foundation.getValue();
  }

  setValue(value: number) {
    this.foundation.setValue(value);
  }

  /** @return Slider disabled state. */
  getDisabled(): boolean {
    return this.foundation.getDisabled();
  }

  /** Sets slider disabled state. */
  setDisabled(disabled: boolean) {
    this.foundation.setDisabled(disabled);
  }

  /**
   * Sets a function that maps the slider value to the value of the
   * `aria-valuetext` attribute on the thumb element.
   */
  setValueToAriaValueTextFn(mapFn: ((value: number) => string) | null) {
    this.valueToAriaValueTextFn = mapFn;
  }

  private getThumbEl(thumb: Thumb) {
    return thumb === Thumb.END
      ? this.thumbs[this.thumbs.length - 1]
      : this.thumbs[0];
  }

  private getInput(thumb: Thumb) {
    return thumb === Thumb.END
      ? this.inputs[this.inputs.length - 1]
      : this.inputs[0];
  }

  private getRipple(thumb: Thumb) {
    return thumb === Thumb.END
      ? this.ripples[this.ripples.length - 1]
      : this.ripples[0];
  }

  /** Adds tick mark elements to the given container. */
  private addTickMarks(tickMarkContainer: HTMLElement, tickMarks: TickMark[]) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < tickMarks.length; i++) {
      const div = document.createElement('div');
      const tickMarkClass =
        tickMarks[i] === TickMark.ACTIVE
          ? cssClasses.TICK_MARK_ACTIVE
          : cssClasses.TICK_MARK_INACTIVE;
      div.classList.add(tickMarkClass);
      fragment.appendChild(div);
    }
    tickMarkContainer.appendChild(fragment);
  }

  /** Updates tick mark elements' classes in the given container. */
  private updateTickMarks(
    tickMarkContainer: HTMLElement,
    tickMarks: TickMark[],
  ) {
    const tickMarkEls = Array.from(tickMarkContainer.children);
    for (let i = 0; i < tickMarkEls.length; i++) {
      if (tickMarks[i] === TickMark.ACTIVE) {
        tickMarkEls[i].classList.add(cssClasses.TICK_MARK_ACTIVE);
        tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_INACTIVE);
      } else {
        tickMarkEls[i].classList.add(cssClasses.TICK_MARK_INACTIVE);
        tickMarkEls[i].classList.remove(cssClasses.TICK_MARK_ACTIVE);
      }
    }
  }

  /** Initializes thumb ripples. */
  private createRipples(): MDCRipple[] {
    const ripples = [];
    const rippleSurfaces = Array.from(
      this.root.querySelectorAll<HTMLElement>(`.${cssClasses.THUMB}`),
    );
    for (let i = 0; i < rippleSurfaces.length; i++) {
      const rippleSurface = rippleSurfaces[i];
      // Use the corresponding input as the focus source for the ripple (i.e.
      // when the input is focused, the ripple is in the focused state).
      const input = this.inputs[i];

      const adapter: MDCRippleAdapter = {
        ...MDCRipple.createAdapter(this),
        addClass: (className: string) => {
          rippleSurface.classList.add(className);
        },
        computeBoundingRect: () => rippleSurface.getBoundingClientRect(),
        deregisterInteractionHandler: <K extends EventType>(
          eventType: K,
          handler: SpecificEventListener<K>,
        ) => {
          input.removeEventListener(eventType, handler);
        },
        isSurfaceActive: () => matches(input, ':active'),
        isUnbounded: () => true,
        registerInteractionHandler: <K extends EventType>(
          eventType: K,
          handler: SpecificEventListener<K>,
        ) => {
          input.addEventListener(eventType, handler, applyPassive());
        },
        removeClass: (className: string) => {
          rippleSurface.classList.remove(className);
        },
        updateCssVariable: (varName: string, value: string) => {
          rippleSurface.style.setProperty(varName, value);
        },
      };

      const ripple = new MDCRipple(
        rippleSurface,
        new MDCRippleFoundation(adapter),
      );
      ripple.unbounded = true;
      ripples.push(ripple);
    }

    return ripples;
  }
}

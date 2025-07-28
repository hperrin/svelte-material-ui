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

import { safeAttrPrefix } from 'safevalues';
import { setElementPrefixedAttribute } from 'safevalues/dom';

import { MDCFoundation } from './foundation';
import type {
  CustomEventListener,
  EventType,
  SpecificEventListener,
} from './types';

function toCamelCase(str: string) {
  // tslint:disable-next-line:enforce-name-casing
  return String(str).replace(/\-([a-z])/g, (_, match) => match.toUpperCase());
}

/** MDC Component base */
export class MDCComponent<FoundationType extends MDCFoundation> {
  static attachTo(root: HTMLElement): MDCComponent<MDCFoundation<{}>> {
    // Subclasses which extend MDCBase should provide an attachTo() method that
    // takes a root element and returns an instantiated component with its root
    // set to that element. Also note that in the cases of subclasses, an
    // explicit foundation class will not have to be passed in; it will simply
    // be initialized from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation({}));
  }

  protected foundation: FoundationType;

  constructor(
    public root: HTMLElement,
    foundation?: FoundationType,
    ...args: unknown[]
  ) {
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's
    // default param so that this.root is defined and can be used within the
    // foundation class.
    this.foundation =
      foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation.init();
    this.initialSyncWithDOM();
  }

  /* istanbul ignore next: method param only exists for typing purposes; it does
   * not need to be unit tested */
  // tslint:disable-next-line:enforce-name-casing
  initialize(..._args: unknown[]) {
    // Subclasses can override this to do any additional setup work that would
    // be considered part of a "constructor". Essentially, it is a hook into the
    // parent constructor before the foundation is initialized. Any additional
    // arguments besides root and foundation will be passed in here.
  }

  getDefaultFoundation(): FoundationType {
    // Subclasses must override this method to return a properly configured
    // foundation class for the component.
    throw new Error(
      'Subclasses must override getDefaultFoundation to return a properly configured ' +
        'foundation class',
    );
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to
    // synchronize with a host DOM object. An example of this would be a form
    // control wrapper that needs to synchronize its internal state to some
    // property or attribute of the host DOM. Please note: this is *not* the
    // place to perform DOM reads/writes that would cause layout / paint, as
    // this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources /
    // deregister any listeners they have attached. An example of this might be
    // deregistering a resize event from the window object.
    this.foundation.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element.
   * This is most useful when listening for custom events.
   */
  listen<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
    options?: AddEventListenerOptions | boolean,
  ): void;
  listen<E extends Event>(
    eventType: string,
    handler: CustomEventListener<E>,
    options?: AddEventListenerOptions | boolean,
  ): void;
  listen(
    eventType: string,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean,
  ) {
    this.root.addEventListener(eventType, handler, options);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element.
   * This is most useful when unlistening for custom events.
   */
  unlisten<K extends EventType>(
    eventType: K,
    handler: SpecificEventListener<K>,
    options?: AddEventListenerOptions | boolean,
  ): void;
  unlisten<E extends Event>(
    eventType: string,
    handler: CustomEventListener<E>,
    options?: AddEventListenerOptions | boolean,
  ): void;
  unlisten(
    eventType: string,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean,
  ) {
    this.root.removeEventListener(eventType, handler, options);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of
   * the given type, with the given data.
   */
  emit<T extends object>(
    eventType: string,
    eventData: T,
    shouldBubble = false,
  ) {
    let event: CustomEvent<T>;
    if (typeof CustomEvent === 'function') {
      event = new CustomEvent<T>(eventType, {
        bubbles: shouldBubble,
        detail: eventData,
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventType, shouldBubble, false, eventData);
    }

    this.root.dispatchEvent(event);
  }

  /**
   * This is a intermediate fix to allow components to use safevalues. This
   * limits setAttribute to setting tabindex, data attributes, and aria
   * attributes.
   *
   * TODO(b/263990206): remove this method and add these directly in each
   * component. This will remove this abstraction and make it clear that the
   * caller can't set any attribute.
   */
  protected safeSetAttribute(
    element: HTMLElement,
    attribute: string,
    value: string,
  ) {
    if (attribute.toLowerCase() === 'tabindex') {
      element.tabIndex = Number(value);
    } else if (attribute.indexOf('data-') === 0) {
      const dataKey = toCamelCase(attribute.replace(/^data-/, ''));
      element.dataset[dataKey] = value;
    } else {
      setElementPrefixedAttribute(
        [safeAttrPrefix`aria-`, safeAttrPrefix`role`],
        element,
        attribute,
        value,
      );
    }
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCComponent;

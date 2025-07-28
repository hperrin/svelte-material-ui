/**
 * @license
 * Copyright 2019 Google Inc.
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

export interface MDCDialogCloseEventDetail {
  action?: string;
}

// Note: CustomEvent<T> is not supported by Closure Compiler.

export interface MDCDialogCloseEvent extends Event {
  readonly detail: MDCDialogCloseEventDetail;
}

/**
 * Options for how to configure the dialog.
 */
export interface DialogConfigOptions {
  // Boolean indicating whether or not the dialog being opened is a confirmation
  // dialog opened on top of a full-screen dialog (the only time multiple
  // dialogs should be open on top of one another).
  isAboveFullscreenDialog?: boolean;
  // Boolean indicating whether or not the dialog blocks background document
  // scrolling.
  isScrimless?: boolean;
}

import type { MDCTabDimensions } from '@material/tab';

export interface SMUITabAccessor {
  tabId: any;
  readonly element: HTMLElement;
  readonly active: boolean;
  forceAccessible(accessible: boolean): void;
  computeIndicatorClientRect(): DOMRect;
  computeDimensions(): MDCTabDimensions;
  focus(): void;
  activate(
    previousIndicatorClientRect: DOMRect | undefined,
    skipFocus: boolean
  ): void;
  deactivate(): void;
}

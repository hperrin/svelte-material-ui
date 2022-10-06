export interface SMUIFloatingLabelAccessor {
  readonly element: HTMLSpanElement | HTMLLabelElement;
  addStyle(name: string, value: string): void;
  removeStyle(name: string): void;
}

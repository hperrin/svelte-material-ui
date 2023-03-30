export interface SMUIListItemAccessor {
  _smui_list_item_accessor: true;
  readonly element: Element;
  selected: boolean;
  hasClass(className: string): boolean;
  addClass(className: string): void;
  removeClass(className: string): void;
  getAttr(name: string): string | null;
  addAttr(name: string, value: string): void;
  removeAttr(name: string): void;
  getPrimaryText(): string;

  // For inputs within item.
  checked: boolean;
  readonly hasCheckbox: boolean;
  readonly hasRadio: boolean;
  activateRipple(): void;
  deactivateRipple(): void;

  // For select options.
  getValue(): any;

  // For autocomplete.
  action(e: Event): void;
  tabindex: number;
  readonly disabled: boolean;
  activated: boolean;
}

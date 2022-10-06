export interface SMUIChipsChipAccessor {
  chipId: any;
  readonly selected: boolean;
  focusPrimaryAction(): void;
  focusTrailingAction(): void;
  removeFocus(): void;
  setSelectedFromChipSet(value: boolean, shouldNotifyClients: boolean): void;
}

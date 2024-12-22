/// <reference types="svelte" />

declare namespace svelteHTML {
  type EventHandler<E, T> = import('svelte/elements').EventHandler<E, T>;

  interface HTMLAttributes<T extends EventTarget = any> {
    // UPDATE THE TYPES FILE WHEN YOU UPDATE THIS!
    onselected?: EventHandler<CustomEvent, T> | null;
    onselectedcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIAction?: EventHandler<CustomEvent, T> | null;
    onSMUIActioncapture?: EventHandler<CustomEvent, T> | null;

    onSMUIAccordionHeaderActivate?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionHeaderActivatecapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelClosed?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelClosing?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelClosingcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelActivate?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelActivatecapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelOpened?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelOpening?: EventHandler<CustomEvent, T> | null;
    onSMUIAccordionPanelOpeningcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIAutocompleteDeselected?: EventHandler<CustomEvent, T> | null;
    onSMUIAutocompleteDeselectedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIAutocompleteNoMatchesAction?: EventHandler<CustomEvent, T> | null;
    onSMUIAutocompleteNoMatchesActioncapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIAutocompleteSelected?: EventHandler<CustomEvent, T> | null;
    onSMUIAutocompleteSelectedcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIBannerActionClicked?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerActionClickedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerButtonPrimaryActionClick?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerButtonPrimaryActionClickcapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIBannerButtonSecondaryActionClick?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIBannerButtonSecondaryActionClickcapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIBannerClosed?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerClosing?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerClosingcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerOpened?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerOpening?: EventHandler<CustomEvent, T> | null;
    onSMUIBannerOpeningcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIChipInputSelect?: EventHandler<CustomEvent, T> | null;
    onSMUIChipInputEntry?: EventHandler<CustomEvent, T> | null;
    onSMUIChipInputRemove?: EventHandler<CustomEvent, T> | null;

    onSMUIChipInteraction?: EventHandler<CustomEvent, T> | null;
    onSMUIChipInteractioncapture?: EventHandler<CustomEvent, T> | null;
    onSMUIChipNavigation?: EventHandler<CustomEvent, T> | null;
    onSMUIChipNavigationcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIChipRemoval?: EventHandler<CustomEvent, T> | null;
    onSMUIChipRemovalcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIChipSelection?: EventHandler<CustomEvent, T> | null;
    onSMUIChipSelectioncapture?: EventHandler<CustomEvent, T> | null;
    onSMUIChipTrailingIconInteraction?: EventHandler<CustomEvent, T> | null;
    onSMUIChipTrailingIconInteractioncapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIChipTrailingActionInteraction?: EventHandler<CustomEvent, T> | null;
    onSMUIChipTrailingActionInteractioncapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIChipTrailingActionNavigation?: EventHandler<CustomEvent, T> | null;
    onSMUIChipTrailingActionNavigationcapture?: EventHandler<
      CustomEvent,
      T
    > | null;

    onSMUIDataTableBodyCheckboxChange?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableBodyCheckboxChangecapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIDataTableClickRow?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableClickRowcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableHeaderCheckboxChange?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableHeaderCheckboxChangecapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIDataTableHeaderClick?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableHeaderClickcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableRowClick?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableRowClickcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableSelectedAll?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableSelectedAllcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableSelectionChanged?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableSelectionChangedcapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIDataTableSorted?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableSortedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableUnselectedAll?: EventHandler<CustomEvent, T> | null;
    onSMUIDataTableUnselectedAllcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIDialogClosed?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogClosing?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogClosingcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogOpened?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogOpening?: EventHandler<CustomEvent, T> | null;
    onSMUIDialogOpeningcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIDrawerClosed?: EventHandler<CustomEvent, T> | null;
    onSMUIDrawerClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDrawerOpened?: EventHandler<CustomEvent, T> | null;
    onSMUIDrawerOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIDrawerScrimClick?: EventHandler<CustomEvent, T> | null;
    onSMUIDrawerScrimClickcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIIconButtonToggleChange?: EventHandler<CustomEvent, T> | null;

    onSMUIListAction?: EventHandler<CustomEvent, T> | null;
    onSMUIListActioncapture?: EventHandler<CustomEvent, T> | null;
    onSMUIListSelectionChange?: EventHandler<CustomEvent, T> | null;
    onSMUIListSelectionChangecapture?: EventHandler<CustomEvent, T> | null;

    onSMUIMenuClosedProgrammatically?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuClosedProgrammaticallycapture?: EventHandler<
      CustomEvent,
      T
    > | null;
    onSMUIMenuSelected?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSelectedcapture?: EventHandler<CustomEvent, T> | null;

    onSMUIMenuSurfaceClosed?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceClosing?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceClosingcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceOpened?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceOpening?: EventHandler<CustomEvent, T> | null;
    onSMUIMenuSurfaceOpeningcapture?: EventHandler<CustomEvent, T> | null;

    onSMUISelectChange?: EventHandler<CustomEvent, T> | null;
    onSMUISelectChangecapture?: EventHandler<CustomEvent, T> | null;
    onSMUISelectHelperTextId?: EventHandler<CustomEvent, T> | null;
    onSMUISelectHelperTextIdcapture?: EventHandler<CustomEvent, T> | null;
    onSMUISelectIcon?: EventHandler<CustomEvent, T> | null;
    onSMUISelectIconcapture?: EventHandler<CustomEvent, T> | null;

    onSMUISliderChange?: EventHandler<CustomEvent, T> | null;
    onSMUISliderChangecapture?: EventHandler<CustomEvent, T> | null;
    onSMUISliderInput?: EventHandler<CustomEvent, T> | null;
    onSMUISliderInputcapture?: EventHandler<CustomEvent, T> | null;

    onSMUISnackbarClosed?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarClosedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarClosing?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarClosingcapture?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarOpened?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarOpenedcapture?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarOpening?: EventHandler<CustomEvent, T> | null;
    onSMUISnackbarOpeningcapture?: EventHandler<CustomEvent, T> | null;

    onSMUISwitchChange?: EventHandler<CustomEvent, T> | null;
    onSMUISwitchChangecapture?: EventHandler<CustomEvent, T> | null;

    onSMUITabInteracted?: EventHandler<CustomEvent, T> | null;
    onSMUITabInteractedcapture?: EventHandler<CustomEvent, T> | null;

    onSMUITabBarActivated?: EventHandler<CustomEvent, T> | null;
    onSMUITabBarActivatedcapture?: EventHandler<CustomEvent, T> | null;

    onSMUITextfieldHelperTextId?: EventHandler<CustomEvent, T> | null;
    onSMUITextfieldHelperTextIdcapture?: EventHandler<CustomEvent, T> | null;
    onSMUITextfieldIcon?: EventHandler<CustomEvent, T> | null;
    onSMUITextfieldIconcapture?: EventHandler<CustomEvent, T> | null;

    onSMUITooltipHidden?: EventHandler<CustomEvent, T> | null;
    onSMUITooltipHiddencapture?: EventHandler<CustomEvent, T> | null;

    onSMUITopAppBarIconButtonNav?: EventHandler<CustomEvent, T> | null;
    onSMUITopAppBarIconButtonNavcapture?: EventHandler<CustomEvent, T> | null;
    onSMUITopAppBarNav?: EventHandler<CustomEvent, T> | null;
    onSMUITopAppBarNavcapture?: EventHandler<CustomEvent, T> | null;
  }
}

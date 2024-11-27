import type { SvelteComponent, Component } from 'svelte';
import type {
  HTMLAttributes,
  HTMLAnchorAttributes,
  HTMLAudioAttributes,
  HTMLAreaAttributes,
  HTMLBaseAttributes,
  HTMLBlockquoteAttributes,
  HTMLButtonAttributes,
  HTMLCanvasAttributes,
  HTMLColAttributes,
  HTMLColgroupAttributes,
  HTMLDataAttributes,
  HTMLDetailsAttributes,
  HTMLDelAttributes,
  HTMLDialogAttributes,
  // HTMLEmbedAttributes,
  HTMLFieldsetAttributes,
  HTMLFormAttributes,
  // HTMLHtmlAttributes,
  // HTMLIframeAttributes,
  HTMLImgAttributes,
  HTMLInsAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLLiAttributes,
  // HTMLLinkAttributes,
  HTMLMapAttributes,
  // HTMLMenuAttributes,
  // HTMLMetaAttributes,
  HTMLMeterAttributes,
  HTMLQuoteAttributes,
  // HTMLObjectAttributes,
  HTMLOlAttributes,
  HTMLOptgroupAttributes,
  HTMLOptionAttributes,
  HTMLOutputAttributes,
  HTMLProgressAttributes,
  // HTMLSlotAttributes,
  // HTMLScriptAttributes,
  HTMLSelectAttributes,
  HTMLSourceAttributes,
  HTMLStyleAttributes,
  HTMLTableAttributes,
  HTMLTextareaAttributes,
  HTMLTdAttributes,
  HTMLThAttributes,
  HTMLTimeAttributes,
  HTMLTrackAttributes,
  HTMLVideoAttributes,
  SVGAttributes,
  EventHandler,
} from 'svelte/elements';

export type SmuiComponent<
  Element extends
    SmuiElementMap[SmuiEveryElement] = SmuiElementMap[SmuiEveryElement],
  Props extends Record<string, any> = {},
  Exports extends Record<string, any> = {},
  Bindings extends keyof Props | '' = string,
> = Component<Props, Exports & { getElement(): Element }, Bindings>;

export type ComponentBindings<
  Comp extends SvelteComponent | Component<any, any>,
> =
  Comp extends SvelteComponent<infer Props>
    ? keyof Props
    : Comp extends Component<any, any, infer Bindings>
      ? Bindings
      : never;

export type SmuiEveryElement = keyof SmuiElementMap;
export type SmuiHTMLElement = keyof Omit<SmuiElementMap, 'svg'>;

export type SmuiAttrs<
  T extends SmuiEveryElement,
  E extends string,
> = SmuiElementPropMap<E>[T] & SmuiEventProps<SmuiElementMap[T]> & DataAttrs;

export type DataAttrs = {
  [k: `data-${string}`]: any;
};

// SMUI Events.

export interface SmuiEventProps<T extends EventTarget> {
  // UPDATE THE AMBIENT FILE WHEN YOU UPDATE THIS!
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
  onSMUIBannerButtonSecondaryActionClick?: EventHandler<CustomEvent, T> | null;
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
  onSMUIDataTableSelectionChangedcapture?: EventHandler<CustomEvent, T> | null;
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
  onSMUIMenuClosedProgrammaticallycapture?: EventHandler<CustomEvent, T> | null;
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

// Layout listeners.

export type RemoveLayoutListener = () => void;
export type AddLayoutListener = (callback: () => void) => RemoveLayoutListener;

// Input accessors.

export interface SMUIInputAccessor {
  readonly element: Element;
  activateRipple(): void;
  deactivateRipple(): void;
}

export interface SMUICheckInputAccessor extends SMUIInputAccessor {
  checked: boolean;
}

export interface SMUICheckboxInputAccessor extends SMUICheckInputAccessor {
  _smui_checkbox_accessor: true;
  indeterminate: boolean;
}

export interface SMUIRadioInputAccessor extends SMUICheckInputAccessor {
  _smui_radio_accessor: true;
}

export interface SMUISliderInputAccessor extends SMUIInputAccessor {}

export interface SMUISwitchInputAccessor extends SMUICheckInputAccessor {}

export type SMUIGenericInputAccessor =
  | SMUICheckboxInputAccessor
  | SMUIRadioInputAccessor
  | SMUISliderInputAccessor
  | SMUISwitchInputAccessor;

export interface SmuiElementMap {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  aside: HTMLElement;
  audio: HTMLAudioElement;
  b: HTMLElement;
  base: HTMLBaseElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  // big: HTMLElement;
  blockquote: HTMLQuoteElement;
  // body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  canvas: HTMLCanvasElement;
  caption: HTMLElement;
  cite: HTMLElement;
  code: HTMLElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  data: HTMLDataElement;
  datalist: HTMLDataListElement;
  dd: HTMLElement;
  del: HTMLModElement;
  details: HTMLDetailsElement;
  dfn: HTMLElement;
  dialog: HTMLDialogElement;
  div: HTMLDivElement;
  dl: HTMLDListElement;
  dt: HTMLElement;
  em: HTMLElement;
  // embed: HTMLEmbedElement;
  fieldset: HTMLFieldSetElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  footer: HTMLElement;
  form: HTMLFormElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  head: HTMLElement;
  header: HTMLElement;
  hgroup: HTMLElement;
  hr: HTMLHRElement;
  // html: HTMLHtmlElement;
  i: HTMLElement;
  // iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  // keygen: HTMLKeygenElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  // link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  // menu: HTMLMenuElement;
  // menuitem: HTMLElement;
  // meta: HTMLMetaElement;
  meter: HTMLMeterElement;
  nav: HTMLElement;
  // noscript: HTMLElement;
  // object: HTMLObjectElement;
  ol: HTMLOListElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLOutputElement;
  p: HTMLParagraphElement;
  // param: HTMLParamElement;
  picture: HTMLElement;
  pre: HTMLPreElement;
  progress: HTMLProgressElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  // s: HTMLElement;
  samp: HTMLElement;
  // slot: HTMLSlotElement;
  // script: HTMLScriptElement;
  section: HTMLElement;
  select: HTMLSelectElement;
  small: HTMLElement;
  source: HTMLSourceElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  style: HTMLStyleElement;
  sub: HTMLElement;
  summary: HTMLElement;
  sup: HTMLElement;
  svg: SVGSVGElement;
  table: HTMLTableElement;
  // template: HTMLTemplateElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableCellElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLTimeElement;
  // title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  // u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
  // webview: HTMLWebViewElement;
}

type HTMLElementAttributes = HTMLAttributes<HTMLElement>;
type HTMLHeadingAttributes = HTMLAttributes<HTMLHeadingElement>;
// type HTMLBodyAttributes = HTMLAttributes<HTMLBodyElement>;
type HTMLBRAttributes = HTMLAttributes<HTMLBRElement>;
type HTMLDataListAttributes = HTMLAttributes<HTMLDataListElement>;
type HTMLDivAttributes = HTMLAttributes<HTMLDivElement>;
type HTMLDListAttributes = HTMLAttributes<HTMLDListElement>;
type HTMLHRAttributes = HTMLAttributes<HTMLHRElement>;
type HTMLLegendAttributes = HTMLAttributes<HTMLLegendElement>;
type HTMLParagraphAttributes = HTMLAttributes<HTMLParagraphElement>;
type HTMLPreAttributes = HTMLAttributes<HTMLPreElement>;
type HTMLSpanAttributes = HTMLAttributes<HTMLSpanElement>;
// type HTMLTemplateAttributes = HTMLAttributes<HTMLTemplateElement>;
type HTMLTableSectionAttributes = HTMLAttributes<HTMLTableSectionElement>;
// type HTMLTitleAttributes = HTMLAttributes<HTMLTitleElement>;
type HTMLTableRowAttributes = HTMLAttributes<HTMLTableRowElement>;
type HTMLUListAttributes = HTMLAttributes<HTMLUListElement>;

export interface SmuiElementPropMap<E extends string = ''> {
  a: Omit<HTMLAnchorAttributes, E>;
  abbr: Omit<HTMLElementAttributes, E>;
  address: Omit<HTMLElementAttributes, E>;
  area: Omit<HTMLAreaAttributes, E>;
  article: Omit<HTMLElementAttributes, E>;
  aside: Omit<HTMLElementAttributes, E>;
  audio: Omit<HTMLAudioAttributes, E>;
  b: Omit<HTMLElementAttributes, E>;
  base: Omit<HTMLBaseAttributes, E>;
  bdi: Omit<HTMLElementAttributes, E>;
  bdo: Omit<HTMLElementAttributes, E>;
  // big: Omit<HTMLElementAttributes, E>;
  blockquote: Omit<HTMLBlockquoteAttributes, E>;
  // body: Omit<HTMLBodyAttributes, E>;
  br: Omit<HTMLBRAttributes, E>;
  button: Omit<HTMLButtonAttributes, E>;
  canvas: Omit<HTMLCanvasAttributes, E>;
  caption: Omit<HTMLElementAttributes, E>;
  cite: Omit<HTMLElementAttributes, E>;
  code: Omit<HTMLElementAttributes, E>;
  col: Omit<HTMLColAttributes, E>;
  colgroup: Omit<HTMLColgroupAttributes, E>;
  data: Omit<HTMLDataAttributes, E>;
  datalist: Omit<HTMLDataListAttributes, E>;
  dd: Omit<HTMLElementAttributes, E>;
  del: Omit<HTMLDelAttributes, E>;
  details: Omit<HTMLDetailsAttributes, E>;
  dfn: Omit<HTMLElementAttributes, E>;
  dialog: Omit<HTMLDialogAttributes, E>;
  div: Omit<HTMLDivAttributes, E>;
  dl: Omit<HTMLDListAttributes, E>;
  dt: Omit<HTMLElementAttributes, E>;
  em: Omit<HTMLElementAttributes, E>;
  // embed: Omit<HTMLEmbedAttributes, E>;
  fieldset: Omit<HTMLFieldsetAttributes, E>;
  figcaption: Omit<HTMLElementAttributes, E>;
  figure: Omit<HTMLElementAttributes, E>;
  footer: Omit<HTMLElementAttributes, E>;
  form: Omit<HTMLFormAttributes, E>;
  h1: Omit<HTMLHeadingAttributes, E>;
  h2: Omit<HTMLHeadingAttributes, E>;
  h3: Omit<HTMLHeadingAttributes, E>;
  h4: Omit<HTMLHeadingAttributes, E>;
  h5: Omit<HTMLHeadingAttributes, E>;
  h6: Omit<HTMLHeadingAttributes, E>;
  head: Omit<HTMLElementAttributes, E>;
  header: Omit<HTMLElementAttributes, E>;
  hgroup: Omit<HTMLElementAttributes, E>;
  hr: Omit<HTMLHRAttributes, E>;
  // html: Omit<HTMLHtmlAttributes, E>;
  i: Omit<HTMLElementAttributes, E>;
  // iframe: Omit<HTMLIframeAttributes, E>;
  img: Omit<HTMLImgAttributes, E>;
  input: Omit<HTMLInputAttributes, E>;
  ins: Omit<HTMLInsAttributes, E>;
  kbd: Omit<HTMLElementAttributes, E>;
  // keygen: Omit<HTMLKeygenAttributes, E>;
  label: Omit<HTMLLabelAttributes, E>;
  legend: Omit<HTMLLegendAttributes, E>;
  li: Omit<HTMLLiAttributes, E>;
  // link: Omit<HTMLLinkAttributes, E>;
  main: Omit<HTMLElementAttributes, E>;
  map: Omit<HTMLMapAttributes, E>;
  mark: Omit<HTMLElementAttributes, E>;
  // menu: Omit<HTMLMenuAttributes, E>;
  // menuitem: Omit<HTMLElementAttributes, E>;
  // meta: Omit<HTMLMetaAttributes, E>;
  meter: Omit<HTMLMeterAttributes, E>;
  nav: Omit<HTMLElementAttributes, E>;
  // noscript: Omit<HTMLElementAttributes, E>;
  // object: Omit<HTMLObjectAttributes, E>;
  ol: Omit<HTMLOlAttributes, E>;
  optgroup: Omit<HTMLOptgroupAttributes, E>;
  option: Omit<HTMLOptionAttributes, E>;
  output: Omit<HTMLOutputAttributes, E>;
  p: Omit<HTMLParagraphAttributes, E>;
  // param: Omit<HTMLParamAttributes, E>;
  picture: Omit<HTMLElementAttributes, E>;
  pre: Omit<HTMLPreAttributes, E>;
  progress: Omit<HTMLProgressAttributes, E>;
  q: Omit<HTMLQuoteAttributes, E>;
  rp: Omit<HTMLElementAttributes, E>;
  rt: Omit<HTMLElementAttributes, E>;
  ruby: Omit<HTMLElementAttributes, E>;
  // s: Omit<HTMLElementAttributes, E>;
  samp: Omit<HTMLElementAttributes, E>;
  // slot: Omit<HTMLSlotAttributes, E>;
  // script: Omit<HTMLScriptAttributes, E>;
  section: Omit<HTMLElementAttributes, E>;
  select: Omit<HTMLSelectAttributes, E>;
  small: Omit<HTMLElementAttributes, E>;
  source: Omit<HTMLSourceAttributes, E>;
  span: Omit<HTMLSpanAttributes, E>;
  strong: Omit<HTMLElementAttributes, E>;
  style: Omit<HTMLStyleAttributes, E>;
  sub: Omit<HTMLElementAttributes, E>;
  summary: Omit<HTMLElementAttributes, E>;
  sup: Omit<HTMLElementAttributes, E>;
  svg: Omit<SVGAttributes<SVGSVGElement>, E>;
  table: Omit<HTMLTableAttributes, E>;
  // template: Omit<HTMLTemplateAttributes, E>;
  tbody: Omit<HTMLTableSectionAttributes, E>;
  td: Omit<HTMLTdAttributes, E>;
  textarea: Omit<HTMLTextareaAttributes, E>;
  tfoot: Omit<HTMLTableSectionAttributes, E>;
  th: Omit<HTMLThAttributes, E>;
  thead: Omit<HTMLTableSectionAttributes, E>;
  time: Omit<HTMLTimeAttributes, E>;
  // title: Omit<HTMLTitleAttributes, E>;
  tr: Omit<HTMLTableRowAttributes, E>;
  track: Omit<HTMLTrackAttributes, E>;
  // u: Omit<HTMLElementAttributes, E>;
  ul: Omit<HTMLUListAttributes, E>;
  var: Omit<HTMLElementAttributes, E>;
  video: Omit<HTMLVideoAttributes, E>;
  wbr: Omit<HTMLElementAttributes, E>;
  // webview: Omit<HTMLWebViewAttributes, E>;
}

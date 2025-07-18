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
  a: Omit<HTMLAnchorAttributes, E | symbol>;
  abbr: Omit<HTMLElementAttributes, E | symbol>;
  address: Omit<HTMLElementAttributes, E | symbol>;
  area: Omit<HTMLAreaAttributes, E | symbol>;
  article: Omit<HTMLElementAttributes, E | symbol>;
  aside: Omit<HTMLElementAttributes, E | symbol>;
  audio: Omit<HTMLAudioAttributes, E | symbol>;
  b: Omit<HTMLElementAttributes, E | symbol>;
  base: Omit<HTMLBaseAttributes, E | symbol>;
  bdi: Omit<HTMLElementAttributes, E | symbol>;
  bdo: Omit<HTMLElementAttributes, E | symbol>;
  // big: Omit<HTMLElementAttributes, E | symbol>;
  blockquote: Omit<HTMLBlockquoteAttributes, E | symbol>;
  // body: Omit<HTMLBodyAttributes, E | symbol>;
  br: Omit<HTMLBRAttributes, E | symbol>;
  button: Omit<HTMLButtonAttributes, E | symbol>;
  canvas: Omit<HTMLCanvasAttributes, E | symbol>;
  caption: Omit<HTMLElementAttributes, E | symbol>;
  cite: Omit<HTMLElementAttributes, E | symbol>;
  code: Omit<HTMLElementAttributes, E | symbol>;
  col: Omit<HTMLColAttributes, E | symbol>;
  colgroup: Omit<HTMLColgroupAttributes, E | symbol>;
  data: Omit<HTMLDataAttributes, E | symbol>;
  datalist: Omit<HTMLDataListAttributes, E | symbol>;
  dd: Omit<HTMLElementAttributes, E | symbol>;
  del: Omit<HTMLDelAttributes, E | symbol>;
  details: Omit<HTMLDetailsAttributes, E | symbol>;
  dfn: Omit<HTMLElementAttributes, E | symbol>;
  dialog: Omit<HTMLDialogAttributes, E | symbol>;
  div: Omit<HTMLDivAttributes, E | symbol>;
  dl: Omit<HTMLDListAttributes, E | symbol>;
  dt: Omit<HTMLElementAttributes, E | symbol>;
  em: Omit<HTMLElementAttributes, E | symbol>;
  // embed: Omit<HTMLEmbedAttributes, E | symbol>;
  fieldset: Omit<HTMLFieldsetAttributes, E | symbol>;
  figcaption: Omit<HTMLElementAttributes, E | symbol>;
  figure: Omit<HTMLElementAttributes, E | symbol>;
  footer: Omit<HTMLElementAttributes, E | symbol>;
  form: Omit<HTMLFormAttributes, E | symbol>;
  h1: Omit<HTMLHeadingAttributes, E | symbol>;
  h2: Omit<HTMLHeadingAttributes, E | symbol>;
  h3: Omit<HTMLHeadingAttributes, E | symbol>;
  h4: Omit<HTMLHeadingAttributes, E | symbol>;
  h5: Omit<HTMLHeadingAttributes, E | symbol>;
  h6: Omit<HTMLHeadingAttributes, E | symbol>;
  head: Omit<HTMLElementAttributes, E | symbol>;
  header: Omit<HTMLElementAttributes, E | symbol>;
  hgroup: Omit<HTMLElementAttributes, E | symbol>;
  hr: Omit<HTMLHRAttributes, E | symbol>;
  // html: Omit<HTMLHtmlAttributes, E | symbol>;
  i: Omit<HTMLElementAttributes, E | symbol>;
  // iframe: Omit<HTMLIframeAttributes, E | symbol>;
  img: Omit<HTMLImgAttributes, E | symbol>;
  input: Omit<HTMLInputAttributes, E | symbol>;
  ins: Omit<HTMLInsAttributes, E | symbol>;
  kbd: Omit<HTMLElementAttributes, E | symbol>;
  // keygen: Omit<HTMLKeygenAttributes, E | symbol>;
  label: Omit<HTMLLabelAttributes, E | symbol>;
  legend: Omit<HTMLLegendAttributes, E | symbol>;
  li: Omit<HTMLLiAttributes, E | symbol>;
  // link: Omit<HTMLLinkAttributes, E | symbol>;
  main: Omit<HTMLElementAttributes, E | symbol>;
  map: Omit<HTMLMapAttributes, E | symbol>;
  mark: Omit<HTMLElementAttributes, E | symbol>;
  // menu: Omit<HTMLMenuAttributes, E | symbol>;
  // menuitem: Omit<HTMLElementAttributes, E | symbol>;
  // meta: Omit<HTMLMetaAttributes, E | symbol>;
  meter: Omit<HTMLMeterAttributes, E | symbol>;
  nav: Omit<HTMLElementAttributes, E | symbol>;
  // noscript: Omit<HTMLElementAttributes, E | symbol>;
  // object: Omit<HTMLObjectAttributes, E | symbol>;
  ol: Omit<HTMLOlAttributes, E | symbol>;
  optgroup: Omit<HTMLOptgroupAttributes, E | symbol>;
  option: Omit<HTMLOptionAttributes, E | symbol>;
  output: Omit<HTMLOutputAttributes, E | symbol>;
  p: Omit<HTMLParagraphAttributes, E | symbol>;
  // param: Omit<HTMLParamAttributes, E | symbol>;
  picture: Omit<HTMLElementAttributes, E | symbol>;
  pre: Omit<HTMLPreAttributes, E | symbol>;
  progress: Omit<HTMLProgressAttributes, E | symbol>;
  q: Omit<HTMLQuoteAttributes, E | symbol>;
  rp: Omit<HTMLElementAttributes, E | symbol>;
  rt: Omit<HTMLElementAttributes, E | symbol>;
  ruby: Omit<HTMLElementAttributes, E | symbol>;
  // s: Omit<HTMLElementAttributes, E | symbol>;
  samp: Omit<HTMLElementAttributes, E | symbol>;
  // slot: Omit<HTMLSlotAttributes, E | symbol>;
  // script: Omit<HTMLScriptAttributes, E | symbol>;
  section: Omit<HTMLElementAttributes, E | symbol>;
  select: Omit<HTMLSelectAttributes, E | symbol>;
  small: Omit<HTMLElementAttributes, E | symbol>;
  source: Omit<HTMLSourceAttributes, E | symbol>;
  span: Omit<HTMLSpanAttributes, E | symbol>;
  strong: Omit<HTMLElementAttributes, E | symbol>;
  style: Omit<HTMLStyleAttributes, E | symbol>;
  sub: Omit<HTMLElementAttributes, E | symbol>;
  summary: Omit<HTMLElementAttributes, E | symbol>;
  sup: Omit<HTMLElementAttributes, E | symbol>;
  svg: Omit<SVGAttributes<SVGSVGElement>, E | symbol>;
  table: Omit<HTMLTableAttributes, E | symbol>;
  // template: Omit<HTMLTemplateAttributes, E | symbol>;
  tbody: Omit<HTMLTableSectionAttributes, E | symbol>;
  td: Omit<HTMLTdAttributes, E | symbol>;
  textarea: Omit<HTMLTextareaAttributes, E | symbol>;
  tfoot: Omit<HTMLTableSectionAttributes, E | symbol>;
  th: Omit<HTMLThAttributes, E | symbol>;
  thead: Omit<HTMLTableSectionAttributes, E | symbol>;
  time: Omit<HTMLTimeAttributes, E | symbol>;
  // title: Omit<HTMLTitleAttributes, E | symbol>;
  tr: Omit<HTMLTableRowAttributes, E | symbol>;
  track: Omit<HTMLTrackAttributes, E | symbol>;
  // u: Omit<HTMLElementAttributes, E | symbol>;
  ul: Omit<HTMLUListAttributes, E | symbol>;
  var: Omit<HTMLElementAttributes, E | symbol>;
  video: Omit<HTMLVideoAttributes, E | symbol>;
  wbr: Omit<HTMLElementAttributes, E | symbol>;
  // webview: Omit<HTMLWebViewAttributes, E | symbol>;
}

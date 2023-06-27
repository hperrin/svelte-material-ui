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
  HTMLEmbedAttributes,
  HTMLFieldsetAttributes,
  HTMLFormAttributes,
  HTMLHtmlAttributes,
  HTMLIframeAttributes,
  HTMLImgAttributes,
  HTMLInsAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLLiAttributes,
  HTMLLinkAttributes,
  HTMLMapAttributes,
  HTMLMenuAttributes,
  HTMLMetaAttributes,
  HTMLMeterAttributes,
  HTMLQuoteAttributes,
  HTMLObjectAttributes,
  HTMLOlAttributes,
  HTMLOptgroupAttributes,
  HTMLOptionAttributes,
  HTMLOutputAttributes,
  HTMLProgressAttributes,
  HTMLSlotAttributes,
  HTMLScriptAttributes,
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
} from 'svelte/elements';

export type SmuiAttrs<
  T extends keyof SmuiElementPropMap,
  OwnProps extends Object,
  RestOmmissions extends string
> = Omit<
  {
    [P in keyof SmuiElementPropMap[T]]?: SmuiElementPropMap[T][P];
  } & SvelteAttrs &
    DataAttrs,
  keyof OwnProps | RestOmmissions
>;

export type SmuiSvgAttrs<
  OwnProps extends Object,
  RestOmmissions extends string
> = Omit<
  {
    [P in keyof SVGAttributes<SVGSVGElement>]?: SVGAttributes<SVGSVGElement>[P];
  } & SvelteAttrs &
    DataAttrs,
  keyof OwnProps | RestOmmissions
>;

export type SvelteAttrs = {
  'sveltekit:noscroll'?: true | undefined | null;
  'sveltekit:prefetch'?: true | undefined | null;
  'sveltekit:reload'?: true | undefined | null;
};

export type DataAttrs = {
  [k: `data-${string}`]: any;
};

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
  big: HTMLElement;
  blockquote: HTMLQuoteElement;
  body: HTMLBodyElement;
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
  embed: HTMLEmbedElement;
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
  html: HTMLHtmlElement;
  i: HTMLElement;
  iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  // keygen: HTMLKeygenElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  menu: HTMLMenuElement;
  menuitem: HTMLElement;
  meta: HTMLMetaElement;
  meter: HTMLMeterElement;
  nav: HTMLElement;
  noscript: HTMLElement;
  object: HTMLObjectElement;
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
  s: HTMLElement;
  samp: HTMLElement;
  slot: HTMLSlotElement;
  script: HTMLScriptElement;
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
  table: HTMLTableElement;
  template: HTMLTemplateElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableCellElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLTimeElement;
  title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
  // webview: HTMLWebViewElement;
}

export interface SmuiElementPropMap {
  a: HTMLAnchorAttributes;
  abbr: HTMLAttributes<HTMLElement>;
  address: HTMLAttributes<HTMLElement>;
  area: HTMLAreaAttributes;
  article: HTMLAttributes<HTMLElement>;
  aside: HTMLAttributes<HTMLElement>;
  audio: HTMLAudioAttributes;
  b: HTMLAttributes<HTMLElement>;
  base: HTMLBaseAttributes;
  bdi: HTMLAttributes<HTMLElement>;
  bdo: HTMLAttributes<HTMLElement>;
  big: HTMLAttributes<HTMLElement>;
  blockquote: HTMLBlockquoteAttributes;
  body: HTMLAttributes<HTMLBodyElement>;
  br: HTMLAttributes<HTMLBRElement>;
  button: HTMLButtonAttributes;
  canvas: HTMLCanvasAttributes;
  caption: HTMLAttributes<HTMLElement>;
  cite: HTMLAttributes<HTMLElement>;
  code: HTMLAttributes<HTMLElement>;
  col: HTMLColAttributes;
  colgroup: HTMLColgroupAttributes;
  data: HTMLDataAttributes;
  datalist: HTMLAttributes<HTMLDataListElement>;
  dd: HTMLAttributes<HTMLElement>;
  del: HTMLDelAttributes;
  details: HTMLDetailsAttributes;
  dfn: HTMLAttributes<HTMLElement>;
  dialog: HTMLDialogAttributes;
  div: HTMLAttributes<HTMLDivElement>;
  dl: HTMLAttributes<HTMLDListElement>;
  dt: HTMLAttributes<HTMLElement>;
  em: HTMLAttributes<HTMLElement>;
  embed: HTMLEmbedAttributes;
  fieldset: HTMLFieldsetAttributes;
  figcaption: HTMLAttributes<HTMLElement>;
  figure: HTMLAttributes<HTMLElement>;
  footer: HTMLAttributes<HTMLElement>;
  form: HTMLFormAttributes;
  h1: HTMLAttributes<HTMLHeadingElement>;
  h2: HTMLAttributes<HTMLHeadingElement>;
  h3: HTMLAttributes<HTMLHeadingElement>;
  h4: HTMLAttributes<HTMLHeadingElement>;
  h5: HTMLAttributes<HTMLHeadingElement>;
  h6: HTMLAttributes<HTMLHeadingElement>;
  head: HTMLAttributes<HTMLElement>;
  header: HTMLAttributes<HTMLElement>;
  hgroup: HTMLAttributes<HTMLElement>;
  hr: HTMLAttributes<HTMLHRElement>;
  html: HTMLHtmlAttributes;
  i: HTMLAttributes<HTMLElement>;
  iframe: HTMLIframeAttributes;
  img: HTMLImgAttributes;
  input: HTMLInputAttributes;
  ins: HTMLInsAttributes;
  kbd: HTMLAttributes<HTMLElement>;
  // keygen: HTMLKeygenAttributes;
  label: HTMLLabelAttributes;
  legend: HTMLAttributes<HTMLLegendElement>;
  li: HTMLLiAttributes;
  link: HTMLLinkAttributes;
  main: HTMLAttributes<HTMLElement>;
  map: HTMLMapAttributes;
  mark: HTMLAttributes<HTMLElement>;
  menu: HTMLMenuAttributes;
  menuitem: HTMLAttributes<HTMLElement>;
  meta: HTMLMetaAttributes;
  meter: HTMLMeterAttributes;
  nav: HTMLAttributes<HTMLElement>;
  noscript: HTMLAttributes<HTMLElement>;
  object: HTMLObjectAttributes;
  ol: HTMLOlAttributes;
  optgroup: HTMLOptgroupAttributes;
  option: HTMLOptionAttributes;
  output: HTMLOutputAttributes;
  p: HTMLAttributes<HTMLParagraphElement>;
  // param: HTMLParamAttributes;
  picture: HTMLAttributes<HTMLElement>;
  pre: HTMLAttributes<HTMLPreElement>;
  progress: HTMLProgressAttributes;
  q: HTMLQuoteAttributes;
  rp: HTMLAttributes<HTMLElement>;
  rt: HTMLAttributes<HTMLElement>;
  ruby: HTMLAttributes<HTMLElement>;
  s: HTMLAttributes<HTMLElement>;
  samp: HTMLAttributes<HTMLElement>;
  slot: HTMLSlotAttributes;
  script: HTMLScriptAttributes;
  section: HTMLAttributes<HTMLElement>;
  select: HTMLSelectAttributes;
  small: HTMLAttributes<HTMLElement>;
  source: HTMLSourceAttributes;
  span: HTMLAttributes<HTMLSpanElement>;
  strong: HTMLAttributes<HTMLElement>;
  style: HTMLStyleAttributes;
  sub: HTMLAttributes<HTMLElement>;
  summary: HTMLAttributes<HTMLElement>;
  sup: HTMLAttributes<HTMLElement>;
  table: HTMLTableAttributes;
  template: HTMLAttributes<HTMLTemplateElement>;
  tbody: HTMLAttributes<HTMLTableSectionElement>;
  td: HTMLTdAttributes;
  textarea: HTMLTextareaAttributes;
  tfoot: HTMLAttributes<HTMLTableSectionElement>;
  th: HTMLThAttributes;
  thead: HTMLAttributes<HTMLTableSectionElement>;
  time: HTMLTimeAttributes;
  title: HTMLAttributes<HTMLTitleElement>;
  tr: HTMLAttributes<HTMLTableRowElement>;
  track: HTMLTrackAttributes;
  u: HTMLAttributes<HTMLElement>;
  ul: HTMLAttributes<HTMLUListElement>;
  var: HTMLAttributes<HTMLElement>;
  video: HTMLVideoAttributes;
  wbr: HTMLAttributes<HTMLElement>;
  // webview: HTMLWebViewAttributes;
}

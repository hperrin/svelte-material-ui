export type SmuiAttrs<
  T extends keyof SmuiElementPropMap,
  OwnProps extends Object
> = {
  [P in keyof Omit<
    SmuiElementPropMap[T],
    keyof OwnProps
  >]?: SmuiElementPropMap[T][P];
} & SvelteAttrs &
  DataAttrs;

export type SmuiSvgAttrs<OwnProps extends Object> = {
  [P in keyof Omit<
    svelte.JSX.SVGProps<SVGSVGElement>,
    keyof OwnProps
  >]?: svelte.JSX.SVGProps<SVGSVGElement>[P];
} & SvelteAttrs &
  DataAttrs;

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
  a: HTMLElementTagNameMap['a'];
  abbr: HTMLElementTagNameMap['abbr'];
  address: HTMLElementTagNameMap['address'];
  area: HTMLElementTagNameMap['area'];
  article: HTMLElementTagNameMap['article'];
  aside: HTMLElementTagNameMap['aside'];
  audio: HTMLElementTagNameMap['audio'];
  b: HTMLElementTagNameMap['b'];
  base: HTMLElementTagNameMap['base'];
  bdi: HTMLElementTagNameMap['bdi'];
  bdo: HTMLElementTagNameMap['bdo'];
  blockquote: HTMLElementTagNameMap['blockquote'];
  body: HTMLElementTagNameMap['body'];
  br: HTMLElementTagNameMap['br'];
  button: HTMLElementTagNameMap['button'];
  canvas: HTMLElementTagNameMap['canvas'];
  caption: HTMLElementTagNameMap['caption'];
  cite: HTMLElementTagNameMap['cite'];
  code: HTMLElementTagNameMap['code'];
  col: HTMLElementTagNameMap['col'];
  colgroup: HTMLElementTagNameMap['colgroup'];
  data: HTMLElementTagNameMap['data'];
  datalist: HTMLElementTagNameMap['datalist'];
  dd: HTMLElementTagNameMap['dd'];
  del: HTMLElementTagNameMap['del'];
  details: HTMLElementTagNameMap['details'];
  dfn: HTMLElementTagNameMap['dfn'];
  dialog: HTMLElementTagNameMap['dialog'];
  div: HTMLElementTagNameMap['div'];
  dl: HTMLElementTagNameMap['dl'];
  dt: HTMLElementTagNameMap['dt'];
  em: HTMLElementTagNameMap['em'];
  embed: HTMLElementTagNameMap['embed'];
  fieldset: HTMLElementTagNameMap['fieldset'];
  figcaption: HTMLElementTagNameMap['figcaption'];
  figure: HTMLElementTagNameMap['figure'];
  footer: HTMLElementTagNameMap['footer'];
  form: HTMLElementTagNameMap['form'];
  h1: HTMLElementTagNameMap['h1'];
  h2: HTMLElementTagNameMap['h2'];
  h3: HTMLElementTagNameMap['h3'];
  h4: HTMLElementTagNameMap['h4'];
  h5: HTMLElementTagNameMap['h5'];
  h6: HTMLElementTagNameMap['h6'];
  head: HTMLElementTagNameMap['head'];
  header: HTMLElementTagNameMap['header'];
  hgroup: HTMLElementTagNameMap['hgroup'];
  hr: HTMLElementTagNameMap['hr'];
  html: HTMLElementTagNameMap['html'];
  i: HTMLElementTagNameMap['i'];
  iframe: HTMLElementTagNameMap['iframe'];
  img: HTMLElementTagNameMap['img'];
  input: HTMLElementTagNameMap['input'];
  ins: HTMLElementTagNameMap['ins'];
  kbd: HTMLElementTagNameMap['kbd'];
  label: HTMLElementTagNameMap['label'];
  legend: HTMLElementTagNameMap['legend'];
  li: HTMLElementTagNameMap['li'];
  link: HTMLElementTagNameMap['link'];
  main: HTMLElementTagNameMap['main'];
  map: HTMLElementTagNameMap['map'];
  mark: HTMLElementTagNameMap['mark'];
  menu: HTMLElementTagNameMap['menu'];
  meta: HTMLElementTagNameMap['meta'];
  meter: HTMLElementTagNameMap['meter'];
  nav: HTMLElementTagNameMap['nav'];
  noscript: HTMLElementTagNameMap['noscript'];
  object: HTMLElementTagNameMap['object'];
  ol: HTMLElementTagNameMap['ol'];
  optgroup: HTMLElementTagNameMap['optgroup'];
  option: HTMLElementTagNameMap['option'];
  output: HTMLElementTagNameMap['output'];
  p: HTMLElementTagNameMap['p'];
  // param: HTMLElementTagNameMap['param'];
  picture: HTMLElementTagNameMap['picture'];
  pre: HTMLElementTagNameMap['pre'];
  progress: HTMLElementTagNameMap['progress'];
  q: HTMLElementTagNameMap['q'];
  rp: HTMLElementTagNameMap['rp'];
  rt: HTMLElementTagNameMap['rt'];
  ruby: HTMLElementTagNameMap['ruby'];
  s: HTMLElementTagNameMap['s'];
  samp: HTMLElementTagNameMap['samp'];
  script: HTMLElementTagNameMap['script'];
  section: HTMLElementTagNameMap['section'];
  select: HTMLElementTagNameMap['select'];
  small: HTMLElementTagNameMap['small'];
  source: HTMLElementTagNameMap['source'];
  span: HTMLElementTagNameMap['span'];
  strong: HTMLElementTagNameMap['strong'];
  style: HTMLElementTagNameMap['style'];
  sub: HTMLElementTagNameMap['sub'];
  summary: HTMLElementTagNameMap['summary'];
  sup: HTMLElementTagNameMap['sup'];
  table: HTMLElementTagNameMap['table'];
  tbody: HTMLElementTagNameMap['tbody'];
  td: HTMLElementTagNameMap['td'];
  textarea: HTMLElementTagNameMap['textarea'];
  tfoot: HTMLElementTagNameMap['tfoot'];
  th: HTMLElementTagNameMap['th'];
  thead: HTMLElementTagNameMap['thead'];
  time: HTMLElementTagNameMap['time'];
  title: HTMLElementTagNameMap['title'];
  tr: HTMLElementTagNameMap['tr'];
  track: HTMLElementTagNameMap['track'];
  u: HTMLElementTagNameMap['u'];
  ul: HTMLElementTagNameMap['ul'];
  var: HTMLElementTagNameMap['var'];
  video: HTMLElementTagNameMap['video'];
  wbr: HTMLElementTagNameMap['wbr'];

  // dir: HTMLElementTagNameMap['dir'];
  // font: HTMLElementTagNameMap['font'];
  // frame: HTMLElementTagNameMap['frame'];
  // frameset: HTMLElementTagNameMap['frameset'];
  // marquee: HTMLElementTagNameMap['marquee'];
  template: HTMLElementTagNameMap['template'];
}

export interface SmuiElementPropMap {
  a: svelte.JSX.HTMLProps<HTMLElementTagNameMap['a']>;
  abbr: svelte.JSX.HTMLProps<HTMLElementTagNameMap['abbr']>;
  address: svelte.JSX.HTMLProps<HTMLElementTagNameMap['address']>;
  area: svelte.JSX.HTMLProps<HTMLElementTagNameMap['area']>;
  article: svelte.JSX.HTMLProps<HTMLElementTagNameMap['article']>;
  aside: svelte.JSX.HTMLProps<HTMLElementTagNameMap['aside']>;
  audio: svelte.JSX.HTMLProps<HTMLElementTagNameMap['audio']>;
  b: svelte.JSX.HTMLProps<HTMLElementTagNameMap['b']>;
  base: svelte.JSX.HTMLProps<HTMLElementTagNameMap['base']>;
  bdi: svelte.JSX.HTMLProps<HTMLElementTagNameMap['bdi']>;
  bdo: svelte.JSX.HTMLProps<HTMLElementTagNameMap['bdo']>;
  blockquote: svelte.JSX.HTMLProps<HTMLElementTagNameMap['blockquote']>;
  body: svelte.JSX.HTMLProps<HTMLElementTagNameMap['body']>;
  br: svelte.JSX.HTMLProps<HTMLElementTagNameMap['br']>;
  button: svelte.JSX.HTMLProps<HTMLElementTagNameMap['button']>;
  canvas: svelte.JSX.HTMLProps<HTMLElementTagNameMap['canvas']>;
  caption: svelte.JSX.HTMLProps<HTMLElementTagNameMap['caption']>;
  cite: svelte.JSX.HTMLProps<HTMLElementTagNameMap['cite']>;
  code: svelte.JSX.HTMLProps<HTMLElementTagNameMap['code']>;
  col: svelte.JSX.HTMLProps<HTMLElementTagNameMap['col']>;
  colgroup: svelte.JSX.HTMLProps<HTMLElementTagNameMap['colgroup']>;
  data: svelte.JSX.HTMLProps<HTMLElementTagNameMap['data']>;
  datalist: svelte.JSX.HTMLProps<HTMLElementTagNameMap['datalist']>;
  dd: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dd']>;
  del: svelte.JSX.HTMLProps<HTMLElementTagNameMap['del']>;
  details: svelte.JSX.HTMLProps<HTMLElementTagNameMap['details']>;
  dfn: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dfn']>;
  dialog: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dialog']>;
  div: svelte.JSX.HTMLProps<HTMLElementTagNameMap['div']>;
  dl: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dl']>;
  dt: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dt']>;
  em: svelte.JSX.HTMLProps<HTMLElementTagNameMap['em']>;
  embed: svelte.JSX.HTMLProps<HTMLElementTagNameMap['embed']>;
  fieldset: svelte.JSX.HTMLProps<HTMLElementTagNameMap['fieldset']>;
  figcaption: svelte.JSX.HTMLProps<HTMLElementTagNameMap['figcaption']>;
  figure: svelte.JSX.HTMLProps<HTMLElementTagNameMap['figure']>;
  footer: svelte.JSX.HTMLProps<HTMLElementTagNameMap['footer']>;
  form: svelte.JSX.HTMLProps<HTMLElementTagNameMap['form']>;
  h1: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h1']>;
  h2: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h2']>;
  h3: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h3']>;
  h4: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h4']>;
  h5: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h5']>;
  h6: svelte.JSX.HTMLProps<HTMLElementTagNameMap['h6']>;
  head: svelte.JSX.HTMLProps<HTMLElementTagNameMap['head']>;
  header: svelte.JSX.HTMLProps<HTMLElementTagNameMap['header']>;
  hgroup: svelte.JSX.HTMLProps<HTMLElementTagNameMap['hgroup']>;
  hr: svelte.JSX.HTMLProps<HTMLElementTagNameMap['hr']>;
  html: svelte.JSX.HTMLProps<HTMLElementTagNameMap['html']>;
  i: svelte.JSX.HTMLProps<HTMLElementTagNameMap['i']>;
  iframe: svelte.JSX.HTMLProps<HTMLElementTagNameMap['iframe']>;
  img: svelte.JSX.HTMLProps<HTMLElementTagNameMap['img']>;
  input: svelte.JSX.HTMLProps<HTMLElementTagNameMap['input']>;
  ins: svelte.JSX.HTMLProps<HTMLElementTagNameMap['ins']>;
  kbd: svelte.JSX.HTMLProps<HTMLElementTagNameMap['kbd']>;
  label: svelte.JSX.HTMLProps<HTMLElementTagNameMap['label']>;
  legend: svelte.JSX.HTMLProps<HTMLElementTagNameMap['legend']>;
  li: svelte.JSX.HTMLProps<HTMLElementTagNameMap['li']>;
  link: svelte.JSX.HTMLProps<HTMLElementTagNameMap['link']>;
  main: svelte.JSX.HTMLProps<HTMLElementTagNameMap['main']>;
  map: svelte.JSX.HTMLProps<HTMLElementTagNameMap['map']>;
  mark: svelte.JSX.HTMLProps<HTMLElementTagNameMap['mark']>;
  menu: svelte.JSX.HTMLProps<HTMLElementTagNameMap['menu']>;
  meta: svelte.JSX.HTMLProps<HTMLElementTagNameMap['meta']>;
  meter: svelte.JSX.HTMLProps<HTMLElementTagNameMap['meter']>;
  nav: svelte.JSX.HTMLProps<HTMLElementTagNameMap['nav']>;
  noscript: svelte.JSX.HTMLProps<HTMLElementTagNameMap['noscript']>;
  object: svelte.JSX.HTMLProps<HTMLElementTagNameMap['object']>;
  ol: svelte.JSX.HTMLProps<HTMLElementTagNameMap['ol']>;
  optgroup: svelte.JSX.HTMLProps<HTMLElementTagNameMap['optgroup']>;
  option: svelte.JSX.HTMLProps<HTMLElementTagNameMap['option']>;
  output: svelte.JSX.HTMLProps<HTMLElementTagNameMap['output']>;
  p: svelte.JSX.HTMLProps<HTMLElementTagNameMap['p']>;
  // param: svelte.JSX.HTMLProps<HTMLElementTagNameMap['param']>;
  picture: svelte.JSX.HTMLProps<HTMLElementTagNameMap['picture']>;
  pre: svelte.JSX.HTMLProps<HTMLElementTagNameMap['pre']>;
  progress: svelte.JSX.HTMLProps<HTMLElementTagNameMap['progress']>;
  q: svelte.JSX.HTMLProps<HTMLElementTagNameMap['q']>;
  rp: svelte.JSX.HTMLProps<HTMLElementTagNameMap['rp']>;
  rt: svelte.JSX.HTMLProps<HTMLElementTagNameMap['rt']>;
  ruby: svelte.JSX.HTMLProps<HTMLElementTagNameMap['ruby']>;
  s: svelte.JSX.HTMLProps<HTMLElementTagNameMap['s']>;
  samp: svelte.JSX.HTMLProps<HTMLElementTagNameMap['samp']>;
  script: svelte.JSX.HTMLProps<HTMLElementTagNameMap['script']>;
  section: svelte.JSX.HTMLProps<HTMLElementTagNameMap['section']>;
  select: svelte.JSX.HTMLProps<HTMLElementTagNameMap['select']>;
  small: svelte.JSX.HTMLProps<HTMLElementTagNameMap['small']>;
  source: svelte.JSX.HTMLProps<HTMLElementTagNameMap['source']>;
  span: svelte.JSX.HTMLProps<HTMLElementTagNameMap['span']>;
  strong: svelte.JSX.HTMLProps<HTMLElementTagNameMap['strong']>;
  style: svelte.JSX.HTMLProps<HTMLElementTagNameMap['style']>;
  sub: svelte.JSX.HTMLProps<HTMLElementTagNameMap['sub']>;
  summary: svelte.JSX.HTMLProps<HTMLElementTagNameMap['summary']>;
  sup: svelte.JSX.HTMLProps<HTMLElementTagNameMap['sup']>;
  table: svelte.JSX.HTMLProps<HTMLElementTagNameMap['table']>;
  tbody: svelte.JSX.HTMLProps<HTMLElementTagNameMap['tbody']>;
  td: svelte.JSX.HTMLProps<HTMLElementTagNameMap['td']>;
  textarea: svelte.JSX.HTMLProps<HTMLElementTagNameMap['textarea']>;
  tfoot: svelte.JSX.HTMLProps<HTMLElementTagNameMap['tfoot']>;
  th: svelte.JSX.HTMLProps<HTMLElementTagNameMap['th']>;
  thead: svelte.JSX.HTMLProps<HTMLElementTagNameMap['thead']>;
  time: svelte.JSX.HTMLProps<HTMLElementTagNameMap['time']>;
  title: svelte.JSX.HTMLProps<HTMLElementTagNameMap['title']>;
  tr: svelte.JSX.HTMLProps<HTMLElementTagNameMap['tr']>;
  track: svelte.JSX.HTMLProps<HTMLElementTagNameMap['track']>;
  u: svelte.JSX.HTMLProps<HTMLElementTagNameMap['u']>;
  ul: svelte.JSX.HTMLProps<HTMLElementTagNameMap['ul']>;
  var: svelte.JSX.HTMLProps<HTMLElementTagNameMap['var']>;
  video: svelte.JSX.HTMLProps<HTMLElementTagNameMap['video']>;
  wbr: svelte.JSX.HTMLProps<HTMLElementTagNameMap['wbr']>;

  // dir: svelte.JSX.HTMLProps<HTMLElementTagNameMap['dir']>;
  // font: svelte.JSX.HTMLProps<HTMLElementTagNameMap['font']>;
  // frame: svelte.JSX.HTMLProps<HTMLElementTagNameMap['frame']>;
  // frameset: svelte.JSX.HTMLProps<HTMLElementTagNameMap['frameset']>;
  // marquee: svelte.JSX.HTMLProps<HTMLElementTagNameMap['marquee']>;
  template: svelte.JSX.HTMLProps<HTMLElementTagNameMap['template']>;
}

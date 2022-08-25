import type { ComponentProps } from 'svelte';
import type Component from './Element.svelte';
import type { SmuiComponent } from './smui.types.js';

export declare class ElementComponentDev<
    T extends
      | 'a' // HTMLAnchorElement
      | 'area' // HTMLAreaElement
      | 'audio' // HTMLAudioElement
      | 'br' // HTMLBRElement
      | 'base' // HTMLBaseElement
      | 'body' // HTMLBodyElement
      | 'button' // HTMLButtonElement
      | 'canvas' // HTMLCanvasElement
      | 'dl' // HTMLDListElement
      | 'data' // HTMLDataElement
      | 'datalist' // HTMLDataListElement
      | 'dialog' // HTMLDialogElement
      | 'div' // HTMLDivElement
      | 'embed' // HTMLEmbedElement
      | 'fieldset' // HTMLFieldSetElement
      | 'form' // HTMLFormElement
      | 'hr' // HTMLHRElement
      | 'head' // HTMLHeadElement
      | 'h1' // HTMLHeadingElement
      | 'h2' // HTMLHeadingElement
      | 'h3' // HTMLHeadingElement
      | 'h4' // HTMLHeadingElement
      | 'h5' // HTMLHeadingElement
      | 'h6' // HTMLHeadingElement
      | 'html' // HTMLHtmlElement
      | 'iframe' // HTMLIFrameElement
      | 'img' // HTMLImageElement
      | 'input' // HTMLInputElement
      | 'li' // HTMLLIElement
      | 'label' // HTMLLabelElement
      | 'legend' // HTMLLegendElement
      | 'link' // HTMLLinkElement
      | 'map' // HTMLMapElement
      | 'meta' // HTMLMetaElement
      | 'meter' // HTMLMeterElement
      | 'ins' // HTMLModElement
      | 'del' // HTMLModElement
      | 'ol' // HTMLOListElement
      | 'object' // HTMLObjectElement
      | 'optgroup' // HTMLOptGroupElement
      | 'option' // HTMLOptionElement
      | 'output' // HTMLOutputElement
      | 'p' // HTMLParagraphElement
      | 'picture' // HTMLPictureElement
      | 'pre' // HTMLPreElement
      | 'progress' // HTMLProgressElement
      | 'blockquote' // HTMLQuoteElement
      | 'q' // HTMLQuoteElement
      | 'script' // HTMLScriptElement
      | 'select' // HTMLSelectElement
      | 'source' // HTMLSourceElement
      | 'span' // HTMLSpanElement
      | 'style' // HTMLStyleElement
      | 'caption' // HTMLTableCaptionElement
      | 'th' // HTMLTableCellElement
      | 'td' // HTMLTableCellElement
      | 'col' // HTMLTableColElement
      | 'colgroup' // HTMLTableColElement
      | 'table' // HTMLTableElement
      | 'tr' // HTMLTableRowElement
      | 'tfoot' // HTMLTableSectionElement
      | 'thead' // HTMLTableSectionElement
      | 'tbody' // HTMLTableSectionElement
      | 'template' // HTMLTemplateElement
      | 'textarea' // HTMLTextAreaElement
      | 'time' // HTMLTimeElement
      | 'title' // HTMLTitleElement
      | 'track' // HTMLTrackElement
      | 'ul' // HTMLUListElement
      | 'video' // HTMLVideoElement
      | string = 'div'
  >
  extends Component
  implements SmuiComponent
{
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<
      svelte.JSX.HTMLAttributes<
        T extends 'a'
          ? HTMLAnchorElement
          : T extends 'area'
          ? HTMLAreaElement
          : T extends 'audio'
          ? HTMLAudioElement
          : T extends 'br'
          ? HTMLBRElement
          : T extends 'base'
          ? HTMLBaseElement
          : T extends 'body'
          ? HTMLBodyElement
          : T extends 'button'
          ? HTMLButtonElement
          : T extends 'canvas'
          ? HTMLCanvasElement
          : T extends 'dl'
          ? HTMLDListElement
          : T extends 'data'
          ? HTMLDataElement
          : T extends 'datalist'
          ? HTMLDataListElement
          : T extends 'dialog'
          ? HTMLDialogElement
          : T extends 'div'
          ? HTMLDivElement
          : T extends 'embed'
          ? HTMLEmbedElement
          : T extends 'fieldset'
          ? HTMLFieldSetElement
          : T extends 'form'
          ? HTMLFormElement
          : T extends 'hr'
          ? HTMLHRElement
          : T extends 'head'
          ? HTMLHeadElement
          : T extends 'h1'
          ? HTMLHeadingElement
          : T extends 'h2'
          ? HTMLHeadingElement
          : T extends 'h3'
          ? HTMLHeadingElement
          : T extends 'h4'
          ? HTMLHeadingElement
          : T extends 'h5'
          ? HTMLHeadingElement
          : T extends 'h6'
          ? HTMLHeadingElement
          : T extends 'html'
          ? HTMLHtmlElement
          : T extends 'iframe'
          ? HTMLIFrameElement
          : T extends 'img'
          ? HTMLImageElement
          : T extends 'input'
          ? HTMLInputElement
          : T extends 'li'
          ? HTMLLIElement
          : T extends 'label'
          ? HTMLLabelElement
          : T extends 'legend'
          ? HTMLLegendElement
          : T extends 'link'
          ? HTMLLinkElement
          : T extends 'map'
          ? HTMLMapElement
          : T extends 'meta'
          ? HTMLMetaElement
          : T extends 'meter'
          ? HTMLMeterElement
          : T extends 'ins'
          ? HTMLModElement
          : T extends 'del'
          ? HTMLModElement
          : T extends 'ol'
          ? HTMLOListElement
          : T extends 'object'
          ? HTMLObjectElement
          : T extends 'optgroup'
          ? HTMLOptGroupElement
          : T extends 'option'
          ? HTMLOptionElement
          : T extends 'output'
          ? HTMLOutputElement
          : T extends 'p'
          ? HTMLParagraphElement
          : T extends 'picture'
          ? HTMLPictureElement
          : T extends 'pre'
          ? HTMLPreElement
          : T extends 'progress'
          ? HTMLProgressElement
          : T extends 'blockquote'
          ? HTMLQuoteElement
          : T extends 'q'
          ? HTMLQuoteElement
          : T extends 'script'
          ? HTMLScriptElement
          : T extends 'select'
          ? HTMLSelectElement
          : T extends 'source'
          ? HTMLSourceElement
          : T extends 'span'
          ? HTMLSpanElement
          : T extends 'style'
          ? HTMLStyleElement
          : T extends 'caption'
          ? HTMLTableCaptionElement
          : T extends 'th'
          ? HTMLTableCellElement
          : T extends 'td'
          ? HTMLTableCellElement
          : T extends 'col'
          ? HTMLTableColElement
          : T extends 'colgroup'
          ? HTMLTableColElement
          : T extends 'table'
          ? HTMLTableElement
          : T extends 'tr'
          ? HTMLTableRowElement
          : T extends 'tfoot'
          ? HTMLTableSectionElement
          : T extends 'thead'
          ? HTMLTableSectionElement
          : T extends 'tbody'
          ? HTMLTableSectionElement
          : T extends 'template'
          ? HTMLTemplateElement
          : T extends 'textarea'
          ? HTMLTextAreaElement
          : T extends 'time'
          ? HTMLTimeElement
          : T extends 'title'
          ? HTMLTitleElement
          : T extends 'track'
          ? HTMLTrackElement
          : T extends 'ul'
          ? HTMLUListElement
          : T extends 'video'
          ? HTMLVideoElement
          : HTMLElement
      >
    >,
    'use' | 'tag'
  > &
    ComponentProps<Component> & {
      tag?: T;
    };

  get getElement(): () => T extends 'a'
    ? HTMLAnchorElement
    : T extends 'area'
    ? HTMLAreaElement
    : T extends 'audio'
    ? HTMLAudioElement
    : T extends 'br'
    ? HTMLBRElement
    : T extends 'base'
    ? HTMLBaseElement
    : T extends 'body'
    ? HTMLBodyElement
    : T extends 'button'
    ? HTMLButtonElement
    : T extends 'canvas'
    ? HTMLCanvasElement
    : T extends 'dl'
    ? HTMLDListElement
    : T extends 'data'
    ? HTMLDataElement
    : T extends 'datalist'
    ? HTMLDataListElement
    : T extends 'dialog'
    ? HTMLDialogElement
    : T extends 'div'
    ? HTMLDivElement
    : T extends 'embed'
    ? HTMLEmbedElement
    : T extends 'fieldset'
    ? HTMLFieldSetElement
    : T extends 'form'
    ? HTMLFormElement
    : T extends 'hr'
    ? HTMLHRElement
    : T extends 'head'
    ? HTMLHeadElement
    : T extends 'h1'
    ? HTMLHeadingElement
    : T extends 'h2'
    ? HTMLHeadingElement
    : T extends 'h3'
    ? HTMLHeadingElement
    : T extends 'h4'
    ? HTMLHeadingElement
    : T extends 'h5'
    ? HTMLHeadingElement
    : T extends 'h6'
    ? HTMLHeadingElement
    : T extends 'html'
    ? HTMLHtmlElement
    : T extends 'iframe'
    ? HTMLIFrameElement
    : T extends 'img'
    ? HTMLImageElement
    : T extends 'input'
    ? HTMLInputElement
    : T extends 'li'
    ? HTMLLIElement
    : T extends 'label'
    ? HTMLLabelElement
    : T extends 'legend'
    ? HTMLLegendElement
    : T extends 'link'
    ? HTMLLinkElement
    : T extends 'map'
    ? HTMLMapElement
    : T extends 'meta'
    ? HTMLMetaElement
    : T extends 'meter'
    ? HTMLMeterElement
    : T extends 'ins'
    ? HTMLModElement
    : T extends 'del'
    ? HTMLModElement
    : T extends 'ol'
    ? HTMLOListElement
    : T extends 'object'
    ? HTMLObjectElement
    : T extends 'optgroup'
    ? HTMLOptGroupElement
    : T extends 'option'
    ? HTMLOptionElement
    : T extends 'output'
    ? HTMLOutputElement
    : T extends 'p'
    ? HTMLParagraphElement
    : T extends 'picture'
    ? HTMLPictureElement
    : T extends 'pre'
    ? HTMLPreElement
    : T extends 'progress'
    ? HTMLProgressElement
    : T extends 'blockquote'
    ? HTMLQuoteElement
    : T extends 'q'
    ? HTMLQuoteElement
    : T extends 'script'
    ? HTMLScriptElement
    : T extends 'select'
    ? HTMLSelectElement
    : T extends 'source'
    ? HTMLSourceElement
    : T extends 'span'
    ? HTMLSpanElement
    : T extends 'style'
    ? HTMLStyleElement
    : T extends 'caption'
    ? HTMLTableCaptionElement
    : T extends 'th'
    ? HTMLTableCellElement
    : T extends 'td'
    ? HTMLTableCellElement
    : T extends 'col'
    ? HTMLTableColElement
    : T extends 'colgroup'
    ? HTMLTableColElement
    : T extends 'table'
    ? HTMLTableElement
    : T extends 'tr'
    ? HTMLTableRowElement
    : T extends 'tfoot'
    ? HTMLTableSectionElement
    : T extends 'thead'
    ? HTMLTableSectionElement
    : T extends 'tbody'
    ? HTMLTableSectionElement
    : T extends 'template'
    ? HTMLTemplateElement
    : T extends 'textarea'
    ? HTMLTextAreaElement
    : T extends 'time'
    ? HTMLTimeElement
    : T extends 'title'
    ? HTMLTitleElement
    : T extends 'track'
    ? HTMLTrackElement
    : T extends 'ul'
    ? HTMLUListElement
    : T extends 'video'
    ? HTMLVideoElement
    : HTMLElement;
}

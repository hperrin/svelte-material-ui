{#if selfClosing}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    {...$$restProps}
  />
{:else}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    {...$$restProps}><slot /></svelte:element
  >
{/if}

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, useActions } from './internal/index.js';

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  export let tag:
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
    | string = 'div';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  $: selfClosing =
    [
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ].indexOf(tag) > -1;

  let element:
    | HTMLAnchorElement
    | HTMLAreaElement
    | HTMLAudioElement
    | HTMLBRElement
    | HTMLBaseElement
    | HTMLBodyElement
    | HTMLButtonElement
    | HTMLCanvasElement
    | HTMLDListElement
    | HTMLDataElement
    | HTMLDataListElement
    | HTMLDialogElement
    | HTMLDivElement
    | HTMLEmbedElement
    | HTMLFieldSetElement
    | HTMLFormElement
    | HTMLHRElement
    | HTMLHeadElement
    | HTMLHeadingElement
    | HTMLHtmlElement
    | HTMLIFrameElement
    | HTMLImageElement
    | HTMLInputElement
    | HTMLLIElement
    | HTMLLabelElement
    | HTMLLegendElement
    | HTMLLinkElement
    | HTMLMapElement
    | HTMLMetaElement
    | HTMLMeterElement
    | HTMLModElement
    | HTMLOListElement
    | HTMLObjectElement
    | HTMLOptGroupElement
    | HTMLOptionElement
    | HTMLOutputElement
    | HTMLParagraphElement
    | HTMLPictureElement
    | HTMLPreElement
    | HTMLProgressElement
    | HTMLQuoteElement
    | HTMLScriptElement
    | HTMLSelectElement
    | HTMLSourceElement
    | HTMLSpanElement
    | HTMLStyleElement
    | HTMLTableCaptionElement
    | HTMLTableCellElement
    | HTMLTableColElement
    | HTMLTableElement
    | HTMLTableRowElement
    | HTMLTableSectionElement
    | HTMLTemplateElement
    | HTMLTextAreaElement
    | HTMLTimeElement
    | HTMLTitleElement
    | HTMLTrackElement
    | HTMLUListElement
    | HTMLVideoElement
    | HTMLElement;

  export function getElement(): typeof tag extends 'a'
    ? HTMLAnchorElement
    : typeof tag extends 'area'
    ? HTMLAreaElement
    : typeof tag extends 'audio'
    ? HTMLAudioElement
    : typeof tag extends 'br'
    ? HTMLBRElement
    : typeof tag extends 'base'
    ? HTMLBaseElement
    : typeof tag extends 'body'
    ? HTMLBodyElement
    : typeof tag extends 'button'
    ? HTMLButtonElement
    : typeof tag extends 'canvas'
    ? HTMLCanvasElement
    : typeof tag extends 'dl'
    ? HTMLDListElement
    : typeof tag extends 'data'
    ? HTMLDataElement
    : typeof tag extends 'datalist'
    ? HTMLDataListElement
    : typeof tag extends 'dialog'
    ? HTMLDialogElement
    : typeof tag extends 'div'
    ? HTMLDivElement
    : typeof tag extends 'embed'
    ? HTMLEmbedElement
    : typeof tag extends 'fieldset'
    ? HTMLFieldSetElement
    : typeof tag extends 'form'
    ? HTMLFormElement
    : typeof tag extends 'hr'
    ? HTMLHRElement
    : typeof tag extends 'head'
    ? HTMLHeadElement
    : typeof tag extends 'h1'
    ? HTMLHeadingElement
    : typeof tag extends 'h2'
    ? HTMLHeadingElement
    : typeof tag extends 'h3'
    ? HTMLHeadingElement
    : typeof tag extends 'h4'
    ? HTMLHeadingElement
    : typeof tag extends 'h5'
    ? HTMLHeadingElement
    : typeof tag extends 'h6'
    ? HTMLHeadingElement
    : typeof tag extends 'html'
    ? HTMLHtmlElement
    : typeof tag extends 'iframe'
    ? HTMLIFrameElement
    : typeof tag extends 'img'
    ? HTMLImageElement
    : typeof tag extends 'input'
    ? HTMLInputElement
    : typeof tag extends 'li'
    ? HTMLLIElement
    : typeof tag extends 'label'
    ? HTMLLabelElement
    : typeof tag extends 'legend'
    ? HTMLLegendElement
    : typeof tag extends 'link'
    ? HTMLLinkElement
    : typeof tag extends 'map'
    ? HTMLMapElement
    : typeof tag extends 'meta'
    ? HTMLMetaElement
    : typeof tag extends 'meter'
    ? HTMLMeterElement
    : typeof tag extends 'ins'
    ? HTMLModElement
    : typeof tag extends 'del'
    ? HTMLModElement
    : typeof tag extends 'ol'
    ? HTMLOListElement
    : typeof tag extends 'object'
    ? HTMLObjectElement
    : typeof tag extends 'optgroup'
    ? HTMLOptGroupElement
    : typeof tag extends 'option'
    ? HTMLOptionElement
    : typeof tag extends 'output'
    ? HTMLOutputElement
    : typeof tag extends 'p'
    ? HTMLParagraphElement
    : typeof tag extends 'picture'
    ? HTMLPictureElement
    : typeof tag extends 'pre'
    ? HTMLPreElement
    : typeof tag extends 'progress'
    ? HTMLProgressElement
    : typeof tag extends 'blockquote'
    ? HTMLQuoteElement
    : typeof tag extends 'q'
    ? HTMLQuoteElement
    : typeof tag extends 'script'
    ? HTMLScriptElement
    : typeof tag extends 'select'
    ? HTMLSelectElement
    : typeof tag extends 'source'
    ? HTMLSourceElement
    : typeof tag extends 'span'
    ? HTMLSpanElement
    : typeof tag extends 'style'
    ? HTMLStyleElement
    : typeof tag extends 'caption'
    ? HTMLTableCaptionElement
    : typeof tag extends 'th'
    ? HTMLTableCellElement
    : typeof tag extends 'td'
    ? HTMLTableCellElement
    : typeof tag extends 'col'
    ? HTMLTableColElement
    : typeof tag extends 'colgroup'
    ? HTMLTableColElement
    : typeof tag extends 'table'
    ? HTMLTableElement
    : typeof tag extends 'tr'
    ? HTMLTableRowElement
    : typeof tag extends 'tfoot'
    ? HTMLTableSectionElement
    : typeof tag extends 'thead'
    ? HTMLTableSectionElement
    : typeof tag extends 'tbody'
    ? HTMLTableSectionElement
    : typeof tag extends 'template'
    ? HTMLTemplateElement
    : typeof tag extends 'textarea'
    ? HTMLTextAreaElement
    : typeof tag extends 'time'
    ? HTMLTimeElement
    : typeof tag extends 'title'
    ? HTMLTitleElement
    : typeof tag extends 'track'
    ? HTMLTrackElement
    : typeof tag extends 'ul'
    ? HTMLUListElement
    : typeof tag extends 'video'
    ? HTMLVideoElement
    : HTMLElement {
    return element as typeof tag extends 'a'
      ? HTMLAnchorElement
      : typeof tag extends 'area'
      ? HTMLAreaElement
      : typeof tag extends 'audio'
      ? HTMLAudioElement
      : typeof tag extends 'br'
      ? HTMLBRElement
      : typeof tag extends 'base'
      ? HTMLBaseElement
      : typeof tag extends 'body'
      ? HTMLBodyElement
      : typeof tag extends 'button'
      ? HTMLButtonElement
      : typeof tag extends 'canvas'
      ? HTMLCanvasElement
      : typeof tag extends 'dl'
      ? HTMLDListElement
      : typeof tag extends 'data'
      ? HTMLDataElement
      : typeof tag extends 'datalist'
      ? HTMLDataListElement
      : typeof tag extends 'dialog'
      ? HTMLDialogElement
      : typeof tag extends 'div'
      ? HTMLDivElement
      : typeof tag extends 'embed'
      ? HTMLEmbedElement
      : typeof tag extends 'fieldset'
      ? HTMLFieldSetElement
      : typeof tag extends 'form'
      ? HTMLFormElement
      : typeof tag extends 'hr'
      ? HTMLHRElement
      : typeof tag extends 'head'
      ? HTMLHeadElement
      : typeof tag extends 'h1'
      ? HTMLHeadingElement
      : typeof tag extends 'h2'
      ? HTMLHeadingElement
      : typeof tag extends 'h3'
      ? HTMLHeadingElement
      : typeof tag extends 'h4'
      ? HTMLHeadingElement
      : typeof tag extends 'h5'
      ? HTMLHeadingElement
      : typeof tag extends 'h6'
      ? HTMLHeadingElement
      : typeof tag extends 'html'
      ? HTMLHtmlElement
      : typeof tag extends 'iframe'
      ? HTMLIFrameElement
      : typeof tag extends 'img'
      ? HTMLImageElement
      : typeof tag extends 'input'
      ? HTMLInputElement
      : typeof tag extends 'li'
      ? HTMLLIElement
      : typeof tag extends 'label'
      ? HTMLLabelElement
      : typeof tag extends 'legend'
      ? HTMLLegendElement
      : typeof tag extends 'link'
      ? HTMLLinkElement
      : typeof tag extends 'map'
      ? HTMLMapElement
      : typeof tag extends 'meta'
      ? HTMLMetaElement
      : typeof tag extends 'meter'
      ? HTMLMeterElement
      : typeof tag extends 'ins'
      ? HTMLModElement
      : typeof tag extends 'del'
      ? HTMLModElement
      : typeof tag extends 'ol'
      ? HTMLOListElement
      : typeof tag extends 'object'
      ? HTMLObjectElement
      : typeof tag extends 'optgroup'
      ? HTMLOptGroupElement
      : typeof tag extends 'option'
      ? HTMLOptionElement
      : typeof tag extends 'output'
      ? HTMLOutputElement
      : typeof tag extends 'p'
      ? HTMLParagraphElement
      : typeof tag extends 'picture'
      ? HTMLPictureElement
      : typeof tag extends 'pre'
      ? HTMLPreElement
      : typeof tag extends 'progress'
      ? HTMLProgressElement
      : typeof tag extends 'blockquote'
      ? HTMLQuoteElement
      : typeof tag extends 'q'
      ? HTMLQuoteElement
      : typeof tag extends 'script'
      ? HTMLScriptElement
      : typeof tag extends 'select'
      ? HTMLSelectElement
      : typeof tag extends 'source'
      ? HTMLSourceElement
      : typeof tag extends 'span'
      ? HTMLSpanElement
      : typeof tag extends 'style'
      ? HTMLStyleElement
      : typeof tag extends 'caption'
      ? HTMLTableCaptionElement
      : typeof tag extends 'th'
      ? HTMLTableCellElement
      : typeof tag extends 'td'
      ? HTMLTableCellElement
      : typeof tag extends 'col'
      ? HTMLTableColElement
      : typeof tag extends 'colgroup'
      ? HTMLTableColElement
      : typeof tag extends 'table'
      ? HTMLTableElement
      : typeof tag extends 'tr'
      ? HTMLTableRowElement
      : typeof tag extends 'tfoot'
      ? HTMLTableSectionElement
      : typeof tag extends 'thead'
      ? HTMLTableSectionElement
      : typeof tag extends 'tbody'
      ? HTMLTableSectionElement
      : typeof tag extends 'template'
      ? HTMLTemplateElement
      : typeof tag extends 'textarea'
      ? HTMLTextAreaElement
      : typeof tag extends 'time'
      ? HTMLTimeElement
      : typeof tag extends 'title'
      ? HTMLTitleElement
      : typeof tag extends 'track'
      ? HTMLTrackElement
      : typeof tag extends 'ul'
      ? HTMLUListElement
      : typeof tag extends 'video'
      ? HTMLVideoElement
      : HTMLElement;
  }
</script>

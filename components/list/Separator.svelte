{#if group}
  <hr
    class="mdc-list-divider {className}"
    class:mdc-list-divider--padded={padded}
    class:mdc-list-divider--inset={inset}
    on:focus on:blur
    on:fullscreenchange on:fullscreenerror on:scroll
    on:cut on:copy on:paste
    on:keydown on:keypress on:keyup
    on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
    on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
    on:touchcancel on:touchend on:touchmove on:touchstart
    on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
    {...exclude($$props, ['class', 'group', 'padded', 'inset'])}
  />
{:else}
  <li
    class="mdc-list-divider {className}"
    class:mdc-list-divider--padded={padded}
    class:mdc-list-divider--inset={inset}
    role="separator"
    on:focus on:blur
    on:fullscreenchange on:fullscreenerror on:scroll
    on:cut on:copy on:paste
    on:keydown on:keypress on:keyup
    on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
    on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
    on:touchcancel on:touchend on:touchmove on:touchstart
    on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
    {...exclude($$props, ['class', 'group', 'padded', 'inset'])}
  ></li>
{/if}

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let group = false;
  export let padded = false;
  export let inset = false;
</script>
<ul
  bind:this={element}
  class="mdc-list {className}"
  class:mdc-list--non-interactive={nonInteractive}
  class:mdc-list--dense={dense}
  class:mdc-list--avatar-list={avatarList}
  class:mdc-list--two-line={twoLine}
  role={singleSelection ? 'listbox' : (radiolist ? 'radiogroup' : (checklist ? 'group' : 'list'))}
  on:MDCList:action={handleAction}
  on:focus on:blur
  on:fullscreenchange on:fullscreenerror on:scroll
  on:cut on:copy on:paste
  on:keydown on:keypress on:keyup
  on:auxclick on:click on:contextmenu on:dblclick on:mousedown on:mouseenter on:mouseleave on:mousemove on:mouseover on:mouseout on:mouseup on:pointerlockchange on:pointerlockerror on:select on:wheel
  on:drag on:dragend on:dragenter on:dragstart on:dragleave on:dragover on:drop
  on:touchcancel on:touchend on:touchmove on:touchstart
  on:pointerover on:pointerenter on:pointerdown on:pointermove on:pointerup on:pointercancel on:pointerout on:pointerleave on:gotpointercapture on:lostpointercapture
  on:MDCList:action
  {...exclude($$props, ['class', 'nonInteractive', 'dense', 'avatarList', 'twoLine', 'vertical', 'wrapFocus', 'singleSelection', 'selectedIndex', 'radiolist', 'checklist'])}
><slot></slot></ul>

<script context="module">
  import Item from './Item';
  import Text from './Text';
  import Graphic from './Graphic';
  import Meta from './Meta';
  import Label from './Label';
  import Group from './Group';
  import Subheader from './Subheader';
  import Separator from './Separator';

  export {Item, Text, Graphic, Meta, Label, Group, Subheader, Separator};
</script>

<script>
  import {MDCList} from '@material/list';
  import {onMount, onDestroy} from 'svelte';
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let nonInteractive = false;
  export let dense = false;
  export let avatarList = false;
  export let twoLine = false;
  export let vertical = true;
  export let wrapFocus = false;
  export let singleSelection = false;
  export let selectedIndex = null;
  export let radiolist = false;
  export let checklist = false;

  let element;
  let list;

  $: if (list && list.vertical !== vertical) {
    list.vertical = vertical;
  }

  $: if (list && list.wrapFocus !== wrapFocus) {
    list.wrapFocus = wrapFocus;
  }

  $: if (list && list.singleSelection !== singleSelection) {
    list.singleSelection = singleSelection;
  }

  $: if (list && singleSelection && list.selectedIndex !== selectedIndex) {
    list.selectedIndex = selectedIndex;
  }

  onMount(() => {
    list = new MDCList(element);
    if (singleSelection) {
      list.initializeListType();
      selectedIndex = list.selectedIndex;
    }
  });

  onDestroy(() => {
    list.destroy();
  });

  function handleAction(e) {
    selectedIndex = e.detail.index;
  }

  export function layout(...args) {
    return list.layout(...args);
  }
</script>

<style lang="scss" global>
  @import "@material/list/mdc-list";
</style>
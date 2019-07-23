<ul
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-list {className}"
  class:mdc-list--non-interactive={nonInteractive}
  class:mdc-list--dense={dense}
  class:mdc-list--avatar-list={avatarList}
  class:mdc-list--two-line={twoLine}
  role={singleSelection ? 'listbox' : (radiolist ? 'radiogroup' : (checklist ? 'group' : 'list'))}
  on:MDCList:action={handleAction}
  {...exclude($$props, ['use', 'class', 'nonInteractive', 'dense', 'avatarList', 'twoLine', 'vertical', 'wrapFocus', 'singleSelection', 'selectedIndex', 'radiolist', 'checklist'])}
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
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, 'MDCList:action');

  export let use = [];
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

{#if $filter}
  <Checkmark />
{/if}
<span
  use:useActions={use}
  use:forwardEvents
  role="gridcell"
>
  <span
    class="
      {className}
      mdc-chip__text
    "
    role="{$filter ? 'checkbox' : ($choice ? 'radio' : 'button')}"
    {...(($filter || $choice) ? {'aria-selected': ($isSelected ? 'true' : 'false')} : {})}
    tabindex={tabindexValue}
    {...exclude($$props, ['use', 'class', 'tabindex'])}
  ><slot></slot></span>
</span>

<script>
  import {getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';
  import Checkmark from './Checkmark.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let tabindex = null;

  const tabindexContext = getContext('SMUI:chip:tabindex');
  $: tabindexValue = tabindex == null ? $tabindexContext : tabindex;

  const choice = getContext('SMUI:chip:choice');
  const filter = getContext('SMUI:chip:filter');
  const isSelected = getContext('SMUI:chip:isSelected');
</script>

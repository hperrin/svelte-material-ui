<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-tab-indicator
    {className}
    {active ? 'mdc-tab-indicator--active' : ''}
    {transition === 'fade' ? 'mdc-tab-indicator--fade' : ''}
  "
  {...exclude($$props, ['use', 'class', 'active', 'type', 'transition', 'content$'])}
>
  <span
    use:useActions={content$use}
    class="
      mdc-tab-indicator__content
      {content$class}
      {type === 'underline' ? 'mdc-tab-indicator__content--underline' : ''}
      {type === 'icon' ? 'mdc-tab-indicator__content--icon' : ''}
    "
    aria-hidden={type === 'icon' ? 'true' : 'false'}
    {...exclude(prefixFilter($$props, 'content$'), ['use', 'class'])}
  ><slot></slot></span>
</span>

<script>
  import {MDCTabIndicator} from '@material/tab-indicator';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {prefixFilter} from '@smui/common/prefixFilter.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let active = false;
  export let type = 'underline';
  export let transition = 'slide';
  export let content$use = [];
  export let content$class = '';

  let element;
  let tabIndicator;
  let instantiate = getContext('SMUI:tab-indicator:instantiate');
  let getInstance = getContext('SMUI:tab-indicator:getInstance');

  onMount(async () => {
    if (instantiate !== false) {
      tabIndicator = new MDCTabIndicator(element);
    } else {
      tabIndicator = await getInstance();
    }
  });

  onDestroy(() => {
    tabIndicator && tabIndicator.destroy();
  });

  export function activate(...args) {
    return tabIndicator.activate(...args);
  }

  export function deactivate(...args) {
    return tabIndicator.deactivate(...args);
  }

  export function computeContentClientRect(...args) {
    return tabIndicator.computeContentClientRect(...args);
  }
</script>

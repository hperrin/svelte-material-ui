<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-tab-indicator {className}"
  class:mdc-tab-indicator--active={active}
  class:mdc-tab-indicator--fade={transition === 'fade'}
  {...exclude($$props, ['use', 'class', 'active', 'type', 'transition', 'content$'])}
>
  <span
    use:useActions={content$use}
    class="mdc-tab-indicator__content {content$class}"
    class:mdc-tab-indicator__content--underline={type === 'underline'}
    class:mdc-tab-indicator__content--icon={type === 'icon'}
    aria-hidden={type === 'icon'}
    {...exclude(prefixFilter($$props, 'content$'), ['use', 'class'])}
  ><slot></slot></span>
</span>

<script>
  import {MDCTabIndicator} from '@material/tab-indicator';
  import {onMount, onDestroy, getContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

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
    tabIndicator.destroy();
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
<li
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use', 'list$'])}
>
  <ul
    use:useActions={list$use}
    class="mdc-menu__selection-group {list$class}"
    {...exclude(prefixFilter($$props, 'list$'), ['use', 'class'])}
  ><slot></slot></ul>
</li>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {prefixFilter} from '../prefixFilter';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let list$use = [];
  export let list$class = '';
</script>
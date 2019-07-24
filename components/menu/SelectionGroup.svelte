<li
  use:useActions={use}
  use:forwardEvents
  {...exclude($$props, ['use'])}
>
  <ul
    use:useActions={listProps.use}
    class="mdc-menu__selection-group {listProps.class}"
    {...exclude(listProps, ['use', 'class'])}
  ><slot></slot></ul>
</li>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let listProps = {
    use: [],
    class: ''
  };
</script>
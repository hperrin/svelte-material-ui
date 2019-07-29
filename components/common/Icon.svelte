<i
  use:useActions={use}
  class="material-icons {className}"
  class:mdc-button__icon={context === 'button'}
  class:mdc-fab__icon={context === 'fab'}
  class:mdc-icon-button__icon={context === 'iconButton'}
  class:mdc-icon-button__icon--on={context === 'iconButton' && on}
  class:mdc-chip__icon={context === 'chips'}
  class:mdc-chip__icon--leading={context === 'chips' && leading}
  class:mdc-chip__icon--leading-hidden={context === 'chips' && leadingHidden}
  class:mdc-chip__icon--trailing={context === 'chips' && trailing}
  aria-hidden="true"
  {...exclude($$props, ['use', 'class', 'on', 'leading', 'leadingHidden', 'trailing'])}
><slot></slot></i>

<script>
  import {getContext} from 'svelte';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  export let use = [];
  let className = '';
  export {className as class};
  export let on = false;
  export let leading = false;
  export let leadingHidden = false;
  export let trailing = false;

  const context = getContext('SMUI:iconContext');
</script>
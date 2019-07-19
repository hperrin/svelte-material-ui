<i
  class="material-icons mdc-chip__icon {className}"
  class:mdc-chip__icon--leading={leading}
  class:mdc-chip__icon--leading-hidden={leadingHidden}
  class:mdc-chip__icon--trailing={trailing}
  {...exclude($$props, ['class', 'leading', 'leadingHidden', 'trailing'])}
><slot></slot></i>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let leading = false;
  export let leadingHidden = false;
  export let trailing = false;
</script>
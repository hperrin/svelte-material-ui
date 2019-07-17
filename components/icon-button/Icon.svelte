<i
  class="material-icons mdc-icon-button__icon {className}"
  class:mdc-icon-button__icon--on={on}
  {...exclude($$props, ['className', 'on'])}
><slot></slot></i>

<script>
  import {exclude} from '../exclude.js';

  export let className = '';
  export let on = false;
</script>
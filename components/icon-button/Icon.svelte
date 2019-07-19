<i
  class="material-icons mdc-icon-button__icon {className}"
  class:mdc-icon-button__icon--on={on}
  {...exclude($$props, ['class', 'on'])}
><slot></slot></i>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
  export let on = false;
</script>
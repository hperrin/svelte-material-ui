<span class="mdc-button__label {className}" {...exclude($$props, ['class'])}><slot></slot></span>

<script>
  import {exclude} from '../exclude';

  let className = '';
  export {className as class};
</script>
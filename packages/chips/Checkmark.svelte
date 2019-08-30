<div
  use:useActions={use}
  class="mdc-chip__checkmark {className}"
  {...exclude($$props, ['use', 'class'])}
>
  <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
    <path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
  </svg>
</div>

<script>
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  export let use = [];
  let className = '';
  export {className as class};
</script>
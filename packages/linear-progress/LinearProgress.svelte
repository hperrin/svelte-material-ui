<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-linear-progress
    {className}
    {indeterminate ? 'mdc-linear-progress--indeterminate' : ''}
    {reversed ? 'mdc-linear-progress--reversed' : ''}
    {closed ? 'mdc-linear-progress--closed' : ''}
  "
  role="progressbar"
  {...exclude($$props, ['use', 'class', 'indeterminate', 'reversed', 'closed', 'progress'])}
>
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>

<script>
  import {MDCLinearProgress} from '@material/linear-progress';
  import {onMount, onDestroy} from 'svelte';
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export {className as class};
  export let indeterminate = false;
  export let reversed = false;
  export let closed = false;
  export let progress = 0;
  export let buffer = null;

  let element;
  let linearProgress;

  $: if (linearProgress) {
    if (closed) {
      linearProgress.close();
    } else {
      linearProgress.open();
    }
  }

  $: if (linearProgress) {
    linearProgress.determinate = !indeterminate;
  }

  $: if (linearProgress) {
    linearProgress.progress = progress;
  }

  $: if (linearProgress) {
    linearProgress.buffer = buffer;
  }

  $: if (linearProgress) {
    linearProgress.reverse = reversed;
  }

  onMount(() => {
    linearProgress = new MDCLinearProgress(element);
  });

  onDestroy(() => {
    linearProgress && linearProgress.destroy();
  });
</script>

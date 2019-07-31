<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field-character-counter {className}"
  {...exclude($$props, ['use', 'class'])}
><slot></slot></div>

<script>
  import {MDCTextFieldCharacterCounter} from '@material/textfield/character-counter';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};

  let element;
  let characterCounter;

  onMount(() => {
    characterCounter = new MDCTextFieldCharacterCounter(element);
  });

  onDestroy(() => {
    characterCounter.destroy();
  });
</script>

<style lang="scss" global>
  @import "@material/textfield/character-counter/mdc-text-field-character-counter";
</style>
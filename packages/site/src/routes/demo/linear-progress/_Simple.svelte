<LinearProgress {progress} {closed} />

<br />

<Button on:click={reset}>Reset</Button>

<FormField>
  <Checkbox bind:checked={closed} />
  <span slot="label">Closed</span>
</FormField>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import LinearProgress from '@smui/linear-progress';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let progress = 0;
  let closed = false;
  let timer: NodeJS.Timer;

  onMount(reset);

  onDestroy(() => {
    clearInterval(timer);
  });

  function reset() {
    progress = 0;
    closed = false;
    clearInterval(timer);
    timer = setInterval(() => {
      progress += 0.01;

      if (progress >= 1) {
        progress = 1;
        closed = true;
        clearInterval(timer);
      }
    }, 100);
  }
</script>

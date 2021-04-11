<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress</h2>

  <div>
    <LinearProgress {progress} {closed} />

    <br />

    <Button on:click={reset}>Reset</Button>

    <FormField>
      <Checkbox bind:checked={closed} />
      <span slot="label">Closed</span>
    </FormField>
  </div>

  <div>
    <h6 class="demo-title">Buffered</h6>

    <LinearProgress progress={0.5} buffer={0.75} />
  </div>

  <div>
    <h6 class="demo-title">Indeterminate</h6>

    <LinearProgress indeterminate />
  </div>

  <div>
    <h6 class="demo-title">Colored (using Sass mixins)</h6>

    <LinearProgress class="my-colored-bar" progress={0.5} buffer={0.75} />
  </div>
</section>

<script>
  import { onMount, onDestroy } from 'svelte';
  import LinearProgress from '@smui/linear-progress';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';
  import './linear-progress.scss';

  let progress = 0;
  let closed = false;
  let timer;

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

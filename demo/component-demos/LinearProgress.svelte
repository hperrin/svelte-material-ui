<section>
  <h2>Linear Progress</h2>

  <div>
    <LinearProgress {progress} {closed} />

    <br />

    <Button on:click={reset}>Reset</Button>

    <FormField>
      <div slot="input">
        <Checkbox bind:checked={closed} />
      </div>
      <span slot="label">Closed</span>
    </FormField>
  </div>

  <div>
    Buffered:

    <LinearProgress progress={.5} buffer={.75} />
  </div>

  <div>
    Indeterminate:

    <LinearProgress indeterminate />
  </div>

  <div>
    Reversed:

    <LinearProgress progress={.5} reversed />
  </div>

  <div>
    Reversed Buffered:

    <LinearProgress progress={.5} buffer={.75} reversed />
  </div>
</section>

<script>
  import {onMount, onDestroy} from 'svelte';
  import LinearProgress from 'svelte-material-ui/components/linear-progress';
  import Checkbox from 'svelte-material-ui/components/checkbox';
  import FormField from 'svelte-material-ui/components/form-field';
  import Button from 'svelte-material-ui/components/button';

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
      progress += .01;

      if (progress >= 1) {
        progress = 1;
        closed = true;
        clearInterval(timer);
      }
    }, 100);
  }
</script>
<Set chips={choices} filter bind:selected>
  {#snippet chip(chip)}
    <Chip {chip} touch>
      <Text>{chip}</Text>
    </Chip>
  {/snippet}
</Set>

<div style="margin-top: 1em;">Programmatically add:</div>
{#each choices as choice}
  <Button onclick={() => add(choice)}>
    <Label>{choice}</Label>
  </Button>
{/each}

<div style="margin-top: 1em;">Programmatically remove:</div>
{#each choices as choice}
  <Button onclick={() => remove(choice)}>
    <Label>{choice}</Label>
  </Button>
{/each}

<pre class="status">Selected: {selected.join(', ')}</pre>

<script lang="ts">
  import Chip, { Set, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = $state(['Shoes', 'Shirts', 'Coats']);

  function add(choice: string) {
    const idx = selected.findIndex((val) => val === choice);

    if (idx === -1) {
      selected.push(choice);
    }
  }

  function remove(choice: string) {
    const idx = selected.findIndex((val) => val === choice);

    if (idx !== -1) {
      selected.splice(idx, 1);
    }
  }
</script>

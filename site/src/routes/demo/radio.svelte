<svelte:head>
  <title>Radio - SMUI</title>
</svelte:head>

<section>
  <h2>Radio</h2>

  <div class="radio-demo">
    {#each options as option}
      <FormField>
        <Radio
          bind:group={selected}
          value={option.name}
          disabled={option.disabled}
        />
        <span slot="label"
          >{option.name}{option.disabled ? ' (disabled)' : ''}</span
        >
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {selected}</pre>

  <div class="radio-demo">
    Increased touch target:<br />
    {#each ['On', 'Off'] as option}
      <FormField>
        <Radio bind:group={onoff} value={option} touch />
        <span slot="label">{option}</span>
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {onoff}</pre>
</section>

<script>
  import Radio from '@smui/radio';
  import FormField from '@smui/form-field';

  let options = [
    {
      name: 'Bashful',
      disabled: false,
    },
    {
      name: 'Doc',
      disabled: true,
    },
    {
      name: 'Dopey',
      disabled: false,
    },
    {
      name: 'Happy',
      disabled: false,
    },
    {
      name: 'Sleepy',
      disabled: false,
    },
    {
      name: 'Sneezy',
      disabled: false,
    },
    {
      name: 'Grumpy',
      disabled: false,
    },
  ];
  let selected = 'Grumpy';
  let onoff = 'On';
</script>

<style>
  .radio-demo > :global(*) {
    margin: 0 0.2em;
  }
</style>

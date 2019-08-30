<section>
  <h2>Radio</h2>

  <div>
    {#each options as option}
      <FormField>
        <Radio bind:group={selected} value={option.name} disabled={option.disabled} />
        <span slot="label">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {selected}</pre>
</section>

<script>
  import Radio from '@svelte-material-ui/radio';
  import FormField from '@svelte-material-ui/form-field';

  let options = [
    {
      name: 'Bashful',
      disabled: false
    },
    {
      name: 'Doc',
      disabled: true
    },
    {
      name: 'Dopey',
      disabled: false
    },
    {
      name: 'Happy',
      disabled: false
    },
    {
      name: 'Sleepy',
      disabled: false
    },
    {
      name: 'Sneezy',
      disabled: false
    },
    {
      name: 'Grumpy',
      disabled: false
    }
  ];
  let selected = 'Grumpy';
</script>
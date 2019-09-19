<svelte:head>
  <title>Switch - SMUI</title>
</svelte:head>

<section>
  <h2>Switch</h2>

  <div>
    <FormField>
      <Switch bind:checked={simpleSelected} />
      <span slot="label">Fields of grain.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected}</pre>

  <div>
    <FormField align="end">
      <Switch bind:checked={simpleSelected2} />
      <span slot="label">Fields of grain.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected2}</pre>

  <div>
    Group switch:<br />
    {#each options as option}
      <div style="margin: 18px 0;">
        <FormField>
          <Switch bind:group={selected} value={option.name} disabled={option.disabled} />
          <span slot="label">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
        </FormField>
      </div>
    {/each}
  </div>

  <pre class="status">Selected: {selected.join(', ')}</pre>
</section>

<script>
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';

  let simpleSelected = false;
  let simpleSelected2 = false;

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
  let selected = ['Happy', 'Grumpy'];
</script>
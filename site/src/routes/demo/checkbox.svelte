<svelte:head>
  <title>Checkbox - SMUI</title>
</svelte:head>

<section>
  <h2>Checkbox</h2>

  <div>
    <FormField>
      <Checkbox bind:checked={simpleSelected} />
      <span slot="label">Remember me.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected}</pre>

  <div>
    <FormField align="end">
      <Checkbox bind:checked={simpleSelected2} />
      <span slot="label">Remember me.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected2}</pre>

  <div>
    Group checkbox:<br />
    {#each options as option}
      <FormField>
        <Checkbox bind:group={selected} value={option.name} disabled={option.disabled} />
        <span slot="label">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {selected.join(', ')}</pre>

  <div>
    Indeterminate:<br />
    <FormField>
      <Checkbox bind:checked={indeterminateChecked} indeterminate={indeterminateChecked === null} input$required />
      <span slot="label">I agree to the terms.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {indeterminateChecked}</pre>
  <Button on:click={() => indeterminateChecked = null }>reset</Button>
</section>

<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

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

  let indeterminateChecked = null;
</script>
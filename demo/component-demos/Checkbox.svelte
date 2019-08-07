<section>
  <h2>Checkbox</h2>

  <div>
    <FormField>
      <div slot="input">
        <Checkbox bind:checked={simpleSelected} />
      </div>
      <span slot="label">Remember me.</span>
    </FormField>
  </div>

  <div class="status">Checked: {simpleSelected}</div>

  <div>
    <FormField alignEnd>
      <div slot="input">
        <Checkbox bind:checked={simpleSelected2} />
      </div>
      <span slot="label">Remember me.</span>
    </FormField>
  </div>

  <div class="status">Checked: {simpleSelected2}</div>

  <div>
    Group checkbox:<br />
    {#each options as option}
      <FormField>
        <div slot="input">
          <Checkbox bind:group={selected} value={option.name} disabled={option.disabled} />
        </div>
        <span slot="label">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
      </FormField>
    {/each}
  </div>

  <div class="status">Selected: {selected.join(', ')}</div>

  <div>
    Indeterminate:<br />
    <FormField>
      <div slot="input">
        <Checkbox bind:checked={indeterminateChecked} indeterminate={indeterminateChecked === null} input$required />
      </div>
      <span slot="label">I agree to the terms.</span>
    </FormField>
  </div>

  <div class="status">Checked: {indeterminateChecked}</div>
  <Button on:click={() => indeterminateChecked = null }>reset</Button>
</section>

<script>
  import Checkbox from 'svelte-material-ui/components/checkbox';
  import FormField from 'svelte-material-ui/components/form-field';
  import Button from 'svelte-material-ui/components/button';

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
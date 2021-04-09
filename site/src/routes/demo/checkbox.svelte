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

  <div>
    <Button on:click={() => (simpleSelected2 = !simpleSelected2)}
      >Toggle Programmatically</Button
    >
  </div>

  <pre class="status">Checked: {simpleSelected2}</pre>

  <div>
    <h6 class="demo-title">Increased touch target</h6>

    <FormField>
      <Checkbox bind:checked={simpleSelected3} touch />
      <span slot="label">Remember me.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected3}</pre>

  <div>
    <h6 class="demo-title">Group checkbox</h6>
    {#each options as option}
      <FormField>
        <Checkbox
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

  <div>
    <Button
      on:click={() => {
        const idx = selected.indexOf('Doc');
        if (idx > -1) {
          selected.splice(idx, 1);
        } else {
          selected.push('Doc');
        }
        selected = selected;
      }}>Toggle Doc Programmatically</Button
    >
  </div>

  <pre class="status">Selected: {selected.join(', ')}</pre>

  <div>
    <h6 class="demo-title">Indeterminate</h6>
    <FormField>
      <!-- Note that binding to `indeterminate` is probably a bad idea.
        The component will never set `indeterminate` internally. -->
      <Checkbox
        bind:checked={indeterminateChecked}
        indeterminate={indeterminateChecked === null}
        input$required
      />
      <span slot="label">I agree to the terms.</span>
    </FormField>

    <br />
    <Button on:click={() => (indeterminateChecked = null)}>Reset</Button>
  </div>

  <pre class="status">Checked: {indeterminateChecked}</pre>
</section>

<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let simpleSelected = false;
  let simpleSelected2 = false;
  let simpleSelected3 = false;

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
  let selected = ['Happy', 'Grumpy'];

  let indeterminateChecked = null;
</script>

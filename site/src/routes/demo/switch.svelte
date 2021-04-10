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

  <div>
    <Button on:click={() => (simpleSelected2 = !simpleSelected2)}
      >Toggle Programmatically</Button
    >
  </div>

  <pre class="status">Checked: {simpleSelected2}</pre>

  <h6 class="demo-title">Primary color</h6>

  <div>
    <FormField>
      <Switch color="primary" bind:checked={simpleSelected3} />
      <span slot="label">Fields of grain.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected3}</pre>

  <div>
    <FormField align="end">
      <Switch color="primary" bind:checked={simpleSelected4} />
      <span slot="label">Fields of grain.</span>
    </FormField>
  </div>

  <pre class="status">Checked: {simpleSelected4}</pre>

  <div>
    <h6 class="demo-title">Group switch</h6>

    {#each options as option}
      <div style="margin: 18px 0;">
        <FormField>
          <Switch
            bind:group={selected}
            value={option.name}
            disabled={option.disabled}
          />
          <span slot="label"
            >{option.name}{option.disabled ? ' (disabled)' : ''}</span
          >
        </FormField>
      </div>
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
</section>

<script>
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

  let simpleSelected = false;
  let simpleSelected2 = false;
  let simpleSelected3 = false;
  let simpleSelected4 = false;

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
</script>

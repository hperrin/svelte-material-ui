<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields</h2>

  <div>
    <FormField>
      <Checkbox bind:checked />
      <span slot="label"
        >Form fields let you click the label to toggle or focus the form
        control.</span
      >
    </FormField>
  </div>

  <pre class="status">Checked: {checked ? 'Yes' : 'No'}</pre>

  <div>
    {#each ['yes', 'no'] as option}
      <FormField style="margin-right: 1em;">
        <Radio bind:group={selected} value={option} />
        <span slot="label"
          >{`${option[0].toUpperCase()}${option.slice(1)}`}</span
        >
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {selected}</pre>

  <div>
    <FormField>
      <Switch bind:checked={agreed} />
      <span slot="label"
        >I agree to the terms and conditions of the software, <small
          style="opacity: .4;"
          >and hereby sign away my rights just to use this app.</small
        ></span
      >
    </FormField>
  </div>

  <pre class="status">Agreed: {agreed ? 'Yes, muahahah.' : 'Not yet.'}</pre>
</section>

<script>
  import FormField from '@smui/form-field';
  import Radio from '@smui/radio';
  import Checkbox from '@smui/checkbox';
  import Switch from '@smui/switch';

  let checked = false;
  let selected = 'yes';
  let agreed = false;
</script>

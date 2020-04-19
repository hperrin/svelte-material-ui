<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields</h2>

  <div>
    {#each ['yes', 'no'] as option}
      <FormField style="margin-right: 1em;">
        <Radio bind:group={selected} value={option} />
        <span slot="label">{`${option[0].toUpperCase()}${option.slice(1)}`}</span>
      </FormField>
    {/each}
  </div>

  <pre class="status">Selected: {selected}</pre>

  <div>
    <FormField>
      <Checkbox bind:checked={checked} />
      <span slot="label">I agree to the terms and conditions of the software, <small style="opacity: .7">and hereby sign away my life just to check my freaking messages.</small></span>
    </FormField>
  </div>

  <pre class="status">Checked: {checked ? 'Yes, muahahah.' : 'Not yet.'}</pre>
</section>

<script>
  import FormField from '@smui/form-field';
  import Radio from '@smui/radio';
  import Checkbox from '@smui/checkbox';

  let selected = 'yes';
  let checked = false;
</script>
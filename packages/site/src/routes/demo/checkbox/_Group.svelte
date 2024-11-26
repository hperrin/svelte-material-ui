<div>
  {#each options as option}
    <FormField>
      <Checkbox
        bind:group={selected}
        value={option.name}
        disabled={option.disabled}
      />
      {#snippet label()}
        {option.name}{option.disabled ? ' (disabled)' : ''}
      {/snippet}
    </FormField>
  {/each}
</div>

<div style="margin-top: 1em;">
  <Button
    onclick={() => {
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

<script lang="ts">
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button';

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
  let selected = $state(['Happy', 'Grumpy']);
</script>

<section>
  <h2>Switch</h2>

  <div>
    <FormField>
      <div slot="input">
        <Switch bind:checked={simpleSelected} />
      </div>
      <span slot="label" style="margin-left: 10px;">Fields of grain.</span>
    </FormField>
  </div>

  <div class="status">Checked: {simpleSelected}</div>

  <div>
    <FormField alignEnd>
      <div slot="input">
        <Switch bind:checked={simpleSelected2} />
      </div>
      <span slot="label" style="margin-right: 10px;">Fields of grain.</span>
    </FormField>
  </div>

  <div class="status">Checked: {simpleSelected2}</div>

  <div>
    Group switch:<br />
    {#each options as option}
      <div style="margin: 18px 0;">
        <FormField>
          <div slot="input">
            <Switch bind:group={selected} value={option.name} disabled={option.disabled} />
          </div>
          <span slot="label" style="margin-left: 10px;">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
        </FormField>
      </div>
    {/each}
  </div>

  <div class="status">Selected: {selected.join(', ')}</div>
</section>

<script>
  import Switch from 'svelte-material-ui/components/switch';
  import FormField from 'svelte-material-ui/components/form-field';

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
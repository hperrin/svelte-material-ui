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
    Group checkbox:
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
    Indeterminate:
    <FormField>
      <div slot="input">
        <Checkbox bind:checked={indeterminateChecked} indeterminate={indeterminateChecked === null} />
      </div>
      <span slot="label">I agree to the terms.</span>
    </FormField>
  </div>

  <div class="status">Checked: {indeterminateChecked} <button on:click={() => indeterminateChecked = null }>reset</button></div>
</section>

<script>
  import Checkbox from '../components/checkbox';
  import FormField from '../components/form-field';

  let simpleSelected = false;

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
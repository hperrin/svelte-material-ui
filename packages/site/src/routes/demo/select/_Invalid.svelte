<div class="columns margins">
  <div>
    <!-- You need to both provide `invalid` and set `updateInvalid` to false -->
    <Select
      bind:value={valueA}
      label="Fruit"
      invalid={invalidA}
      updateInvalid={false}
    >
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <div style="margin-top: 1em;">
      <FormField>
        <Checkbox bind:checked={invalidA} />
        <span slot="label"> Invalid </span>
      </FormField>
    </div>

    <pre class="status">Selected: {valueA}</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueA = '';
  let invalidA = false;
</script>

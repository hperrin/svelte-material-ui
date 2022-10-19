<div class="columns margins">
  <div>
    <!--
      Note: you need to provide a function as `key` that returns a unique string
      for each option.

      It *must* be a string. (Hence `${fruit ? fruit.id : ''}` in this
      example. That returns a string for the numberic `id` field and `null` and
      `undefined` values even.)
      
      If the string is empty (""), the label will stop floating when that option
      is selected and the component is unfocused. Therefore, the option for that
      value shouldn't have any text, or the floating label will overlap it.
    -->
    <Select
      key={(fruit) => `${fruit ? fruit.id : ''}`}
      bind:value={valueA}
      label="Objects"
    >
      <Option value={null} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueA
        ? valueA.label
        : 'None'}, Price: {valueA ? valueA.price : '-'}¢</pre>
  </div>

  <div>
    <Select key={(bool) => `${bool}`} bind:value={valueB} label="Booleans">
      {#each [true, false] as value}
        <Option {value}>{value ? 'Yes' : 'No'}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {JSON.stringify(valueB)}</pre>
  </div>

  <div>
    <Select
      key={(value) => `${value == null ? '' : value}`}
      bind:value={valueC}
      label="Integers"
    >
      <Option value={null} />
      {#each [0, 1, 2, 3, 4] as value}
        <Option {value}>{value}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {JSON.stringify(valueC)}</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';

  type Fruit = { id: number; label: string; price: number };
  let fruits: Fruit[] = [
    { id: 1, label: 'Apple', price: 35 },
    { id: 2, label: 'Orange', price: 38 },
    { id: 3, label: 'Banana', price: 28 },
    { id: 4, label: 'Mango', price: 25 },
  ];

  let valueA: Fruit | null = null;
  let valueB: boolean = true;
  let valueC: number | null = null;
</script>

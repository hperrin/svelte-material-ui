<div class="columns margins">
  <div>
    <!--
      Note: you need to provide a function as `key` that returns a unique string
      for each option.

      It *must* be a string. (Hence the `${(fruit && fruit.id) || ''}` part.
      That returns a string for the numberic `id` field and the `null` and
      `undefined` values even.) If the string is empty (""), the label will stop
      floating when that option is selected and the component is unfocused.
      Therefore, the option for that value shouldn't have any text, or the
      floating label will overlap it.
    -->
    <Select
      key={(fruit) => `${(fruit && fruit.id) || ''}`}
      bind:value={valueA}
      label="Standard"
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
    <Select
      variant="filled"
      key={(fruit) => `${(fruit && fruit.id) || ''}`}
      bind:value={valueB}
      label="Filled"
    >
      <Option value={null} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueB
        ? valueB.label
        : 'None'}, Price: {valueB ? valueB.price : '-'}¢</pre>
  </div>

  <div>
    <Select
      variant="outlined"
      key={(fruit) => `${(fruit && fruit.id) || ''}`}
      bind:value={valueC}
      label="Outlined"
    >
      <Option value={undefined} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueC
        ? valueC.label
        : 'None'}, Price: {valueC ? valueC.price : '-'}¢</pre>
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

  let valueA: Fruit | undefined = undefined;
  let valueB: Fruit | undefined = undefined;
  let valueC: Fruit | undefined = undefined;
</script>

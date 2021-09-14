<div class="columns margins">
  <div>
    <!--
      Note: you need to provide a function
      as `key` that returns a unique string
      for each option.
    -->
    <Select
      key={(fruit) => (fruit && fruit.label) || ''}
      bind:value={valueA}
      label="Standard"
    >
      <Option value={null} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre
      class="status">Selected: {valueA ? valueA.label : 'None'}, Price: {valueA ?  valueA.price : '-'}¢</pre>
  </div>

  <div>
    <Select
      variant="filled"
      key={(fruit) => (fruit && fruit.label) || ''}
      bind:value={valueB}
      label="Filled"
    >
      <Option value={null} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre
      class="status">Selected: {valueB ? valueB.label : 'None'}, Price: {valueB ?  valueB.price : '-'}¢</pre>
  </div>

  <div>
    <Select
      variant="outlined"
      key={(fruit) => (fruit && fruit.label) || ''}
      bind:value={valueC}
      label="Outlined"
    >
      <Option value={undefined} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre
      class="status">Selected: {valueC ? valueC.label : 'None'}, Price: {valueC ?  valueC.price : '-'}¢</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';

  type Fruit = { label: string; price: number };
  let fruits: Fruit[] = [
    { label: 'Apple', price: 35 },
    { label: 'Orange', price: 38 },
    { label: 'Banana', price: 28 },
    { label: 'Mango', price: 25 },
  ];

  let valueA: Fruit | undefined = undefined;
  let valueB: Fruit | undefined = undefined;
  let valueC: Fruit | undefined = undefined;
</script>

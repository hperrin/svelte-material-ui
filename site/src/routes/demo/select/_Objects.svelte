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
      class="status">Selected: {valueA ? valueA.label : 'None'}, Price: {valueA ?  valueA.price : '0'}¢</pre>
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
      class="status">Selected: {valueB ? valueB.label : 'None'}, Price: {valueB ?  valueB.price : '0'}¢</pre>
  </div>

  <div>
    <Select
      variant="outlined"
      key={(fruit) => (fruit && fruit.label) || ''}
      bind:value={valueC}
      label="Outlined"
    >
      <Option value={null} />
      {#each fruits as fruit (fruit.label)}
        <Option value={fruit}>{fruit.label}</Option>
      {/each}
    </Select>

    <pre
      class="status">Selected: {valueC ? valueC.label : 'None'}, Price: {valueC ?  valueC.price : '0'}¢</pre>
  </div>
</div>

<script>
  import Select, { Option } from '@smui/select';

  let fruits = [
    { label: 'Apple', price: 35 },
    { label: 'Orange', price: 38 },
    { label: 'Banana', price: 28 },
    { label: 'Mango', price: 25 },
  ];

  let valueA = null;
  let valueB = null;
  let valueC = null;
</script>

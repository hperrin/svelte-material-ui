<script>
  import Autocomplete from "@smui/autocomplete";

  let fruits = ["Apple", "Orange", "Banana", "Mango"];

  let objects = [
    {
      id: 0,
      label: "One",
    },
    {
      id: 1,
      label: "Two",
    },
    {
      id: 1,
      label: "Three",
    },
    {
      id: 3,
      label: "Four",
    },
    {
      id: 5,
      label: "Five",
    },
  ];

  let valueSimple;
  let valuePrefilled = "Orange";
  let valueStandard;
  let valueFilled;
  let valueOutlined;
  let valueObjects;
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    margin-left: 12px;
  }
  .columns > *:first-child {
    margin-left: 0;
  }

  * :global(.demo-autocomplete-width) {
    min-width: 200px;
  }

  * :global(.shaped) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>

<svelte:head>
  <title>Autocomplete - SMUI</title>
</svelte:head>

<section>
  <h2>Autocomplete</h2>

  <div class="columns margins">
    <div>
      Simple:<br />
      <Autocomplete
        options={fruits}
        bind:value={valueSimple}
        label="Fruit"
        class="demo-autocomplete-width" />
      <pre class="status">Selected: {valueSimple || ''}</pre>
    </div>

    <div>
      Prefilled:<br />
      <Autocomplete
        options={fruits}
        bind:value={valuePrefilled}
        label="Fruit"
        class="demo-autocomplete-width" />
      <pre class="status">Selected: {valuePrefilled || ''}</pre>
    </div>

    <div>
      Objects:<br />
      <Autocomplete
        options={objects}
        getOptionLabel={(option) => `${option.label} (${option.id})`}
        bind:value={valueObjects}
        label="Objects"
        class="demo-autocomplete-width" />

      <pre
        class="status">Selected: {valueObjects ? JSON.stringify(valueObjects) : ''}</pre>
    </div>
  </div>

  <div>
    <div class="columns margins">
      <div>
        Standard:<br />
        <Autocomplete
          options={fruits}
          bind:value={valueStandard}
          label="Fruit"
          class="demo-autocomplete-width" />

        <pre class="status">Selected: {valueStandard || ''}</pre>
      </div>

      <div>
        Filled:<br />
        <Autocomplete
          options={fruits}
          variant="filled"
          bind:value={valueFilled}
          label="Fruit"
          class="demo-autocomplete-width" />

        <pre class="status">Selected: {valueFilled || ''}</pre>
      </div>

      <div>
        Outlined:<br />
        <Autocomplete
          options={fruits}
          variant="outlined"
          bind:value={valueOutlined}
          label="Fruit"
          class="demo-autocomplete-width" />

        <pre class="status">Selected: {valueOutlined || ''}</pre>
      </div>
    </div>
  </div>
</section>

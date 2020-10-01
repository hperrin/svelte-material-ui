<script>
  import Autocomplete from "@smui/autocomplete";

  let options = ["Apple", "Orange", "Banana", "Mango"];
  let value;
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

  * :global(select, .demo-select-width) {
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

  <div class="columns margins" style="justify-content: flex-start;">
    <div>
      <Autocomplete {options} bind:value label="Default" />

      <pre class="status">Selected: {value}</pre>
    </div>
  </div>
</section>

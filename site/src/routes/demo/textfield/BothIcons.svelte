<h6 class="demo-title">Both icons</h6>

<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Filled">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Outlined">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  let valueA = '';
  let valueB = '';
  let valueC = '';
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
    flex-basis: 0;
    min-width: 218px;
  }

  .columns :global(.mdc-text-field) {
    width: 218px;
  }

  .columns .status {
    width: auto;
    word-break: break-all;
    overflow-wrap: break-word;
  }
</style>

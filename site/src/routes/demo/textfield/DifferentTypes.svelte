<h6 class="demo-title">Different Types</h6>

<div class="columns margins">
  <div>
    <Textfield bind:value={valueTypeNumber} label="Number" type="number" />
  </div>

  <div>
    <Textfield
      bind:value={valueTypeNumberStep}
      label="Number with Step"
      type="number"
      input$step="2"
    />
  </div>

  <div>
    <Textfield
      bind:value={valueTypeDate}
      label="DateTime-Local"
      type="datetime-local"
    />
  </div>

  <div>
    <!-- Note that the change and input events fire before the `files` prop is updated. -->
    <Textfield bind:files={valueTypeFiles} label="File" type="file" />
  </div>
</div>

<script>
  import Textfield from '@smui/textfield';

  let valueTypeNumber = 0;
  let valueTypeNumberStep = 0;
  let valueTypeDate = '';
  let valueTypeFiles = [];

  // Note that the change and input events fire before the `files` prop is updated.
  $: if (valueTypeFiles.length) {
    alert('Selected ' + valueTypeFiles.length + ' file(s).');
  }
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
</style>

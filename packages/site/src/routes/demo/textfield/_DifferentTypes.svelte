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

  <div class="hide-file-ui">
    <!--
      Note: the change and input events fire
      before the `files` prop is updated.
    -->
    <Textfield bind:files={valueTypeFiles} label="File" type="file" />
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';

  let valueTypeNumber = 0;
  let valueTypeNumberStep = 0;
  let valueTypeDate = '';
  let valueTypeFiles: FileList | null = null;

  // Note: the change and input events fire before the `files` prop is updated.
  $: if (valueTypeFiles != null && valueTypeFiles.length) {
    alert('Selected ' + valueTypeFiles.length + ' file(s).');
  }
</script>

<style>
  .hide-file-ui :global(input[type='file']::file-selector-button) {
    display: none;
  }

  .hide-file-ui
    :global(:not(.mdc-text-field--label-floating) input[type='file']) {
    color: transparent;
  }
</style>

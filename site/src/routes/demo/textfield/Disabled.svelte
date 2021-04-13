<div class="columns margins">
  <div>
    <Textfield disabled value="" label="Standard">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
  <div>
    <Textfield variant="filled" disabled value="" label="Filled">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
  <div>
    <Textfield variant="outlined" disabled value="" label="Outlined">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
</div>

<script>
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';
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

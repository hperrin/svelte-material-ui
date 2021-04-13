<h6 class="demo-title">Shaped Outlined (Styled with CSS)</h6>

<div class="columns margins">
  <div>
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueA}
      label="Label"
    >
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueB}
      label="Leading Icon"
    >
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueC}
      label="Trailing Icon"
    >
      <Icon class="material-icons" slot="trailingIcon">delete</Icon>
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
  <div>
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      invalid
      bind:value={valueD}
      label="Invalid"
    >
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueD}</pre>
  </div>
</div>

<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';

  let valueA = '';
  let valueB = '';
  let valueC = '';
  let valueD = '';
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
  *
    :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
      .mdc-floating-label) {
    left: 16px;
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>

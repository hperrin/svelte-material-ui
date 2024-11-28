<div class="columns margins">
  <div>
    <Textfield
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueA}
      label="Label"
    >
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
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
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
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
      {#snippet trailingIcon()}
        <Icon class="material-icons">delete</Icon>
      {/snippet}
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
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
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueD}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';

  let valueA = $state('');
  let valueB = $state('');
  let valueC = $state('');
  let valueD = $state('');
</script>

<style>
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading
    ) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing
    ) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  *
    :global(
      .shaped-outlined.mdc-text-field--with-leading-icon:not(
          .mdc-text-field--label-floating
        )
        .mdc-floating-label
    ) {
    left: 16px;
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>

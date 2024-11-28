<div class="columns margins">
  <div>
    <Textfield
      class="shaped-filled"
      variant="filled"
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
      class="shaped-filled"
      variant="filled"
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
      class="shaped-filled"
      variant="filled"
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
      class="shaped-filled"
      variant="filled"
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
  * :global(.shaped-filled) {
    border-radius: 16px 16px 0 0;
  }
</style>

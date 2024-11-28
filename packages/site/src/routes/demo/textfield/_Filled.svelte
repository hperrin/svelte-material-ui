<div class="columns margins">
  <div>
    <Textfield variant="filled" bind:value={valueA} label="Label">
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Leading Icon">
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
    <Textfield variant="filled" bind:value={valueC} label="Trailing Icon">
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
    <Textfield invalid variant="filled" bind:value={valueD} label="Invalid">
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

<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard">
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      {#snippet trailingIcon()}
        <Icon class="material-icons">delete</Icon>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Filled">
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      {#snippet trailingIcon()}
        <Icon class="material-icons">delete</Icon>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Outlined">
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      {#snippet trailingIcon()}
        <Icon class="material-icons">delete</Icon>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';

  let valueA = $state('');
  let valueB = $state('');
  let valueC = $state('');
</script>

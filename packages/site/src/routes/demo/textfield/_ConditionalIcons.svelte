<!--
  Icons are normally discovered through their slot,
  but Svelte slots cannot be conditional, so you can
  use a fragment with a conditional icon inside and
  pass the `withLeadingIcon` or `withTrailingIcon`
  props to use conditional icons.
-->
<div class="columns margins">
  <div>
    <Textfield
      withLeadingIcon={showLeadingIcons}
      withTrailingIcon={showTrailingIcons}
      bind:value={valueA}
      label="Standard"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailingIcon">
        {#if showTrailingIcons}
          <Icon class="material-icons">delete</Icon>
        {/if}
      </svelte:fragment>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      withLeadingIcon={showLeadingIcons}
      withTrailingIcon={showTrailingIcons}
      variant="filled"
      bind:value={valueB}
      label="Filled"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailingIcon">
        {#if showTrailingIcons}
          <Icon class="material-icons">delete</Icon>
        {/if}
      </svelte:fragment>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      withLeadingIcon={showLeadingIcons}
      withTrailingIcon={showTrailingIcons}
      variant="outlined"
      bind:value={valueC}
      label="Outlined"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <svelte:fragment slot="trailingIcon">
        {#if showTrailingIcons}
          <Icon class="material-icons">delete</Icon>
        {/if}
      </svelte:fragment>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<div>
  <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>
    Toggle Leading Icons
  </Button>
  <Button on:click={() => (showTrailingIcons = !showTrailingIcons)}>
    Toggle Trailing Icons
  </Button>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import Button from '@smui/button';

  let valueA = '';
  let valueB = '';
  let valueC = '';

  let showLeadingIcons = true;
  let showTrailingIcons = true;
</script>

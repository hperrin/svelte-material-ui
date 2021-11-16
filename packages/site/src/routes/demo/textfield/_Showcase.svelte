<div class="margins">
  <!--
    Note: when you bind to `invalid`, but you only want to
    monitor it instead of updating it yourself, you also
    should include `updateInvalid`.
  -->
  <Textfield
    type="email"
    bind:dirty
    bind:invalid
    updateInvalid
    bind:value
    label="To"
    style="min-width: 250px;"
    input$autocomplete="email"
    on:focus={() => (focused = true)}
    on:blur={() => (focused = false)}
    withTrailingIcon={!disabled}
  >
    <!--
      Since this icon is conditional, it needs to be wrapped
      in a fragment, and we need to provide withTrailingIcon.
    -->
    <svelte:fragment slot="trailingIcon">
      {#if !disabled}
        <Icon class="material-icons" role="button" on:click={clickHandler}
          >send</Icon
        >
      {/if}
    </svelte:fragment>
    <HelperText validationMsg slot="helper">
      That's not a valid email address.
    </HelperText>
  </Textfield>
</div>

<pre
  class="status">Focused: {focused}, Dirty: {dirty}, Invalid: {invalid}, Value: {value}</pre>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';

  let focused = false;
  let value: string | null = null;
  let dirty = false;
  let invalid = false;
  $: disabled = focused || !value || !dirty || invalid;

  function clickHandler() {
    alert(`Sending to ${value}!`);
    value = null;
    dirty = false;
  }
</script>

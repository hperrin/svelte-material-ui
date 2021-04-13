<div class="margins">
  <!--
    Notice that when you bind to `invalid`, but you only want to monitor it
    instead of updating it yourself, you also should include
    `updateInvalid`.
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
  >
    <Icon
      class="material-icons"
      role="button"
      {disabled}
      on:click={() => disabled || clickHandler()}
      slot="trailingIcon">send</Icon
    >
    <HelperText validationMsg slot="helper"
      >That's not a valid email address.</HelperText
    >
  </Textfield>
</div>

<pre class="status">Focused: {focused}, Dirty: {dirty}, Invalid: {invalid}</pre>

<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';

  let focused = false;
  let value = '';
  let dirty = false;
  let invalid = false;
  $: disabled = value === '' || !dirty || invalid;

  function clickHandler() {
    alert(`Sending to ${value}!`);
    value = '';
    dirty = false;
  }
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }
</style>

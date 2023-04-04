<div use:Ripple={{ surface: true }} tabindex="0" role="button">
  SMUI ripples can be added to arbitrary elements, like this <code>div</code>
  element. Try clicking it to see the ripple.
</div>

<script lang="ts">
  import Ripple from '@smui/ripple';
</script>

<style>
  div {
    padding: 10px;
    border-radius: 5px;
  }

  [tabindex='0'] {
    cursor: pointer;
  }
</style>

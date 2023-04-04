<div
  use:Ripple={{ surface: true, color: 'secondary' }}
  tabindex="0"
  role="button"
>
  Secondary color.
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

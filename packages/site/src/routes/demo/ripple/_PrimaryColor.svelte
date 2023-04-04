<div
  use:Ripple={{ surface: true, color: 'primary' }}
  tabindex="0"
  role="button"
>
  Primary color.
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

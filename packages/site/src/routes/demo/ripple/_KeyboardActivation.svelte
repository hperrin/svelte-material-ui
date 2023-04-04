<div
  use:Ripple={{ surface: true, active }}
  on:mousedown|capture={() => (active = true)}
  on:mouseup|capture={() => (active = false)}
  on:keydown|capture={(e) =>
    (active = e.code === 'Space' || e.code === 'Enter')}
  on:keyup|capture={() => (active = false)}
  tabindex="0"
  role="button"
>
  Keyboard activation on an arbitrary element. (Focus and press space/enter.)
</div>

<script lang="ts">
  import Ripple from '@smui/ripple';

  let active = false;
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

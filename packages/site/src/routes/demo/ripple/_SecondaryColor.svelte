<p use:Ripple={{ surface: true, color: 'secondary' }} tabindex="0">
  Secondary color.
</p>

<script lang="ts">
  import Ripple from '@smui/ripple';
</script>

<style>
  p {
    padding: 10px;
    border-radius: 5px;
  }

  [tabindex='0'] {
    cursor: pointer;
  }
</style>

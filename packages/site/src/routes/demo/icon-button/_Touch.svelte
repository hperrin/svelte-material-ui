<IconButton class="material-icons" onclick={() => clicked++} touch
  >build</IconButton
>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton from '@smui/icon-button';

  let clicked = $state(0);
</script>

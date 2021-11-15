<IconButton class="material-icons" on:click={() => clicked++} touch
  >build</IconButton
>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton from '@smui/icon-button';

  let clicked = 0;
</script>

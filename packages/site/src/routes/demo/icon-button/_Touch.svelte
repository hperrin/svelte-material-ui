<IconButton onclick={() => clicked++} touch>
  <Icon class="material-icons">build</Icon>
</IconButton>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = $state(0);
</script>

<div class="card-display">
  <div class="card-container">
    <Card padded>A simple padded card.</Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>You can also use <code>Content</code>.</Content>
    </Card>
  </div>

  <div class="card-container">
    <Card variant="outlined" padded>An outlined, padded card.</Card>
  </div>
</div>

<script lang="ts">
  import Card, { Content } from '@smui/card';
</script>

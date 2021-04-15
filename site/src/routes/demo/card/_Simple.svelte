<div style="display: flex; flex-wrap: wrap;">
  <div class="card-container short">
    <Card
      style="width: 250px;"
      on:click={() => {
        alert('click');
      }}
      on:wheel:passive={() => {
        console.log('wheel');
      }}
      padded>A simple padded card.</Card
    >
  </div>

  <div class="card-container short">
    <Card style="width: 250px;">
      <Content>You can also use <code>Content</code>.</Content>
    </Card>
  </div>

  <div class="card-container short">
    <Card style="width: 250px;" variant="outlined" padded>
      An outlined, padded card.
    </Card>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Card, { Content } from '@smui/card';

  let clicked = 0;
</script>

<style>
  .card-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    min-width: 380px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }

  .card-container.short {
    min-height: 200px;
  }
</style>

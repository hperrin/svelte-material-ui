<h6 class="demo-title">With Actions</h6>

<div style="display: flex; flex-wrap: wrap;">
  <div class="card-container short">
    <Card style="width: 250px;">
      <PrimaryAction on:click={() => clicked++} padded>
        Primary Action, a clickable area of the card.
      </PrimaryAction>
    </Card>
  </div>

  <div class="card-container short">
    <Card style="width: 320px;">
      <Content>A card with actions.</Content>
      <Actions>
        <Button on:click={() => clicked++}>
          <Label>Action</Label>
        </Button>
        <Button on:click={() => clicked++}>
          <Label>Another</Label>
        </Button>
      </Actions>
    </Card>
  </div>

  <div class="card-container short">
    <Card style="width: 320px;">
      <Content>A card with a full-bleed action.</Content>
      <Actions fullBleed>
        <Button on:click={() => clicked++}>
          <Label>Action</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
      </Actions>
    </Card>
  </div>

  <div class="card-container short">
    <Card style="width: 320px;">
      <Content>A card with action icons.</Content>
      <Actions>
        <IconButton
          on:click={() => clicked++}
          toggle
          aria-label="Add to favorites"
          title="Add to favorites"
        >
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        <IconButton
          class="material-icons"
          on:click={() => clicked++}
          title="Share">share</IconButton
        >
        <IconButton
          class="material-icons"
          on:click={() => clicked++}
          title="More options">more_vert</IconButton
        >
      </Actions>
    </Card>
  </div>

  <div class="card-container short">
    <Card style="width: 360px;">
      <Content>A card with Both.</Content>
      <Actions>
        <ActionButtons>
          <Button on:click={() => clicked++}>
            <Label>Action</Label>
          </Button>
          <Button on:click={() => clicked++}>
            <Label>Another</Label>
          </Button>
        </ActionButtons>
        <ActionIcons>
          <IconButton
            on:click={() => clicked++}
            toggle
            aria-label="Add to favorites"
            title="Add to favorites"
          >
            <Icon class="material-icons" on>favorite</Icon>
            <Icon class="material-icons">favorite_border</Icon>
          </IconButton>
          <IconButton
            class="material-icons"
            on:click={() => clicked++}
            title="Share">share</IconButton
          >
          <IconButton
            class="material-icons"
            on:click={() => clicked++}
            title="More options">more_vert</IconButton
          >
        </ActionIcons>
      </Actions>
    </Card>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = 0;
</script>

<style>
  .card-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    min-width: 380px;
    background-color: #f8f8f8;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .card-container.short {
    min-height: 200px;
  }
</style>

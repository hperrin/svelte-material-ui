<div class="card-display">
  <div class="card-container">
    <Card>
      <PrimaryAction onclick={() => clicked++} padded>
        Primary Action, a clickable area of the card.
      </PrimaryAction>
    </Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>A card with action buttons.</Content>
      <Actions>
        <Button onclick={() => clicked++}>
          <Label>Action</Label>
        </Button>
        <Button onclick={() => clicked++}>
          <Label>Another</Label>
        </Button>
      </Actions>
    </Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>A card with a full-bleed action.</Content>
      <Actions fullBleed>
        <Button onclick={() => clicked++}>
          <Label>Action</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
      </Actions>
    </Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>A card with action icons.</Content>
      <Actions>
        <IconButton
          onclick={() => clicked++}
          toggle
          aria-label="Add to favorites"
          title="Add to favorites"
        >
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        <IconButton onclick={() => clicked++} title="Share">
          <Icon class="material-icons">share</Icon>
        </IconButton>
        <IconButton onclick={() => clicked++} title="More options">
          <Icon class="material-icons">more_vert</Icon>
        </IconButton>
      </Actions>
    </Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>A card with Both.</Content>
      <Actions>
        <ActionButtons>
          <Button onclick={() => clicked++}>
            <Label>Action</Label>
          </Button>
          <Button onclick={() => clicked++}>
            <Label>Another</Label>
          </Button>
        </ActionButtons>
        <ActionIcons>
          <IconButton
            onclick={() => clicked++}
            toggle
            aria-label="Add to favorites"
            title="Add to favorites"
          >
            <Icon class="material-icons" on>favorite</Icon>
            <Icon class="material-icons">favorite_border</Icon>
          </IconButton>
          <IconButton onclick={() => clicked++} title="Share">
            <Icon class="material-icons">share</Icon>
          </IconButton>
          <IconButton onclick={() => clicked++} title="More options">
            <Icon class="material-icons">more_vert</Icon>
          </IconButton>
        </ActionIcons>
      </Actions>
    </Card>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = $state(0);
</script>

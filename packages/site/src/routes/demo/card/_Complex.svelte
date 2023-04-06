<div class="card-display">
  <div class="card-container">
    <Card>
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <div
              style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
            >
              <h2 class="mdc-typography--headline6" style="margin: 0;">
                A card with media.
              </h2>
              <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                And a subtitle.
              </h3>
            </div>
          </MediaContent>
        </Media>
        <Content class="mdc-typography--body2">
          It's all in this card. It's a veritable smorgasbord of card features.
        </Content>
      </PrimaryAction>
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

  <div class="card-container">
    <Card>
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9" />
        <Content class="mdc-typography--body2">
          <h2 class="mdc-typography--headline6" style="margin: 0;">
            A card with media.
          </h2>
          <h3
            class="mdc-typography--subtitle2"
            style="margin: 0 0 10px; color: #888;"
          >
            And a subtitle.
          </h3>
          It's all in this card. It's a veritable smorgasbord of card features.
        </Content>
      </PrimaryAction>
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

<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

  let clicked = 0;
</script>

<style>
  * :global(.card-media-16x9) {
    background-image: url(https://placehold.co/320x180?text=16x9);
  }
</style>

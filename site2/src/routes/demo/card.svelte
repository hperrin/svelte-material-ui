<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards</h2>

  <div style="display: flex; flex-wrap: wrap;">
    <div class="card-container short">
      <Card style="width: 250px;" padded>A simple padded card.</Card>
    </div>

    <div class="card-container short">
      <Card style="width: 250px;"><Content>You can also use <code>Content</code>.</Content></Card>
    </div>

    <div class="card-container short">
      <Card style="width: 250px;" variant="outlined" padded>An outlined, padded card.</Card>
    </div>

    <div class="card-container short">
      <Card style="width: 250px;">
        <PrimaryAction on:click={() => clicked++} padded>Primary Action</PrimaryAction>
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
          <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
            <Icon class="material-icons" on>favorite</Icon>
            <Icon class="material-icons">favorite_border</Icon>
          </IconButton>
          <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
          <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
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
            <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
          </ActionIcons>
        </Actions>
      </Card>
    </div>

    <div class="card-container">
      <Card style="width: 320px;">
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <h2 class="mdc-typography--headline6" style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">A card with 16x9 media.</h2>
          </MediaContent>
        </Media>
        <Content style="color: #888;">
          Here's some gray text down here.
        </Content>
      </Card>
    </div>

    <div class="card-container">
      <Card style="width: 320px;">
        <Media class="card-media-square" aspectRatio="square">
          <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
            <h2 class="mdc-typography--headline6" style="margin: 0;">A card with square media.</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0;">And a subtitle.</h3>
          </div>
        </Media>
      </Card>
    </div>

    <div class="card-container">
      <Card style="width: 320px;">
        <div style="padding: 1rem;">
          <h2 class="mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">And a subtitle.</h3>
        </div>
        <PrimaryAction on:click={() => clicked++}>
          <Media class="card-media-16x9" aspectRatio="16x9"></Media>
          <Content class="mdc-typography--body2">
            And some info text. And it's a primary action for the card.
          </Content>
        </PrimaryAction>
      </Card>
    </div>

    <div class="card-container">
      <div>
        <div style="width: 320px;">
          A card with a list as content:
        </div>
        <Card style="width: 320px;">
          <Content component={List}>
            {#each [...Array(6)].map((v, i) => i + 1) as item}
              <Item on:click={() => clicked++}>
                <Text>Item #{item}</Text>
              </Item>
            {/each}
          </Content>
        </Card>
      </div>
    </div>

    <div class="card-container">
      <Card style="width: 360px;">
        <PrimaryAction on:click={() => clicked++}>
          <Media class="card-media-16x9" aspectRatio="16x9">
            <MediaContent>
              <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
                <h3 class="mdc-typography--subtitle2" style="margin: 0;">And a subtitle.</h3>
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
            <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
          </ActionIcons>
        </Actions>
      </Card>
    </div>

    <div class="card-container">
      <Card style="width: 360px;">
        <PrimaryAction on:click={() => clicked++}>
          <Media class="card-media-16x9" aspectRatio="16x9"></Media>
          <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">And a subtitle.</h3>
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
            <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
              <Icon class="material-icons" on>favorite</Icon>
              <Icon class="material-icons">favorite_border</Icon>
            </IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
            <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
          </ActionIcons>
        </Actions>
      </Card>
    </div>
  </div>

  <pre class="status">Clicked: {clicked}</pre>
</section>

<script>
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  import Button, {Label} from '@smui/button';
  import IconButton, {Icon} from '@smui/icon-button';
  import List, {Item, Text} from '@smui/list';

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

  * :global(.card-media-16x9) {
    background-image: url(https://via.placeholder.com/320x180.png?text=16x9);
  }

  * :global(.card-media-square) {
    background-image: url(https://via.placeholder.com/320x320.png?text=square);
  }
</style>
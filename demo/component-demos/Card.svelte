<section>
  <h2>Cards</h2>

  <div class="float-children">
    <Card style="width: 250px;">A simple card.</Card>

    <Card style="width: 250px;" padded>A padded card.</Card>

    <Card style="width: 250px;"><Content>You can also use <code>Content</code>.</Content></Card>

    <Card style="width: 250px;" variant="outlined" padded>An outlined, padded card.</Card>
  </div>

  <div class="float-children">
    <Card style="width: 320px;">
      <Media class="card-media-16x9" aspectRatio="16x9">
        <MediaContent>
          <h2 class="mdc-typography mdc-typography--headline6" style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">A card with 16x9 media.</h2>
        </MediaContent>
      </Media>
      <Content style="color: #888;">
        Here's some text down here.
      </Content>
    </Card>

    <Card style="width: 320px;">
      <Media class="card-media-square" aspectRatio="square">
        <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
          <h2 class="mdc-typography mdc-typography--headline6" style="margin: 0;">A card with square media.</h2>
          <h3 class="mdc-typography mdc-typography--subtitle2" style="margin: 0;">And a subtitle.</h3>
        </div>
      </Media>
    </Card>
  </div>

  <div class="float-children">
    <Card style="width: 250px;">
      <PrimaryAction on:click={() => clicked++} padded>Primary Action</PrimaryAction>
    </Card>

    <Card style="width: 320px;">
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <h2 class="mdc-typography mdc-typography--headline6" style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">A card with media.</h2>
          </MediaContent>
        </Media>
        <Content class="mdc-typography mdc-typography--body2">
          And some info text. And it's all a primary action for the card.
        </Content>
      </PrimaryAction>
    </Card>
  </div>

  <div class="float-children">
    <Card style="width: 320px;">
      <Content>A card with actions.</Content>
      <Actions>
        <CardButton on:click={() => clicked++}>
          <Label>Action</Label>
        </CardButton>
        <CardButton on:click={() => clicked++}>
          <Label>Another</Label>
        </CardButton>
      </Actions>
    </Card>

    <Card style="width: 320px;">
      <Content>A card with a full-bleed action.</Content>
      <Actions fullBleed>
        <CardButton on:click={() => clicked++}>
          <Label>Action</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </CardButton>
      </Actions>
    </Card>

    <Card style="width: 320px;">
      <Content>A card with action icons.</Content>
      <Actions>
        <CardIconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
          <Icon on>favorite</Icon>
          <Icon>favorite_border</Icon>
        </CardIconButton>
        <CardIconButton on:click={() => clicked++} title="Share">share</CardIconButton>
        <CardIconButton on:click={() => clicked++} title="More options">more_vert</CardIconButton>
      </Actions>
    </Card>

    <Card style="width: 400px;">
      <Content>A card with Both.</Content>
      <Actions>
        <ActionButtons>
          <CardButton on:click={() => clicked++}>
            <Label>Action</Label>
          </CardButton>
          <CardButton on:click={() => clicked++}>
            <Label>Another</Label>
          </CardButton>
        </ActionButtons>
        <ActionIcons>
          <CardIconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
            <Icon on>favorite</Icon>
            <Icon>favorite_border</Icon>
          </CardIconButton>
          <CardIconButton on:click={() => clicked++} title="Share">share</CardIconButton>
          <CardIconButton on:click={() => clicked++} title="More options">more_vert</CardIconButton>
        </ActionIcons>
      </Actions>
    </Card>
  </div>

  <div class="float-children">
    <Card style="width: 400px;">
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
              <h2 class="mdc-typography mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
              <h3 class="mdc-typography mdc-typography--subtitle2" style="margin: 0;">And a subtitle.</h3>
            </div>
          </MediaContent>
        </Media>
        <Content class="mdc-typography mdc-typography--body2">
          It's all in this card. It's a veritable smorgasbord of card features.
        </Content>
      </PrimaryAction>
      <Actions>
        <ActionButtons>
          <CardButton on:click={() => clicked++}>
            <Label>Action</Label>
          </CardButton>
          <CardButton on:click={() => clicked++}>
            <Label>Another</Label>
          </CardButton>
        </ActionButtons>
        <ActionIcons>
          <CardIconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
            <Icon on>favorite</Icon>
            <Icon>favorite_border</Icon>
          </CardIconButton>
          <CardIconButton on:click={() => clicked++} title="Share">share</CardIconButton>
          <CardIconButton on:click={() => clicked++} title="More options">more_vert</CardIconButton>
        </ActionIcons>
      </Actions>
    </Card>

    <Card style="width: 400px;">
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9"></Media>
        <Content class="mdc-typography mdc-typography--body2">
          <h2 class="mdc-typography mdc-typography--headline6" style="margin: 0;">A card with media.</h2>
          <h3 class="mdc-typography mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">And a subtitle.</h3>
          It's all in this card. It's a veritable smorgasbord of card features.
        </Content>
      </PrimaryAction>
      <Actions>
        <ActionButtons>
          <CardButton on:click={() => clicked++}>
            <Label>Action</Label>
          </CardButton>
          <CardButton on:click={() => clicked++}>
            <Label>Another</Label>
          </CardButton>
        </ActionButtons>
        <ActionIcons>
          <CardIconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
            <Icon on>favorite</Icon>
            <Icon>favorite_border</Icon>
          </CardIconButton>
          <CardIconButton on:click={() => clicked++} title="Share">share</CardIconButton>
          <CardIconButton on:click={() => clicked++} title="More options">more_vert</CardIconButton>
        </ActionIcons>
      </Actions>
    </Card>
  </div>

  <div class="status">Clicked: {clicked}</div>
</section>

<script>
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons, Button as CardButton, IconButton as CardIconButton} from 'svelte-material-ui/components/card';
  import {Label} from 'svelte-material-ui/components/button';
  import {Icon} from 'svelte-material-ui/components/icon-button';

  let clicked = 0;
</script>

<style lang="scss">
  .float-children > :global(*) {
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  .float-children::after {
    content: "";
    clear: both;
    display: table;
  }

  * :global(.card-media-16x9) {
    background-image: url(https://via.placeholder.com/320x180.png?text=16x9);
  }

  * :global(.card-media-square) {
    background-image: url(https://via.placeholder.com/320x320.png?text=square);
  }
</style>
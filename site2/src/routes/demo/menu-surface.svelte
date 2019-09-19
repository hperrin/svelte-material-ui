<svelte:head>
  <title>Menu Surface - SMUI</title>
</svelte:head>

<section>
  <h2>Menu Surface</h2>

  <div>
    <MenuSurface static style="max-width: 350px;">
      <p style="margin: 1em;">
        This is a menu surface. It's similar to a menu. It is more versatile,
        but requires more configuration. It can contain more than just a list,
        like rich popover content, forms, images, etc.
      </p>
    </MenuSurface>
  </div>

  <div>
    <MenuSurface static>
      <List>
        <Item on:SMUI:action={() => clicked = 'Cut'}><Text>Cut</Text></Item>
        <Item on:SMUI:action={() => clicked = 'Copy'}><Text>Copy</Text></Item>
        <Item on:SMUI:action={() => clicked = 'Paste'}><Text>Paste</Text></Item>
        <Separator />
        <Item on:SMUI:action={() => clicked = 'Delete'}><Text>Delete</Text></Item>
      </List>
    </MenuSurface>
  </div>

  <pre class="status">Clicked: {clicked}</pre>

  <div>
    Anchored automatically, corner set to bottom-left:

    <div style="min-width: 100px;">
      <Button on:click={() => formSurface.setOpen(true)}>Open Menu Surface</Button>
      <MenuSurface bind:this={formSurface} anchorCorner="BOTTOM_LEFT">
        <div style="margin: 1em; display: flex; flex-direction: column; align-items: flex-end;">
          <Textfield bind:value={name} label="Name" />
          <Textfield bind:value={email} label="Email" type="email" />
          <Button style="margin-top: 1em;" on:click={() => formSurface.setOpen(false)}>Submit</Button>
        </div>
      </MenuSurface>
    </div>
  </div>

  <div>
    Anchored manually:

    <div use:Anchor bind:this={imageListAnchor}>
      <Button on:click={() => imageListSurface.setOpen(true)}>Open Menu Surface</Button>
      <MenuSurface bind:this={imageListSurface} anchor={false} bind:anchorElement={imageListAnchor}>
        <ImageList class="menu-surface-image-list">
          {#each Array(4) as _unused, i}
            <ImageListItem>
              <ImageAspectContainer>
                <Image src="https://via.placeholder.com/100x100.png?text=Image%20{i + 1}" alt="Image {i + 1}" />
              </ImageAspectContainer>
            </ImageListItem>
          {/each}
        </ImageList>
      </MenuSurface>
    </div>
  </div>

  <div style="padding-top: 200px;">
    Long div for scrolling...
  </div>
</section>

<script>
  import MenuSurface, {Anchor} from '@smui/menu-surface';
  import List, {Item, Separator, Text} from '@smui/list';
  import Textfield from '@smui/textfield';
  import ImageList, {Item as ImageListItem, ImageAspectContainer, Image} from '@smui/image-list';
  import Button from '@smui/button';
  import './menu-surface.scss';

  let formSurface;
  let name = '';
  let email = '';
  let imageListSurface;
  let imageListAnchor;
  let clicked = 'nothing yet';
</script>
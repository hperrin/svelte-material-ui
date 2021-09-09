<div style="min-width: 100px;">
  <Button on:click={() => surface.setOpen(true)}>Open Menu Surface</Button>
  <MenuSurface bind:this={surface} anchorCorner="BOTTOM_LEFT">
    <div
      style="margin: 1em; display: flex; flex-direction: column; align-items: flex-end;"
    >
      <Textfield bind:value={name} label="Name" />
      <Textfield bind:value={email} label="Email" type="email" />
      <Button style="margin-top: 1em;" on:click={() => surface.setOpen(false)}>
        Submit
      </Button>
    </div>
  </MenuSurface>
</div>

<script lang="ts">
  import MenuSurface from '@smui/menu-surface';
  import Textfield from '@smui/textfield';
  import Button from '@smui/button';

  let surface: MenuSurface;
  let name = '';
  let email = '';
</script>

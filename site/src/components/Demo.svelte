<Card>
  <Content>
    <h6 class="mdc-typography--headline6" style="margin: 0;">
      <slot />
    </h6>
    {#if $$slots.subtitle}
      <p
        class="mdc-typography--subtitle2"
        style="margin: 0 0 10px; color: #888;"
      >
        <slot name="subtitle" />
      </p>
    {/if}
    {#if typeof component === 'string'}
      <i>{component}</i>
    {:else}
      <div>
        <svelte:component this={component} />
      </div>
    {/if}
  </Content>

  {#if show}
    <Content>
      {#if loading}
        <script
          src="https://emgithub.com/embed.js?target={encodeURIComponent(
            `https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${file}`
          )}&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on"></script>
      {/if}
      <!-- <Card variant="outlined" class="demo-source-file"> -->
      <div class="demo-source-file" bind:this={sourceContainer}>
        {@html sourceHTML}
      </div>
      <!-- </Card> -->
    </Content>
  {/if}
  <Actions>
    <ActionIcons>
      <IconButton
        href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${file}`}
        target="_blank"
      >
        <Icon component={Svg} style="width:24px;height:24px" viewBox="0 0 24 24"
          ><path fill="currentColor" d={mdiGithub} /></Icon
        >
      </IconButton>
      <IconButton pressed={show} on:click={toggleSource}>
        <Icon
          component={Svg}
          style="width:24px;height:24px"
          viewBox="0 0 24 24"
          on><path fill="currentColor" d={mdiCodeTagsCheck} /></Icon
        >
        <Icon component={Svg} style="width:24px;height:24px" viewBox="0 0 24 24"
          ><path fill="currentColor" d={mdiCodeTags} /></Icon
        >
      </IconButton>
    </ActionIcons>
  </Actions>
</Card>

<script>
  import { mdiGithub, mdiCodeTags, mdiCodeTagsCheck } from '@mdi/js';

  import Card, { Content, Actions, ActionIcons } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import Svg from '@smui/common/Svg.svelte';

  export let file;
  export let component;

  let sourceContainer;
  let show = false;
  let loading = false;
  let sourceHTML = null;

  function toggleSource() {
    if (!sourceHTML) {
      loading = true;

      document.write = (value) => {
        sourceHTML = value;
        loading = false;
      };
    }

    if (show) {
      sourceHTML = sourceContainer.innerHTML;
    }

    show = !show;
  }
</script>

<style>
  /* * :global(.demo-source-file) {
    max-height: 350px;
    overflow: auto;
    margin: 1em;
  } */

  .demo-source-file :global(.emgithub-container) {
    margin: 0 !important;
  }

  .demo-source-file :global(.emgithub-container > div > code) {
    max-height: 350px;
    overflow: auto;
  }

  /* *
    :global(.demo-source-file
      .emgithub-container
      > div
      > code, .demo-source-file .emgithub-container > .file-meta) {
    border: 0 !important;
  } */
</style>

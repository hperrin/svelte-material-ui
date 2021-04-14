<Card style="margin-bottom: 2.5em;">
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
      <em>{component}</em>
    {:else}
      <div>
        <svelte:component this={component} />
      </div>
    {/if}
  </Content>

  {#if show}
    {#if loading}
      <script
        src="https://emgithub.com/embed.js?target={encodeURIComponent(
          `https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${sourceFile}`
        )}&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on"></script>
    {/if}
    <Content>
      <div class="demo-source-file" bind:this={sourceContainer}>
        {@html sourceHTML}
      </div>
    </Content>

    {#if scssHTML}
      <Content>
        <div class="demo-source-file" bind:this={scssContainer}>
          {@html scssHTML}
        </div>
      </Content>
    {/if}
  {/if}
  <Actions>
    <ActionIcons>
      <IconButton
        href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${file}`}
        target="_blank"
        title="View this file on GitHub"
      >
        <Icon component={Svg} viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiGithub} />
        </Icon>
      </IconButton>
      <IconButton
        pressed={show}
        on:click={toggleSource}
        title={`${show ? 'Hide' : 'Show'} the source code`}
      >
        <Icon component={Svg} viewBox="0 0 24 24" on>
          <path fill="currentColor" d={mdiCodeTagsCheck} />
        </Icon>
        <Icon component={Svg} viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiCodeTags} />
        </Icon>
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
  export let scss = null;
  export let component;

  let sourceContainer;
  let scssContainer;
  let show = false;
  let loading = false;
  let sourceFile = null;
  let sourceHTML = null;
  let scssHTML = null;

  function toggleSource() {
    if (!sourceHTML) {
      loading = true;
      sourceFile = file;

      document.write = (value) => {
        loading = false;
        sourceHTML = value;

        if (scss) {
          requestAnimationFrame(() => {
            loading = true;
            sourceFile = scss;

            document.write = (value) => {
              loading = false;
              scssHTML = value;
            };
          });
        }
      };
    }

    if (show) {
      sourceHTML = sourceContainer.innerHTML;
      scssHTML = scssContainer.innerHTML;
    }

    show = !show;
  }
</script>

<style>
  .demo-source-file :global(.emgithub-container) {
    margin: 0 !important;
  }

  .demo-source-file :global(.emgithub-container > div > code) {
    max-height: 350px;
    overflow: auto;
  }
</style>

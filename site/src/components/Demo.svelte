<Card class="demo-spaced">
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
    {#if sourceFile}
      <script
        src="https://emgithub.com/embed.js?target={encodeURIComponent(
          `https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${sourceFile}`
        )}&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on"></script>
    {/if}
    {#if sourceHTML}
      <Content>
        <div class="demo-source-file" bind:this={sourceContainer}>
          {@html sourceHTML}
        </div>
      </Content>
    {/if}

    {#each sources as source}
      <Content>
        <div class="demo-source-file">
          {@html source}
        </div>
      </Content>
    {/each}
  {/if}
  <Actions>
    <ActionIcons>
      {#each files as file}
        <Wrapper>
          <IconButton
            href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${file}`}
            target="_blank"
          >
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiGithub} />
            </Icon>
          </IconButton>
          <Tooltip>View {file} on GitHub</Tooltip>
        </Wrapper>
      {/each}
      <Wrapper>
        <IconButton toggle bind:pressed={show}>
          <Icon component={Svg} viewBox="0 0 24 24" on>
            <path fill="currentColor" d={mdiCodeTagsCheck} />
          </Icon>
          <Icon component={Svg} viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiCodeTags} />
          </Icon>
        </IconButton>
        <Tooltip>{show ? 'Hide' : 'Show'} the source code</Tooltip>
      </Wrapper>
    </ActionIcons>
  </Actions>
</Card>

<script>
  import { mdiGithub, mdiCodeTags, mdiCodeTagsCheck } from '@mdi/js';

  import Card, { Content, Actions, ActionIcons } from '@smui/card';
  import IconButton, { Icon } from '@smui/icon-button';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Svg from '@smui/common/Svg.svelte';

  export let file = null;
  export let files = [file];
  export let component;

  let sourceContainer;
  let show = false;
  let sourceFile = null;
  let sourceHTML = null;
  let sources = [];
  const docWrite = (value) => {
    sourceFile = null;
    sourceHTML = value;

    requestAnimationFrame(() => {
      sources.push(sourceContainer.innerHTML);
      sourceFile = null;
      sourceHTML = null;
      sources = sources;
    });
  };

  $: if (show && sources.length < files.length && !sourceFile && !sourceHTML) {
    sourceFile = files[sources.length];
    document.write = docWrite;
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

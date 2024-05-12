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

  {#if loadSourceView}
    {#each Object.entries(sources) as [curFile, curSource]}
      <Content style="display: {hide ? 'none' : 'block'};">
        {#if curSource == null}
          <div style="display: flex; justify-content: center">
            <CircularProgress
              style="height: 48px; width: 48px;"
              indeterminate
            />
          </div>
        {:else}
          <div class="demo-file">
            <div class="demo-file-source">
              {#if curFile.endsWith('.scss')}
                <Highlight language={scss} code={curSource} />
              {:else if curFile.endsWith('.ts')}
                <Highlight language={typescript} code={curSource} />
              {:else}
                <HighlightSvelte code={curSource} />
              {/if}
            </div>
            <div class="demo-file-footer">
              <a
                href={`https://github.com/hperrin/svelte-material-ui/blob/master/packages/site/src/routes/demo/${curFile}`}
                target="_blank">{curFile}</a
              >
              <Wrapper>
                <IconButton
                  onclick={() => navigator.clipboard.writeText(curSource)}
                  size="button"
                >
                  <Icon tag="svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d={mdiContentCopy} />
                  </Icon>
                </IconButton>
                <Tooltip>Copy source code</Tooltip>
              </Wrapper>
            </div>
          </div>
        {/if}
      </Content>
    {/each}
  {/if}
  <Actions>
    <ActionIcons>
      {#each files as file}
        <Wrapper>
          <IconButton
            href={`https://github.com/hperrin/svelte-material-ui/blob/master/packages/site/src/routes/demo/${file}`}
            target="_blank"
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiGithub} />
            </Icon>
          </IconButton>
          <Tooltip>View {file} on GitHub</Tooltip>
        </Wrapper>
      {/each}
      <Wrapper>
        <IconButton toggle bind:pressed={hide} onclick={loadSources}>
          <Icon tag="svg" viewBox="0 0 24 24" on>
            <path fill="currentColor" d={mdiCodeTags} />
          </Icon>
          <Icon tag="svg" viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiCodeTagsCheck} />
          </Icon>
        </IconButton>
        <Tooltip>{hide ? 'Show' : 'Hide'} the source code</Tooltip>
      </Wrapper>
    </ActionIcons>
  </Actions>
</Card>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import {
    mdiGithub,
    mdiCodeTags,
    mdiCodeTagsCheck,
    mdiContentCopy,
  } from '@mdi/js';
  import Highlight, { HighlightSvelte } from 'svelte-highlight';
  import scss from 'svelte-highlight/languages/scss';
  import typescript from 'svelte-highlight/languages/typescript';
  import Card, { Content, Actions, ActionIcons } from '@smui/card';
  import CircularProgress from '@smui/circular-progress';
  import IconButton, { Icon } from '@smui/icon-button';
  import Tooltip, { Wrapper } from '@smui/tooltip';

  export let file: string | undefined = undefined;
  export let files: string[] = typeof file === 'string' ? [file] : [];
  export let component:
    | typeof SvelteComponent<
        Record<string, any>,
        Record<string, any>,
        Record<string, any>
      >
    | string;

  let loadSourceView = false;
  let hide = true;
  let sources: { [k: string]: string | null } = Object.fromEntries(
    files.map((file) => [file, null]),
  );

  async function loadSources() {
    loadSourceView = true;

    for (let curFile of files) {
      const url = `https://raw.githubusercontent.com/hperrin/svelte-material-ui/master/packages/site/src/routes/demo/${curFile}`;

      try {
        const result = await fetch(url);

        if (result.ok) {
          sources[curFile] = await result.text();
        } else {
          sources[curFile] = `Error: ${result.status} ${result.statusText}`;
        }
      } catch (e: any) {
        sources[curFile] = `Error: ${e.message}`;
      }
    }
  }
</script>

<style>
  .demo-file {
    background: #212121;
    color: #eeffff;
    border-radius: 0.4em;
    border: 1px solid #636363;
  }

  .demo-file-source {
    max-height: 350px;
    overflow: auto;
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
  }

  .demo-file-source > :global(pre) {
    margin: 0;
  }

  .demo-file-source :global(.hljs) {
    padding: 0.6em !important;
  }

  .demo-file-footer {
    background: #383838;
    padding: 0 0.6em;
    border-top: 1px solid #636363;
    border-bottom-left-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .demo-file-footer a {
    color: inherit;
  }
</style>

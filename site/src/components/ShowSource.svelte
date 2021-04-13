<Button on:click={toggleSource}>
  <Icon component={Svg} style="width:24px;height:24px" viewBox="0 0 24 24" on
    ><path
      fill="currentColor"
      d={show ? mdiCodeTagsCheck : mdiCodeTags}
    /></Icon
  >
  <Label>{show ? 'Hide' : 'Show'} Source</Label>
</Button>

{#if show}
  <div>
    {#if loading}
      <script
        src="https://emgithub.com/embed.js?target={encodeURIComponent(
          `https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/${file}`
        )}&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on"></script>
    {/if}
    <Card variant="outlined" class="demo-source-file">
      {@html sourceHTML}
    </Card>
  </div>
{/if}

<script>
  import { mdiCodeTags, mdiCodeTagsCheck } from '@mdi/js';

  import Button, { Icon, Label } from '@smui/button';
  import Card from '@smui/card';
  import Svg from '@smui/common/Svg.svelte';

  export let file;

  let show = false;
  let loading = false;
  let sourceHTML = null;

  function toggleSource() {
    if (!sourceHTML) {
      loading = true;

      document.write = (value) => {
        sourceHTML = value;
      };
    }

    show = !show;
  }
</script>

<style>
  * :global(.demo-source-file) {
    height: 350px;
    overflow: auto;
    margin: 1em;
    /* border-radius: 4px; */
    /* border: 1px solid var(--mdc-theme-on-surface, #000); */
  }

  * :global(.demo-source-file .emgithub-container) {
    margin: 0 !important;
  }

  *
    :global(.demo-source-file
      .emgithub-container
      > div
      > code, .demo-source-file .emgithub-container > .file-meta) {
    border: 0 !important;
  }
</style>

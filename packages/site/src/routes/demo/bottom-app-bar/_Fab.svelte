<div>
  <FormField>
    <Checkbox bind:checked={secondaryColor} />
    {#snippet label()}
      Secondary
    {/snippet}
  </FormField>
</div>

<div class="flexy">
  <div class="bottom-app-bar-container flexor">
    <div class="flexor-content">
      <h5>Centered FAB</h5>

      <LoremIpsum />
      <img
        alt="Page content placeholder"
        src="/page-content.jpg"
        style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
      />
    </div>

    <BottomAppBar
      variant="static"
      color={secondaryColor ? 'secondary' : 'primary'}
    >
      <Section>
        <IconButton><Icon class="material-icons">menu</Icon></IconButton>
      </Section>
      <Section>
        <Fab
          aria-label="New item"
          color={secondaryColor ? 'primary' : 'secondary'}
        >
          <Icon class="material-icons">add</Icon>
        </Fab>
      </Section>
      <Section>
        <IconButton aria-label="Search">
          <Icon class="material-icons">search</Icon>
        </IconButton>
        <IconButton aria-label="More">
          <Icon class="material-icons">more_vert</Icon>
        </IconButton>
      </Section>
    </BottomAppBar>
  </div>

  <div class="bottom-app-bar-container flexor">
    <div class="flexor-content">
      <h5>Right FAB</h5>

      <LoremIpsum />
      <img
        alt="Page content placeholder"
        src="/page-content.jpg"
        style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
      />
    </div>

    <BottomAppBar
      variant="static"
      color={secondaryColor ? 'secondary' : 'primary'}
    >
      <Section>
        <IconButton aria-label="Archive">
          <Icon class="material-icons">archive</Icon>
        </IconButton>
        <IconButton aria-label="Mark unread">
          <Icon class="material-icons">mail</Icon>
        </IconButton>
        <IconButton aria-label="Label">
          <Icon class="material-icons">label</Icon>
        </IconButton>
        <IconButton aria-label="Trash">
          <Icon class="material-icons">delete</Icon>
        </IconButton>
      </Section>
      <Section>
        <Fab
          aria-label="Reply"
          color={secondaryColor ? 'primary' : 'secondary'}
        >
          <Icon class="material-icons">reply</Icon>
        </Fab>
      </Section>
    </BottomAppBar>
  </div>
</div>

<script lang="ts">
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
  import IconButton from '@smui/icon-button';
  import Fab, { Icon } from '@smui/fab';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let secondaryColor = $state(false);
</script>

<style>
  .bottom-app-bar-container {
    max-width: 480px;
    width: 100%;
    height: 320px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }

  @media (max-width: 480px) {
    .bottom-app-bar-container {
      margin-right: 0;
    }
  }

  .flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
  }

  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }
</style>

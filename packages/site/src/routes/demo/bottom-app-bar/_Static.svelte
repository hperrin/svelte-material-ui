<div>
  <FormField>
    <Checkbox bind:checked={secondaryColor} />
    <span slot="label">Secondary</span>
  </FormField>
</div>

<div class="flexy">
  <div class="bottom-app-bar-container flexor">
    <div class="flexor-content">
      <h5>Flex Static</h5>

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
        <IconButton class="material-icons">menu</IconButton>
      </Section>
      <Section>
        <IconButton class="material-icons" aria-label="Search"
          >search</IconButton
        >
        <IconButton class="material-icons" aria-label="More"
          >more_vert</IconButton
        >
      </Section>
    </BottomAppBar>
  </div>

  <div class="bottom-app-bar-container">
    <div>
      <h5>Static</h5>

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
        <IconButton class="material-icons">menu</IconButton>
      </Section>
      <Section>
        <IconButton class="material-icons" aria-label="Search"
          >search</IconButton
        >
        <IconButton class="material-icons" aria-label="More"
          >more_vert</IconButton
        >
      </Section>
    </BottomAppBar>
  </div>
</div>

<script lang="ts">
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
  import IconButton from '@smui/icon-button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LoremIpsum from '$lib/LoremIpsum.svelte';

  let secondaryColor = false;
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

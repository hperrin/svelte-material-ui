<svelte:head>
  <title>Svelte Material UI</title>
</svelte:head>

<section>
  <div style="margin: 5em 0 6em;">
    <h2 style="margin-bottom: 0;">Svelte Material UI</h2>
    <p class="mdc-typography--subtitle1">
      Material UI components for Svelte apps
    </p>
  </div>

  <div style="margin: 4em 0;">
    <div class="boxes">
      <Paper color="primary" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Svelte</span>
          <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
            <path fill="currentColor" d={siSvelte.path} />
          </Icon>
        </Title>
        <Content>
          SMUI provides strictly typed Svelte components and actions for a wide
          variety of interface elements. SMUI also provides helper utilities for
          building custom and advanced UI components.
        </Content>
      </Paper>
      <Paper color="svelte-blue" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Material.io</span>
          <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
            <path fill="currentColor" d={siMaterialdesign.path} />
          </Icon>
        </Title>
        <Content>
          Many SMUI components are based on <a
            style="color: #fff;"
            href="https://github.com/material-components/material-components-web"
            target="_blank">Material Design Components for Web</a
          >, by Google. It integrates these components using the
          <a
            style="color: #fff;"
            href="https://material.io/develop/web/guides/framework-integration"
            target="_blank">"Advanced Approach"</a
          >, where the MDC Foundation does some business logic, and the SMUI
          component handles DOM updates and data binding.
        </Content>
      </Paper>
      <Paper color="secondary" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Sass</span>
          <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
            <path fill="currentColor" d={siSass.path} />
          </Icon>
        </Title>
        <Content>
          Like MDC-Web, SMUI is styled through Sass. SMUI supports all of the
          mixins provided by Material Design Components for Web, and provides
          some additional helpful mixins. You can customize the look of your UI
          with <a
            style="color: #fff;"
            href="https://github.com/hperrin/svelte-material-ui/blob/master/packages/site/src/theme/_smui-theme.scss"
            target="_blank">just a few variables</a
          >.
        </Content>
      </Paper>
    </div>

    <div class="features-list">
      <Paper variant="outlined" color="primary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiLanguageTypescript} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Fully, Strictly Typed</Title>
          <Content>
            SMUI is strictly typed with TypeScript. This not only helps catch
            bugs early, it helps while developing as every property is
            autocompleted by modern IDEs.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="secondary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiHuman} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Accessible by Default</Title>
          <Content>
            SMUI automatically adds appropriate ARIA attributes to components to
            provide accessibility to screen readers. SMUI is also fully keyboard
            accessible, meaning motor impaired users can easily use SMUI
            components.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="primary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiGestureTap} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Touch Friendly</Title>
          <Content>
            SMUI provides increased touch targets to allow ease of use on mobile
            devices, conforming to the Material Spec requirement of minimum 48px
            x 48px touch targets.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="secondary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiMonitorScreenshot} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Server Side Rendering</Title>
          <Content>
            SMUI can be fully rendered on the server, meaning faster time to
            first meaningful paint. SMUI fully supports SvelteKit. In fact, the
            site you're looking at is a SvelteKit app.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="primary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiPalette} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Fully Themable</Title>
          <Content>
            Components are themable using Sass variables, provided by MDC-Web.
            Everything from their shape, color, density, borders, interaction
            states, and more is themable.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="secondary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiCommentArrowLeft} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>RTL/Internationalization Support</Title>
          <Content>
            SMUI is RTL aware, and components will adapt their design to suit
            the language of the user.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="primary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiAccountGroup} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Widely Used, a Growing Community</Title>
          <Content>
            With over <a
              href="https://github.com/hperrin/svelte-material-ui/network/dependents?package_id=UGFja2FnZS01NTM5MDg5MDQ"
              target="_blank">3,000 projects</a
            > using SMUI components, it is the most popular Svelte UI library. For
            good reason, too. It is the most versatile and adaptable Svelte UI library,
            guaranteed.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="secondary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiRotateRightVariant} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Adaptable, Versatile</Title>
          <Content>
            SMUI supports adding arbitrary attributes and actions to every
            component and many internal elements within them. SMUI forwards all
            events from every component, and supports event modifiers, including
            passive. SMUI works in the Svelte REPL, meaning you can <a
              href="https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a"
              target="_blank">play with it right now</a
            >.
          </Content>
        </div>
      </Paper>

      <Paper variant="outlined" color="primary">
        <div style="width: 40px;">
          <Icon
            tag="svg"
            style="width: 40px; height: 40px;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiClipboardCheck} />
          </Icon>
        </div>
        <div style="flex-grow: 1;">
          <Title>Material Design Compliant</Title>
          <Content>
            Every SMUI component fully follows the Material Design
            specification. You can build up-to-spec UIs with SMUI.
          </Content>
        </div>
      </Paper>
    </div>
  </div>

  <div style="margin: 4em 0;">
    <p>
      [
      <a href="https://discord.gg/aFzmkrmg9P">Discord</a>
      |
      <a href="https://github.com/hperrin/svelte-material-ui">GitHub</a>
      |
      <a href="https://github.com/hperrin/svelte-material-ui/issues"
        >Issue Tracker</a
      >
      | &copy; 2019-2024 Hunter Perrin ]
    </p>
  </div>
</section>

<script lang="ts">
  import {
    mdiHuman,
    mdiGestureTap,
    mdiMonitorScreenshot,
    mdiPalette,
    mdiCommentArrowLeft,
    mdiAccountGroup,
    mdiRotateRightVariant,
    mdiClipboardCheck,
    mdiLanguageTypescript,
  } from '@mdi/js';
  import { siMaterialdesign, siSvelte, siSass } from 'simple-icons';
  import Paper, { Title, Content } from '@smui/paper';
  import { Icon } from '@smui/common';
</script>

<style>
  section {
    z-index: 0;
    padding: 48px 56px 36px;
    position: relative;
    overflow-x: hidden;
  }

  section::before {
    content: ' ';
    z-index: -1;
    background-image: url('/logo.png');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    display: block;
    position: absolute;
    right: calc(50% - 550px);
    top: -125px;
    opacity: 0.2;
    height: 496px;
    width: 496px;
  }

  .boxes {
    display: flex;
    margin: 0 -1em;
  }

  .boxes :global(.box) {
    margin: 1em;
    flex-grow: 1;
    flex-basis: 0;
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-top: 8em;
  }

  .features-list > :global(*) {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    align-items: center;
  }

  @media (max-width: 767px) {
    section {
      padding: 16px;
    }

    section::before {
      opacity: 0.2;
      right: calc(50% - 300px);
      top: -35px;
      height: 276px;
      width: 276px;
    }
  }

  @media (max-width: 1023px) {
    .boxes {
      flex-direction: column;
    }
  }
</style>

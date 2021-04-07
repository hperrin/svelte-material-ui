<svelte:head>
  <title>Svelte Material UI</title>
</svelte:head>

<section style="padding: 36px 56px; position: relative;">
  <img class="logo" src="logo.png" alt="logo" />

  <div style="margin: 3em 0;">
    <h2 class="mdc-typography--headline2" style="margin-bottom: 0;">
      Svelte Material UI
    </h2>
    <p class="mdc-typography--subtitle1">Material UI Components for Svelte 3</p>
  </div>

  <div style="margin: 3em 0;">
    <div class="boxes">
      <Paper color="primary" class="box">
        <Title>Svelte</Title>
        <Content>
          SMUI provides Svelte components and actions for a wide variety of
          interface elements. SMUI also provides helper utilities for building
          custom UI components.
        </Content>
      </Paper>
      <Paper color="svelte-blue" class="box">
        <Title>Material.io</Title>
        <Content>
          SMUI is based on the awesome <a
            style="color: #fff;"
            href="https://material.io/develop/web"
            target="_blank">Material Design Component for Web</a
          >, by Google. It integrates these components using the
          <a
            style="color: #fff;"
            href="https://material.io/develop/web/guides/framework-integration"
            target="_blank">"Advanced Approach"</a
          >, where the component Foundation does the business logic, and the
          SMUI component handles DOM updates.
        </Content>
      </Paper>
      <Paper color="secondary" class="box">
        <Title>Sass</Title>
        <Content>
          Like MDC, SMUI is styled through Sass. SMUI supports all of the mixins
          provided by Material Design Components for Web, and provides some
          additional helpful mixins. You can customize the look of your UI with
          just a few variables.
        </Content>
      </Paper>
    </div>

    <p>
      [
      <a href="https://github.com/hperrin/svelte-material-ui" target="_blank"
        >GitHub</a
      >
      |
      <a
        href="https://github.com/hperrin/svelte-material-ui/issues"
        target="_blank">Issue Tracker</a
      >
      | &copy; 2020-2021 Hunter Perrin ]
    </p>
  </div>
</section>

<script>
  import Paper, { Title, Subtitle, Content } from '@smui/paper';
</script>

<style>
  .logo {
    display: block;
    position: absolute;
    right: 250px;
    top: -15px;
    opacity: 0.4;
    transform: scale(1.8);
    z-index: -1;
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

  @media (max-width: 460px) {
    .logo {
      opacity: 0.2;
      right: -50px;
      top: -35px;
      transform: scale(1);
    }

    .boxes {
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Svelte Material UI</title>
</svelte:head>

<section>
  <div style="margin: 3em 0 4em;">
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
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 24 24"
          >
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
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={siMaterialdesign.path} />
          </Icon>
        </Title>
        <Content>
          Many SMUI components are based on <a
            style="color: #fff;"
            href="https://material.io/develop/web"
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
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 24 24"
          >
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

    <div style="margin: 6em 0 4em;">
      <h4>SMUI Features and Values</h4>
    </div>

    <div style="margin: 4em 0;">
      <List
        twoLine
        nonInteractive
        style="border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));"
      >
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiLanguageTypescript} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Fully, Strictly Typed</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI is strictly typed with TypeScript. This not only helps catch
              bugs early, it helps while developing as every property is
              autocompleted by modern IDEs.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiHuman} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Accessible by Default</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI automatically adds appropriate ARIA attributes to components
              to provide accessibility to screen readers. SMUI is also fully
              keyboard accessible, meaning motor impaired users can easily use
              SMUI components.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiGestureTap} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Touch Friendly</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI provides increased touch targets to allow ease of use on
              mobile devices, conforming to the Material Spec requirement of
              minimum 48px x 48px touch targets.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiMonitorScreenshot} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Server Side Rendering</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI can be fully rendered on the server, meaning faster time to
              first meaningful paint. SMUI fully supports SvelteKit. In fact,
              the site you're looking at is a SvelteKit app.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiPalette} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Fully Themable</PrimaryText>
            <SecondaryText style="white-space: normal;">
              Components are themable using Sass variables, provided by MDC-Web.
              Everything from their shape, color, density, borders, interaction
              states, and more is themable.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiCommentArrowLeft} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>RTL Support</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI is RTL aware, and components will adapt their design to suit
              the language of the user.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiAccountGroup} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Widely Used, a Growing Community</PrimaryText>
            <SecondaryText style="white-space: normal;">
              With over <a
                href="https://github.com/hperrin/svelte-material-ui/network/dependents?package_id=UGFja2FnZS01NTM5MDg5MDQ"
                target="_blank">1700 projects</a
              > using SMUI components, it is the most popular Svelte UI library.
              For good reason, too. It is the most versatile and adaptable Svelte
              UI library, guaranteed.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiRotateRightVariant} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Adaptable, Versatile</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI supports adding arbitrary attributes and actions to every
              component and many internal elements within them. SMUI forwards
              all events from every component, and supports event modifiers,
              including passive. SMUI works in the Svelte REPL, meaning you can <a
                href="https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a?version=3.44.1"
                target="_blank">play with it right now</a
              >.
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiClipboardCheck} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>Material Design Compliant</PrimaryText>
            <SecondaryText style="white-space: normal;">
              Every SMUI component fully follows the Material Design
              specification. You can build up-to-spec UIs with SMUI.
            </SecondaryText>
          </Text>
        </Item>
      </List>
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
      | &copy; 2022 Hunter Perrin ]
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
  import { siMaterialdesign, siSvelte, siSass } from 'simple-icons/icons';
  import Paper, { Title, Content } from '@smui/paper';
  import List, {
    Item,
    Graphic,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';
  import { Icon } from '@smui/common';
  import { Svg } from '@smui/common/elements';
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

  @media (max-width: 460px) {
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

    .boxes {
      flex-direction: column;
    }
  }
</style>

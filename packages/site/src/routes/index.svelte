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
            viewBox="0 0 98.1 118"
          >
            <defs>
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="#FFF" />
                <path
                  d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1 c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72 c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7 c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5 c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1 c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1 c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5 c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
                />
              </mask>
            </defs>
            <path
              mask="url(#mask)"
              fill="currentColor"
              d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3 c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1 c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
            />
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
            <path fill="currentColor" d={mdiMaterialDesign} />
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
            <path fill="currentColor" d={mdiSass} />
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
                target="_blank">1200 projects</a
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
    mdiMaterialDesign,
    mdiSass,
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

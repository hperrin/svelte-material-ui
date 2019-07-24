<div class="container">
  <h1>Material Components</h1>

  <DemoButton />

  <DemoFab />

  <DemoIconButton />

  <DemoChips />

  <DemoCard />

  <DemoDialog />

  <DemoList />

  <DemoRadio />

  <DemoCheckbox />

  <DemoMenuSurface />

  <DemoMenu />
</div>

<script>
  import DemoButton from './DemoButton';
  import DemoFab from './DemoFab';
  import DemoIconButton from './DemoIconButton';
  import DemoChips from './DemoChips';
  import DemoCard from './DemoCard';
  import DemoDialog from './DemoDialog';
  import DemoList from './DemoList';
  import DemoRadio from './DemoRadio';
  import DemoCheckbox from './DemoCheckbox';
  import DemoMenuSurface from './DemoMenuSurface';
  import DemoMenu from './DemoMenu';
</script>

<style lang="scss">
  @import "../components/typography";

  .container {
    background: #fff;
    margin: 2em auto;
    padding: 2em;
    max-width: 960px;
  }

  * :global(section > div) {
    margin: 1em 0 .6em;
  }

  * :global(.status) {
    font-family: monospace;
    font-size: .9em;
  }

  :global(h1) {
    @include mdc-typography('headline1');
  }

  :global(h2) {
    @include mdc-typography('headline2');
  }

  :global(h3) {
    @include mdc-typography('headline3');
  }

  :global(h4) {
    @include mdc-typography('headline4');
  }

  :global(h5) {
    @include mdc-typography('headline5');
  }

  :global(h6) {
    @include mdc-typography('headline6');
  }

  :global(html, body, p) {
    @include mdc-typography('body1');
  }

  :global(caption) {
    @include mdc-typography('caption');
  }
</style>
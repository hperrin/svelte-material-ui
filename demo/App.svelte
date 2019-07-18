<div class="container">
  <h1>Material Components</h1>

  <DemoButton />

  <DemoFab />

  <DemoIconButton />

  <DemoChips />

  <DemoCard />
</div>

<script>
  import DemoButton from './DemoButton';
  import DemoFab from './DemoFab';
  import DemoIconButton from './DemoIconButton';
  import DemoChips from './DemoChips';
  import DemoCard from './DemoCard';
</script>

<style lang="scss">
  @import "../components/typography";

  .container {
    background: #fff;
    margin: 2em auto;
    padding: 2em;
    max-width: 960px;
  }

  :global(.status) {
    font-family: monospace;
    font-size: .9em;
  }
</style>
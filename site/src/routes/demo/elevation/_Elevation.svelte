<!--
  You need to import `@material/elevation/mdc-elevation` in SCSS for
  these to work. See the Elevation.scss file.
-->

<div class="flexy-dad">
  {#each [...Array(24)].map((v, i) => i + 1) as n}
    <div class="mdc-elevation--z{n} flexy-boy">Elevation: {n}</div>
  {/each}
</div>

<script>
  import './_Elevation.scss';
</script>

<style>
  .flexy-dad {
    display: flex;
    flex-wrap: wrap;
  }

  .flexy-boy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 0 36px 36px 0;
  }
</style>

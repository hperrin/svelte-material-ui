<!--
  You need to import `@material/elevation/mdc-elevation` in SCSS for
  these to work. Check out "_Elevation.scss"
-->

<div class="flexy-dad">
  {#each [...Array(24)].map((_v, i) => i + 1) as n}
    <div class="mdc-elevation--z{n} flexy-boy">Elevation: {n}</div>
  {/each}
</div>

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

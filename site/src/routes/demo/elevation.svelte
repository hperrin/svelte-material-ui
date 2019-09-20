<svelte:head>
  <title>Elevation - SMUI</title>
</svelte:head>

<section>
  <h2>Elevation</h2>

  <!--
    You need to import `@material/elevation/mdc-elevation` in SCSS for
    these to work. See the Elevation.scss file.
  -->

  <div class="flexy-dad">
    {#each [...Array(24)].map((v, i) => i + 1) as n}
      <div class="mdc-elevation--z{n} flexy-boy">Elevation: {n}</div>
    {/each}
  </div>

  <div>
    Transitions and color: <br />

    <FormField>
      <Checkbox bind:checked={liftMeUp} />
      <span slot="label">You raise me up, so I can stand on mountains!</span>
    </FormField>

    <br /><br />

    <div class="flexy-dad">
      <div
        class="mdc-elevation-transition rounded flexy-boy"
        class:mdc-elevation--z4={liftMeUp}
      >
        Standard
      </div>
      <div
        class="my-primary mdc-elevation-transition rounded flexy-boy"
        class:elevated={liftMeUp}
      >
        Primary
      </div>
      <div
        class="my-secondary mdc-elevation-transition rounded flexy-boy"
        class:elevated={liftMeUp}
      >
        Secondary
      </div>
    </div>
  </div>
</section>

<script>
  import './elevation.scss';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let liftMeUp = false;
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

  .rounded {
    border-radius: 4px;
  }
</style>
<!--
  You need to use `@material/elevation` mixins in SCSS for
  these to work. Check out "_TransitionsAndColor.scss"
-->

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

<script lang="ts">
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

<svelte:head>
  <title>Introduction - SMUI</title>
</svelte:head>

<section>
  <h2>Introduction</h2>
  <p>
    Some helpful guides for common use patterns in SMUI that are different than
    standard Svelte.
  </p>

  <Demo
    component={TargetingClasses}
    file="introduction/_TargetingClasses.svelte"
  >
    Targeting Classes
    <svelte:fragment slot="subtitle">
      Because Svelte limits your CSS to <em>only</em> the current component, you
      need to use a ":global" selector to target SMUI elements.
    </svelte:fragment>
  </Demo>

  <Demo
    component={EventsAndModifiers}
    file="introduction/_EventsAndModifiers.svelte"
  >
    Events and Modifiers
    <svelte:fragment slot="subtitle">
      SMUI supports listening to <strong>all</strong> events. You can also use modifiers
      with the "$" syntax.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import TargetingClasses from '../introduction/_TargetingClasses.svelte';
  import EventsAndModifiers from '../introduction/_EventsAndModifiers.svelte';
</script>

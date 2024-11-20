<svelte:head>
  <title>Quick Guide - SMUI</title>
</svelte:head>

<section>
  <h2>Quick Guide</h2>
  <p>
    Some helpful guides for common use patterns in SMUI that are different than
    standard Svelte.
  </p>

  <Demo
    component={TargetingClasses}
    file="quick-guide/_TargetingClasses.svelte"
  >
    Targeting Classes
    {#snippet subtitle()}
      Because Svelte limits your CSS to <em>only</em> the current component, you
      need to use a ":global" selector to target SMUI elements.
    {/snippet}
  </Demo>

  <Demo
    component={EventsAndModifiers}
    file="quick-guide/_EventsAndModifiers.svelte"
  >
    Events and Modifiers
    {#snippet subtitle()}
      SMUI supports listening to <strong>all</strong> events. You can also add modifiers
      from the @smui/common/events endpoint.
    {/snippet}
  </Demo>

  <Demo
    component={InnerElementProps}
    file="quick-guide/_InnerElementProps.svelte"
  >
    Inner element props
    {#snippet subtitle()}
      Many SMUI components have inner elements that can take props with a
      prefix, like "input$" or "icon$".
    {/snippet}
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import TargetingClasses from './_TargetingClasses.svelte';
  import EventsAndModifiers from './_EventsAndModifiers.svelte';
  import InnerElementProps from './_InnerElementProps.svelte';
</script>

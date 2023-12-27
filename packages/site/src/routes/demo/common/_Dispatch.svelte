<!-- This event will continue to bubble up beyond this component. -->
<div class="event" on:MyEvent={(e) => (event = e)}>
  I'm the event listener.

  <div class="event">
    <div class="event">
      <div class="event" bind:this={target}>I'm the event target.</div>
    </div>
  </div>
</div>

<br />

<Button on:click={dispatchEvent}>Dispatch Event</Button>

<pre class="status">Caught Event Detail: {event &&
    JSON.stringify(event.detail)}</pre>

<script lang="ts">
  import { dispatch } from '@smui/common/internal';
  import Button from '@smui/button';

  let target: HTMLDivElement;
  let event: CustomEvent<{ time: string }>;

  function dispatchEvent() {
    dispatch(
      target,
      'MyEvent',
      {
        // This is the event.details object.
        time: new Date().toLocaleTimeString(),
      },
      {
        // This is the eventInit object.
        bubbles: true, // this is the default when no eventInit object is provided.
        cancelable: true, // you can make it cancelable like this.
      },
    );
  }
</script>

<style>
  .event {
    padding: 1em;
    border: 1px solid currentColor;
  }
</style>

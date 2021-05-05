<div>
  <Button
    on:click={addEvent}
    on:mousedown={addEvent}
    on:mouseup={addEvent}
    on:mouseover={addEvent}
    on:mouseout={addEvent}
    on:keypress={addEvent}
    on:keydown={addEvent}
    on:keyup={addEvent}
    on:focus={addEvent}
    on:blur={addEvent}
    on:animationstart={addEvent}
    on:animationend={addEvent}
  >
    <Label>This Button has Event Listeners</Label>
  </Button>
</div>

<div class="event-output" bind:this={eventOutput}>
  {#each events as event}
    <p>Caught {event.type}</p>
  {:else}
    <p>No events yet.</p>
  {/each}
</div>

<div>
  <Button on:click$capture={addEventCapture} on:click={addEventBubble}>
    <Label>Capture and Bubble Phase Listeners</Label>
  </Button>
</div>

<div class="event-output" bind:this={eventPhaseOutput}>
  {#each eventPhases as event}
    <p>Caught {event[0].type} in {event[1]} phase</p>
  {:else}
    <p>No events yet.</p>
  {/each}
</div>

<div>
  <Button
    href="http://example.com"
    on:click$preventDefault={() =>
      console.log("You tried to go, but didn't make it.")}
  >
    <Label>A Link Button, with Default Prevented</Label>
  </Button>
</div>

<script>
  import Button, { Label } from '@smui/button';

  let eventOutput;
  let eventPhaseOutput;
  let events = [];
  let eventPhases = [];

  function addEvent(event) {
    events.push(event);
    events = events;
    requestAnimationFrame(() => {
      eventOutput.scrollTop = eventOutput.scrollHeight;
    });
  }

  function addEventCapture(event) {
    eventPhases.push([event, 'capture']);
    eventPhases = eventPhases;
    requestAnimationFrame(() => {
      eventPhaseOutput.scrollTop = eventPhaseOutput.scrollHeight;
    });
  }

  function addEventBubble(event) {
    eventPhases.push([event, 'bubble']);
    eventPhases = eventPhases;
    requestAnimationFrame(() => {
      eventPhaseOutput.scrollTop = eventPhaseOutput.scrollHeight;
    });
  }
</script>

<style>
  .event-output {
    font-family: 'Roboto Mono', monospace !important;
    height: 200px;
    overflow: auto;
  }
</style>

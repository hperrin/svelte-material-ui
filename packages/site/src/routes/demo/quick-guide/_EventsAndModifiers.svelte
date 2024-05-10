<div>
  <Button
    onclick={addEvent}
    onmousedown={addEvent}
    onmouseup={addEvent}
    onmouseover={addEvent}
    onmousemove={addEvent}
    onmouseout={addEvent}
    onkeypress={addEvent}
    onkeydown={addEvent}
    onkeyup={addEvent}
    onfocus={addEvent}
    onblur={addEvent}
    onanimationstart={addEvent}
    onanimationend={addEvent}
    ontouchstart={addEvent}
    ontouchend={addEvent}
    ontouchmove={addEvent}
    ontouchcancel={addEvent}
  >
    <Label>This Button has Event Listeners</Label>
  </Button>
</div>

<div class="event-output" bind:this={eventOutput}>
  {#each events as event}
    <p>Caught {event}</p>
  {:else}
    <p>No events yet.</p>
  {/each}
</div>

<div>
  Try clicking and using the Enter key to activate this next button. (The click
  event's target is an element below the button while the key event's target is
  the button.)
</div>

<div>
  <Button onclickcapture={addEventPhase} onclick={addEventPhase}>
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

<br /> <br />

<div>
  Standard events can be modified, like blocking navigation on the click event
  of a link.
</div>

<div>
  <Button
    href="http://example.com"
    onclick={preventDefault(() =>
      console.log("You tried to go, but didn't make it."),
    )}
  >
    <Label>A Link, with Default Prevented</Label>
  </Button>
</div>

<br /> <br />

<div>
  TypeScript event types can be tricky with SMUI components. This example shows
  you how to get them right.
</div>

<div>
  <Button onmousedown={handleTypedEvent}>Correct Event Type</Button>
</div>

<pre class="status">Mouse Button: {button}</pre>

<script lang="ts">
  import { preventDefault } from '@smui/common/events';
  import Button, { Label } from '@smui/button';

  let eventOutput: HTMLDivElement;
  let eventPhaseOutput: HTMLDivElement;
  let events: string[] = [];
  let eventPhases: [Event, string][] = [];

  function addEvent(event: Event) {
    if (
      events.length &&
      (events[events.length - 1] === event.type ||
        events[events.length - 1].startsWith(event.type))
    ) {
      const current = parseInt(events[events.length - 1].replace(/\D/g, ''));
      events[events.length - 1] = `${event.type} ×${
        isNaN(current) ? 2 : current + 1
      }`;
    } else {
      events.push(event.type);
    }
    events = events;
    requestAnimationFrame(() => {
      eventOutput.scrollTop = eventOutput.scrollHeight;
    });
  }

  function addEventPhase(event: Event) {
    const phases = ['none', 'capturing', 'at-target', 'bubbling'];
    eventPhases.push([event, phases[event.eventPhase]]);
    eventPhases = eventPhases;
    requestAnimationFrame(() => {
      eventPhaseOutput.scrollTop = eventPhaseOutput.scrollHeight;
    });
  }

  let button = 'None yet.';

  // In order to get the correct type, you need to reassign the
  // event with a type assertion.
  function handleTypedEvent(event: CustomEvent | MouseEvent) {
    event = event as MouseEvent;
    event.preventDefault();
    button =
      ['Left.', 'Middle.', 'Right.'][event.button] ??
      `Button #${event.button}.`;
  }
</script>

<style>
  .event-output {
    font-family: 'Roboto Mono', monospace !important;
    height: 200px;
    overflow: auto;
  }
</style>

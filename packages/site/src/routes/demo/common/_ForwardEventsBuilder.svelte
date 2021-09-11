<MyComponent
  on:click={() => clicked++}
  on:keypress$preventDefault={handleKeyPress}
  on:focus={() => (focused = true)}
  on:blur={() => (focused = false)}
>
  Click me, key press me, focus me, blur me, use me however you want.
</MyComponent>

<pre
  class="status">Clicked: {clicked}, Key Pressed: {key === ' ' ? 'Space' : key}, Focused: {focused}</pre>

<script lang="ts">
  import MyComponent from './_ForwardEventsBuilderComponent.svelte';

  let clicked = 0;
  let key = 'None';
  let focused = false;

  function handleKeyPress(event: CustomEvent & KeyboardEvent) {
    key = event.key;
  }
</script>

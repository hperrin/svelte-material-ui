<MyComponent
  onclick={() => clicked++}
  onkeypress={handleKeyPress}
  onfocus={() => (focused = true)}
  onblur={() => (focused = false)}
>
  Click me, key press me, focus me, blur me, use me however you want.
</MyComponent>

<pre class="status">Clicked: {clicked}, Key Pressed: {key === ' '
    ? 'Space'
    : key}, Focused: {focused}</pre>

<script lang="ts">
  import MyComponent from './_ForwardEventsBuilderComponent.svelte';

  let clicked = 0;
  let key = 'None';
  let focused = false;

  const handleKeyPress = ((event: KeyboardEvent) => {
    event.preventDefault();
    key = event.key;
  }) as unknown as (event: CustomEvent) => void;
</script>

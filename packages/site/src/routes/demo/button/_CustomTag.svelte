<div>
  <Button
    tag="em"
    onclick={() => clicked++}
    onkeypress={handleClick}
    tabindex={0}
    role="button"
  >
    <Label>Em Tag</Label>
  </Button>

  <ul>
    <Button
      tag="li"
      onclick={() => clicked++}
      onkeypress={handleClick}
      tabindex={0}
      role="button"
    >
      <Label>Li Tag</Label>
    </Button>
    <Button
      tag="li"
      onclick={() => clicked++}
      onkeypress={handleClick}
      tabindex={0}
      role="button"
    >
      <Label>Li Tag</Label>
    </Button>
  </ul>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { Label } from '@smui/button';

  let clicked = 0;

  function handleClick(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      clicked++;
    }
  }
</script>

<style>
  ul > :global(li) {
    display: list-item;
    list-style-position: outside;
    list-style-type: disc;
  }
</style>

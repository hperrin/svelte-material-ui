<div>
  <Button
    tag="em"
    on:click={() => clicked++}
    on:keypress={handleClick}
    tabindex={0}
    aria-role="button"
  >
    <Label>Em Tag</Label>
  </Button>

  <Button tag="input" autoplay bind:this={btn} />

  <SmuiElement tag="img" colspan={5} />

  <ul>
    <Button
      tag="li"
      on:click={() => clicked++}
      on:keypress={handleClick}
      tabindex={0}
      aria-role="button"
    >
      <Label>Li Tag</Label>
    </Button>
    <Button
      tag="li"
      on:click={() => clicked++}
      on:keypress={handleClick}
      tabindex={0}
      aria-role="button"
    >
      <Label>Li Tag</Label>
    </Button>
  </ul>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Button, { ButtonComponentDev, Label } from '@smui/button';
  import type { ComponentType } from 'svelte';
  import type { SmuiComponent } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  let clicked = 0;

  let btn: ButtonComponentDev<'input'>;
  let btn2: Button<'img', SmuiElement<'img'>>;
  let sel2: SmuiElement<'img'>;

  function handleClick(event: CustomEvent | KeyboardEvent) {
    const el = btn.getElement();
    const el2 = sel2.getElement();
    event = event as KeyboardEvent;
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

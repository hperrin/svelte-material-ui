<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <Wrapper>
    <Button on:click={() => clicked++} touch>
      <Label>Button</Label>
    </Button>
  </Wrapper>
  <Wrapper>
    <Fab on:click={() => clicked++} mini touch>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </Wrapper>
  <Wrapper>
    <Set chips={['Chip']} let:chip style="display: inline-flex;">
      <Chip {chip} on:click={() => clicked++} touch>
        <Text tabindex="0">{chip}</Text>
      </Chip>
    </Set>
  </Wrapper>
  <Wrapper>
    <Checkbox bind:checked touch />
  </Wrapper>
  <Wrapper>
    <Radio bind:group={selected} value={'on'} touch />
  </Wrapper>
  <Wrapper>
    <Radio bind:group={selected} value={'off'} touch />
  </Wrapper>
</div>

<pre
  class="status">Clicked: {clicked}, Checked: {checked}, Selected: {selected}</pre>

<script>
  import Wrapper from '@smui/touch-target';
  import Button from '@smui/button';
  import Fab from '@smui/fab';
  import Chip, { Set, Text } from '@smui/chips';
  import Checkbox from '@smui/checkbox';
  import Radio from '@smui/radio';
  import { Label, Icon } from '@smui/common';

  let clicked = 0;
  let checked = false;
  let selected = 'on';
</script>

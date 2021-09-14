<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <!--
    Note: the wrapper on a rich tooltip
    creates a DOM element.
  -->
  <Wrapper rich>
    <Button on:click={() => clicked++} touch>
      <Label>Rich Tooltip</Label>
    </Button>
    <!--
      Note: the toolip element in a rich
      tooltip stays in place.
    -->
    <Tooltip>
      <Content>
        A rich tooltip can provide a lot more information than a regular toolip.
        It is sized appropriately for a large amount of content.
      </Content>
    </Tooltip>
  </Wrapper>

  <Wrapper rich>
    <Button on:click={() => clicked++} touch>
      <Label>Interactive Rich Tooltip</Label>
    </Button>
    <Tooltip interactive>
      <Title>With a Title!</Title>
      <Content>
        An interactive rich tooltip can have <Link
          href="http://example.com"
          target="_blank">links</Link
        > and actions.
      </Content>
      <RichActions>
        <Button on:click={() => clicked++}><Label>Action</Label></Button>
      </RichActions>
    </Tooltip>
  </Wrapper>

  <Wrapper rich>
    <span role="button" tabindex="0">Persistent Rich Tooltip (Click Me)</span>
    <Tooltip persistent>
      <Title>With a Title!</Title>
      <Content>
        A persistent rich tooltip shows up when you click or press enter/space
        bar on an element and goes away when you activate it again or it loses
        focus. Great for informational popups on those little "i" icons.
      </Content>
    </Tooltip>
  </Wrapper>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Tooltip, {
    Wrapper,
    Title,
    Content,
    Link,
    RichActions,
  } from '@smui/tooltip';
  import Button, { Label } from '@smui/button';

  let clicked = 0;
</script>

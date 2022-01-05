<div>
  Note that this demo will not work for you if you are not using a screen
  reader.
  <Textfield
    label="Text"
    bind:value={text}
    textarea
    style="width: 100%; margin: 1em 0 .5em;"
  />
  <div style="text-align: end;">
    <Button on:click={loremIpsum}>
      <Label>Fill Lorem Ipsum</Label>
    </Button>
    <Button
      on:click={() => announce(text, { priority: 'assertive' })}
      variant="raised"
    >
      <Label>Speak</Label>
    </Button>
  </div>
</div>

<script lang="ts">
  import Button, { Label } from '@smui/button';
  import Textfield from '@smui/textfield';
  import { announce } from '@smui/common/internal';

  let text = '';

  function loremIpsum() {
    text =
      'But I must explain to you how all this mistaken idea of denouncing of ' +
      'a pleasure and praising pain was born and I will give you a complete ' +
      'account of the system, and expound the actual teachings of the great ' +
      'explorer of the truth, the master-builder of human happiness. No one ' +
      'rejects, dislikes, or avoids pleasure itself, because it is pleasure, ' +
      'but because those who do not know how to pursue pleasure rationally ' +
      'encounter consequences that are extremely painful. Nor again is there ' +
      'anyone who loves or pursues or desires to obtain pain of itself, ' +
      'because it is pain, but occasionally circumstances occur in which ' +
      'toil and pain can procure him some great pleasure. To take a trivial ' +
      'example, which of us ever undertakes laborious physical exercise, ' +
      'except to obtain some advantage from it? But who has any right to ' +
      'find fault with a man who chooses to enjoy a pleasure that has no ' +
      'annoying consequences, or one who avoids a pain that produces no ' +
      'resultant pleasure?';
  }
</script>

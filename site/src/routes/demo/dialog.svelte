<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs</h2>

  <div>
    <Dialog
      bind:open={simpleDialogOpen}
      aria-labelledby="simple-title"
      aria-describedby="simple-content"
    >
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <Title id="simple-title">Dialog Title</Title>
      <Content id="simple-content">Super awesome dialog body text?</Content>
      <Actions>
        <Button on:click={() => (clicked = 'No')}>
          <Label>No</Label>
        </Button>
        <Button on:click={() => (clicked = 'Yes')}>
          <Label>Yes</Label>
        </Button>
      </Actions>
    </Dialog>

    <Button on:click={() => (simpleDialogOpen = true)}
      ><Label>Open Dialog</Label></Button
    >
  </div>

  <pre class="status">Clicked: {clicked}</pre>

  <div>
    <h6 class="demo-title">
      Using dialog events instead of button clicks, with a default button that
      is initially focused
    </h6>

    <Dialog
      bind:open={eventDialogOpen}
      aria-labelledby="event-title"
      aria-describedby="event-content"
      on:MDCDialog:closed={closeHandler}
    >
      <Title id="event-title">The Best Dog</Title>
      <Content id="event-content">
        Out of all the dogs, which is the best dog?
      </Content>
      <Actions>
        <Button action="none">
          <Label>None of Them</Label>
        </Button>
        <Button action="all" default use={[InitialFocus]}>
          <Label>All of Them</Label>
        </Button>
      </Actions>
    </Dialog>

    <Button on:click={() => (eventDialogOpen = true)}
      ><Label>Open Dialog</Label></Button
    >
  </div>

  <pre class="status">Response: {response}</pre>

  <div>
    <h6 class="demo-title">
      No actions, and a very long selection list dialog
    </h6>

    <Dialog
      bind:open={listDialogOpen}
      selection
      aria-labelledby="list-title"
      aria-describedby="list-content"
    >
      <Title id="list-title">Dialog Title</Title>
      <Content id="list-content">
        <List>
          {#each [...Array(100)].map((v, i) => i + 1) as item}
            <Item
              on:click={() => {
                clickedList = item;
                listDialogOpen = false;
              }}
            >
              <Text>Item #{item}</Text>
            </Item>
          {/each}
        </List>
      </Content>
    </Dialog>

    <Button on:click={() => (listDialogOpen = true)}
      ><Label>Open Dialog</Label></Button
    >
  </div>

  <pre
    class="status">Clicked: {clickedList}{clickedList === 69 ? ', nice' : ''}</pre>

  <div>
    <h6 class="demo-title">A selection dialog</h6>

    <Dialog
      bind:open={listSelectionDialogOpen}
      selection
      aria-labelledby="list-selection-title"
      aria-describedby="list-selection-content"
      on:MDCDialog:closed={selectionCloseHandler}
    >
      <Title id="list-selection-title">Dialog Title</Title>
      <Content id="list-selection-content">
        <List radioList>
          <Item use={[InitialFocus]}>
            <Graphic>
              <Radio bind:group={selection} value="Radishes" />
            </Graphic>
            <Text>Radishes</Text>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selection} value="Turnips" />
            </Graphic>
            <Text>Turnips</Text>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selection} value="Broccoli" />
            </Graphic>
            <Text>Broccoli</Text>
          </Item>
        </List>
      </Content>
      <Actions>
        <Button>
          <Label>Cancel</Label>
        </Button>
        <Button action="accept">
          <Label>Accept</Label>
        </Button>
      </Actions>
    </Dialog>

    <Button on:click={() => (listSelectionDialogOpen = true)}
      ><Label>Open Dialog</Label></Button
    >
  </div>

  <pre class="status">Selected: {selected}</pre>

  <div>
    <h6 class="demo-title">A dialog with sliders</h6>

    <Dialog
      bind:open={sliderDialogOpen}
      aria-labelledby="slider-title"
      aria-describedby="slider-content"
    >
      <Title id="slider-title">Volumes</Title>
      <Content id="slider-content">
        <div>
          <FormField style="display: flex; flex-direction: column-reverse;">
            <Slider
              bind:value={volumeMedia}
              use={[InitialFocus]}
              style="width: 100%;"
            />
            <span slot="label">Media Volume</span>
          </FormField>
        </div>
        <div>
          <FormField style="display: flex; flex-direction: column-reverse;">
            <Slider bind:value={volumeRingtone} style="width: 100%;" />
            <span slot="label">Ringtone Volume</span>
          </FormField>
        </div>
        <div>
          <FormField style="display: flex; flex-direction: column-reverse;">
            <Slider bind:value={volumeAlarm} style="width: 100%;" />
            <span slot="label">Alarm Volume</span>
          </FormField>
        </div>
      </Content>
      <Actions>
        <Button action="accept">
          <Label>Done</Label>
        </Button>
      </Actions>
    </Dialog>

    <Button on:click={() => (sliderDialogOpen = true)}
      ><Label>Open Dialog</Label></Button
    >
  </div>
</section>

<script>
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let simpleDialogOpen;
  let eventDialogOpen;
  let listDialogOpen;
  let listSelectionDialogOpen;
  let sliderDialogOpen;
  let clicked = 'Nothing yet.';
  let response = 'Nothing yet.';
  let clickedList = 'Nothing yet.';
  let selection = 'Radishes';
  let selected = 'Nothing yet.';
  let volumeMedia = 100;
  let volumeRingtone = 80;
  let volumeAlarm = 80;

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'none':
        response = "Ok, well, you're wrong.";
        break;
      case 'all':
        response = 'You are correct. All dogs are the best dog.';
        break;
      default:
        response = "It's a simple question. You should be able to answer it.";
        break;
    }
  }

  function selectionCloseHandler(e) {
    if (e.detail.action === 'accept') {
      selected = selection;
    }
    selection = 'Radishes';
  }
</script>

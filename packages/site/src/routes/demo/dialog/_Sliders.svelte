<Dialog
  bind:open
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

<Button on:click={() => (open = true)}>
  <Label>Open Dialog</Label>
</Button>

<script lang="ts">
  import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  let open = false;
  let volumeMedia = 100;
  let volumeRingtone = 80;
  let volumeAlarm = 80;
</script>

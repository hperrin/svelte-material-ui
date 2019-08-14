<section>
  <h2>Text Field</h2>

  <div>
    <div class="margins">
      <!--
        Notice that when you bind to `invalid`, but you only want to monitor it
        instead of updating it yourself, you also should include
        `updateInvalid`.
      -->
      <Textfield type="email" withTrailingIcon={valueClickable !== ''} bind:dirty={dirtyClickable} bind:invalid={invalidClickable} updateInvalid bind:value={valueClickable} label="To" style="min-width: 250px;" input$autocomplete="email">
        {#if valueClickable !== '' && dirtyClickable && !invalidClickable}
          <Icon class="material-icons" role="button" on:click={clickableHandler}>send</Icon>
        {/if}
      </Textfield>
      <HelperText validationMsg>That's not a valid email address.</HelperText>
    </div>

    <div class="status">Dirty: {dirtyClickable}, Invalid: {invalidClickable}</div>
  </div>

  <div>
    Standard:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueStandardA} label="Label" input$aria-controls="helper-text-standard-a" input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">Helper Text</HelperText>

        <div class="status">Value: {valueStandardA}</div>
      </div>
      <div>
        <Textfield withLeadingIcon bind:value={valueStandardB} label="Label" input$aria-controls="helper-text-standard-b" input$aria-describedby="helper-text-standard-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-b">Helper Text</HelperText>

        <div class="status">Value: {valueStandardB}</div>
      </div>
      <div>
        <Textfield withTrailingIcon bind:value={valueStandardC} label="Label" input$aria-controls="helper-text-standard-c" input$aria-describedby="helper-text-standard-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-c">Helper Text</HelperText>

        <div class="status">Value: {valueStandardC}</div>
      </div>
      <div>
        <Textfield invalid={true} bind:value={valueStandardD} label="Label" input$aria-controls="helper-text-standard-d" input$aria-describedby="helper-text-standard-d" />
        <HelperText id="helper-text-standard-d">Helper Text</HelperText>

        <div class="status">Value: {valueStandardD}</div>
      </div>
    </div>
  </div>

  <div>
    Filled:

    <div class="columns margins">
      <div>
        <Textfield variant="filled" bind:value={valueFilledA} label="Label" input$aria-controls="helper-text-filled-a" input$aria-describedby="helper-text-filled-a" />
        <HelperText id="helper-text-filled-a">Helper Text</HelperText>

        <div class="status">Value: {valueFilledA}</div>
      </div>
      <div>
        <Textfield withLeadingIcon variant="filled" bind:value={valueFilledB} label="Label" input$aria-controls="helper-text-filled-b" input$aria-describedby="helper-text-filled-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-b">Helper Text</HelperText>

        <div class="status">Value: {valueFilledB}</div>
      </div>
      <div>
        <Textfield withTrailingIcon variant="filled" bind:value={valueFilledC} label="Label" input$aria-controls="helper-text-filled-c" input$aria-describedby="helper-text-filled-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-c">Helper Text</HelperText>

        <div class="status">Value: {valueFilledC}</div>
      </div>
      <div>
        <Textfield invalid variant="filled" bind:value={valueFilledD} label="Label" input$aria-controls="helper-text-filled-d" input$aria-describedby="helper-text-filled-d" />
        <HelperText id="helper-text-filled-d">Helper Text</HelperText>

        <div class="status">Value: {valueFilledD}</div>
      </div>
    </div>
  </div>

  <div>
    Shaped Filled:

    <div class="columns margins">
      <div>
        <Textfield class="shaped" variant="filled" bind:value={valueShapedFilledA} label="Label" input$aria-controls="helper-text-shaped-filled-a" input$aria-describedby="helper-text-shaped-filled-a" />
        <HelperText id="helper-text-shaped-filled-a">Helper Text</HelperText>

        <div class="status">Value: {valueShapedFilledA}</div>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" withLeadingIcon bind:value={valueShapedFilledB} label="Label" input$aria-controls="helper-text-shaped-filled-b" input$aria-describedby="helper-text-shaped-filled-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-filled-b">Helper Text</HelperText>

        <div class="status">Value: {valueShapedFilledB}</div>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" withTrailingIcon bind:value={valueShapedFilledC} label="Label" input$aria-controls="helper-text-shaped-filled-c" input$aria-describedby="helper-text-shaped-filled-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-filled-c">Helper Text</HelperText>

        <div class="status">Value: {valueShapedFilledC}</div>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" invalid bind:value={valueShapedFilledD} label="Label" input$aria-controls="helper-text-shaped-filled-d" input$aria-describedby="helper-text-shaped-filled-d" />
        <HelperText id="helper-text-shaped-filled-d">Helper Text</HelperText>

        <div class="status">Value: {valueShapedFilledD}</div>
      </div>
    </div>
  </div>

  <div>
    Outlined:

    <div class="columns margins">
      <div>
        <Textfield variant="outlined" bind:value={valueOutlinedA} label="Label" input$aria-controls="helper-text-outlined-a" input$aria-describedby="helper-text-outlined-a" />
        <HelperText id="helper-text-outlined-a">Helper Text</HelperText>

        <div class="status">Value: {valueOutlinedA}</div>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon bind:value={valueOutlinedB} label="Label" input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>

        <div class="status">Value: {valueOutlinedB}</div>
      </div>
      <div>
        <Textfield variant="outlined" withTrailingIcon bind:value={valueOutlinedC} label="Label" input$aria-controls="helper-text-outlined-c" input$aria-describedby="helper-text-outlined-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-c">Helper Text</HelperText>

        <div class="status">Value: {valueOutlinedC}</div>
      </div>
      <div>
        <Textfield variant="outlined" invalid bind:value={valueOutlinedD} label="Label" input$aria-controls="helper-text-outlined-d" input$aria-describedby="helper-text-outlined-d" />
        <HelperText id="helper-text-outlined-d">Helper Text</HelperText>

        <div class="status">Value: {valueOutlinedD}</div>
      </div>
    </div>
  </div>

  <div>
    Shaped Outlined:

    <div class="columns margins">
      <div>
        <Textfield class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedA} label="Label" input$aria-controls="helper-text-shaped-outlined-a" input$aria-describedby="helper-text-shaped-outlined-a" />
        <HelperText id="helper-text-shaped-outlined-a">Helper Text</HelperText>

        <div class="status">Value: {valueShapedOutlinedA}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedB} label="Label" input$aria-controls="helper-text-shaped-outlined-b" input$aria-describedby="helper-text-shaped-outlined-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-outlined-b">Helper Text</HelperText>

        <div class="status">Value: {valueShapedOutlinedB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" withTrailingIcon bind:value={valueShapedOutlinedC} label="Label" input$aria-controls="helper-text-shaped-outlined-c" input$aria-describedby="helper-text-shaped-outlined-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-outlined-c">Helper Text</HelperText>

        <div class="status">Value: {valueShapedOutlinedC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedD} label="Label" input$aria-controls="helper-text-shaped-outlined-d" input$aria-describedby="helper-text-shaped-outlined-d" />
        <HelperText id="helper-text-shaped-outlined-d">Helper Text</HelperText>

        <div class="status">Value: {valueShapedOutlinedD}</div>
      </div>
    </div>
  </div>

  <div>
    Disabled:

    <div class="columns margins">
      <div>
        <Textfield disabled value="" label="Label" input$aria-controls="helper-text-disabled-a" input$aria-describedby="helper-text-disabled-a" />
        <HelperText id="helper-text-disabled-a">Helper Text</HelperText>
      </div>
      <div>
        <Textfield variant="filled" disabled value="" label="Label" input$aria-controls="helper-text-disabled-b" input$aria-describedby="helper-text-disabled-b" />
        <HelperText id="helper-text-disabled-b">Helper Text</HelperText>
      </div>
      <div>
        <Textfield variant="outlined" disabled value="" label="Label" input$aria-controls="helper-text-disabled-c" input$aria-describedby="helper-text-disabled-c" />
        <HelperText id="helper-text-disabled-c">Helper Text</HelperText>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" disabled value="" label="Label" input$aria-controls="helper-text-disabled-d" input$aria-describedby="helper-text-disabled-d" />
        <HelperText id="helper-text-disabled-d">Helper Text</HelperText>
      </div>
    </div>
  </div>

  <div>
    Dense:

    <div class="columns margins">
      <div>
        <Textfield dense bind:value={valueDenseA} label="Label" input$aria-controls="helper-text-dense-a" input$aria-describedby="helper-text-dense-a" />
        <HelperText id="helper-text-dense-a">Helper Text</HelperText>

        <div class="status">Value: {valueDenseA}</div>
      </div>
      <div>
        <Textfield variant="filled" dense bind:value={valueDenseB} label="Label" input$aria-controls="helper-text-dense-b" input$aria-describedby="helper-text-dense-b" />
        <HelperText id="helper-text-dense-b">Helper Text</HelperText>

        <div class="status">Value: {valueDenseB}</div>
      </div>
      <div>
        <Textfield variant="outlined" dense bind:value={valueDenseC} label="Label" input$aria-controls="helper-text-dense-c" input$aria-describedby="helper-text-dense-c" />
        <HelperText id="helper-text-dense-c">Helper Text</HelperText>

        <div class="status">Value: {valueDenseC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" dense bind:value={valueDenseD} label="Label" input$aria-controls="helper-text-dense-d" input$aria-describedby="helper-text-dense-d" />
        <HelperText id="helper-text-dense-d">Helper Text</HelperText>

        <div class="status">Value: {valueDenseD}</div>
      </div>
    </div>
  </div>

  <div>
    Without label or helper text:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueNoLabelA} />

        <div class="status">Value: {valueNoLabelA}</div>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valueNoLabelB} />

        <div class="status">Value: {valueNoLabelB}</div>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valueNoLabelC} />

        <div class="status">Value: {valueNoLabelC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" bind:value={valueNoLabelD} />

        <div class="status">Value: {valueNoLabelD}</div>
      </div>
    </div>
  </div>

  <div>
    With persistent helper text:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valuePersistentA} label="Label" input$aria-controls="helper-text-persistent-a" input$aria-describedby="helper-text-persistent-a" />
        <HelperText id="helper-text-persistent-a" persistent>Helper Text</HelperText>

        <div class="status">Value: {valuePersistentA}</div>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valuePersistentB} label="Label" input$aria-controls="helper-text-persistent-b" input$aria-describedby="helper-text-persistent-b" />
        <HelperText id="helper-text-persistent-b" persistent>Helper Text</HelperText>

        <div class="status">Value: {valuePersistentB}</div>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valuePersistentC} label="Label" input$aria-controls="helper-text-persistent-c" input$aria-describedby="helper-text-persistent-c" />
        <HelperText id="helper-text-persistent-c" persistent>Helper Text</HelperText>

        <div class="status">Value: {valuePersistentC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" bind:value={valuePersistentD} label="Label" input$aria-controls="helper-text-persistent-d" input$aria-describedby="helper-text-persistent-d" />
        <HelperText id="helper-text-persistent-d" persistent>Helper Text</HelperText>

        <div class="status">Value: {valuePersistentD}</div>
      </div>
    </div>
  </div>

  <div>
    With character count:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueCharCountA} label="Label" input$maxlength="18" input$aria-controls="helper-text-char-count-a" input$aria-describedby="helper-text-char-count-a" />
        <HelperText id="helper-text-char-count-a">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <div class="status">Value: {valueCharCountA}</div>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valueCharCountB} label="Label" input$maxlength="18" input$aria-controls="helper-text-char-count-b" input$aria-describedby="helper-text-char-count-b" />
        <HelperText id="helper-text-char-count-b">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <div class="status">Value: {valueCharCountB}</div>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valueCharCountC} label="Label" input$maxlength="18" input$aria-controls="helper-text-char-count-c" input$aria-describedby="helper-text-char-count-c" />
        <HelperText id="helper-text-char-count-c">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <div class="status">Value: {valueCharCountC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" bind:value={valueCharCountD} label="Label" input$maxlength="18" input$aria-controls="helper-text-char-count-d" input$aria-describedby="helper-text-char-count-d" />
        <HelperText id="helper-text-char-count-d">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <div class="status">Value: {valueCharCountD}</div>
      </div>
    </div>
  </div>

  <div>
    Both icons:

    <div class="columns margins">
      <div>
        <Textfield withLeadingIcon withTrailingIcon bind:value={valueIconsA} label="Label">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <div class="status">Value: {valueIconsA}</div>
      </div>
      <div>
        <Textfield variant="filled" withLeadingIcon withTrailingIcon bind:value={valueIconsB} label="Label">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <div class="status">Value: {valueIconsB}</div>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon withTrailingIcon bind:value={valueIconsC} label="Label">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <div class="status">Value: {valueIconsC}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" withLeadingIcon withTrailingIcon bind:value={valueIconsD} label="Label">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <div class="status">Value: {valueIconsD}</div>
      </div>
    </div>
  </div>

  <div>
    Textarea:

    <div class="margins">
      <Textfield textarea bind:value={valueTextarea} label="Label" input$aria-controls="helper-text-textarea" input$aria-describedby="helper-text-textarea" />
      <HelperText id="helper-text-textarea">Helper Text</HelperText>
    </div>
  </div>

  <div>
    Textarea with Character Count:

    <div class="margins">
      <Textfield textarea input$maxlength="100" bind:value={valueTextareaCharCount} label="Label">
        <CharacterCounter>0 / 100</CharacterCounter>
      </Textfield>
    </div>
  </div>

  <div>
    Full Width:

    <div class="margins">
      <Textfield fullwidth lineRipple={false} bind:value={valueFullwidth} label="Label" input$aria-controls="helper-text-fullwidth" input$aria-describedby="helper-text-fullwidth" />
      <HelperText id="helper-text-fullwidth">Helper Text</HelperText>
    </div>
  </div>

  <div>
    Full Width Textarea:

    <div class="margins">
      <Textfield fullwidth textarea bind:value={valueFullwidthTextarea} label="Label" input$aria-controls="helper-text-fullwidth-textarea" input$aria-describedby="helper-text-fullwidth-textarea" />
      <HelperText id="helper-text-fullwidth-textarea">Helper Text</HelperText>
    </div>
  </div>

  <div>
    Elements in the Label:

    <div class="margins">
      <Textfield bind:value={valueElementsLabel} label="" type="email">
        <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">email</CommonIcon> Email</span>
      </Textfield>
    </div>
  </div>

  <div>
    Manual Setup:

    <div class="columns margins">
      <div>
        <Textfield>
          <Input bind:value={valueManualA} id="input-manual-a" aria-controls="helper-text-manual-a" aria-describedby="helper-text-manual-a" />
          <FloatingLabel for="input-manual-a">Label</FloatingLabel>
          <LineRipple />
        </Textfield>
        <HelperText id="helper-text-manual-a">Helper Text</HelperText>

        <div class="status">Value: {valueManualA}</div>
      </div>
      <div>
        <Textfield variant="filled">
          <Input bind:value={valueManualB} id="input-manual-b" aria-controls="helper-text-manual-b" aria-describedby="helper-text-manual-b" />
          <FloatingLabel for="input-manual-b">Label</FloatingLabel>
          <LineRipple />
        </Textfield>
        <HelperText id="helper-text-manual-b">Helper Text</HelperText>

        <div class="status">Value: {valueManualB}</div>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon>
          <Icon class="material-icons">event</Icon>
          <Input bind:value={valueManualC} id="input-manual-c" aria-controls="helper-text-manual-c" aria-describedby="helper-text-manual-c" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-c">Label</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <HelperText id="helper-text-manual-c">Helper Text</HelperText>

        <div class="status">Value: {valueManualC}</div>
      </div>
      <div>
        <Textfield textarea>
          <Textarea bind:value={valueManualD} id="input-manual-d" aria-controls="helper-text-manual-d" aria-describedby="helper-text-manual-d" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-d">Label</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <HelperText id="helper-text-manual-d">Helper Text</HelperText>

        <div class="status">Value: {valueManualD}</div>
      </div>
    </div>
  </div>
</section>

<script>
  import Textfield, {Input, Textarea} from 'svelte-material-ui/components/textfield';
  import Icon from 'svelte-material-ui/components/textfield/icon';
  import HelperText from 'svelte-material-ui/components/textfield/helper-text';
  import CharacterCounter from 'svelte-material-ui/components/textfield/character-counter';
  import {Icon as CommonIcon} from 'svelte-material-ui/components/common';
  import FloatingLabel from 'svelte-material-ui/components/floating-label';
  import LineRipple from 'svelte-material-ui/components/line-ripple';
  import NotchedOutline from 'svelte-material-ui/components/notched-outline';

  let valueClickable = '';
  let dirtyClickable = false;
  let invalidClickable = false;
  let valueStandardA = '';
  let valueStandardB = '';
  let valueStandardC = '';
  let valueStandardD = '';
  let valueFilledA = '';
  let valueFilledB = '';
  let valueFilledC = '';
  let valueFilledD = '';
  let valueShapedFilledA = '';
  let valueShapedFilledB = '';
  let valueShapedFilledC = '';
  let valueShapedFilledD = '';
  let valueOutlinedA = '';
  let valueOutlinedB = '';
  let valueOutlinedC = '';
  let valueOutlinedD = '';
  let valueShapedOutlinedA = '';
  let valueShapedOutlinedB = '';
  let valueShapedOutlinedC = '';
  let valueShapedOutlinedD = '';
  let valueDenseA = '';
  let valueDenseB = '';
  let valueDenseC = '';
  let valueDenseD = '';
  let valueNoLabelA = '';
  let valueNoLabelB = '';
  let valueNoLabelC = '';
  let valueNoLabelD = '';
  let valuePersistentA = '';
  let valuePersistentB = '';
  let valuePersistentC = '';
  let valuePersistentD = '';
  let valueCharCountA = '';
  let valueCharCountB = '';
  let valueCharCountC = '';
  let valueCharCountD = '';
  let valueIconsA = '';
  let valueIconsB = '';
  let valueIconsC = '';
  let valueIconsD = '';
  let valueTextarea = '';
  let valueTextareaCharCount = '';
  let valueFullwidth = '';
  let valueFullwidthTextarea = '';
  let valueElementsLabel = '';
  let valueManualA = '';
  let valueManualB = '';
  let valueManualC = '';
  let valueManualD = '';

  function clickableHandler() {
    alert(`Sending to ${valueClickable}!`);
    valueClickable = '';
    dirtyClickable = false;
  }
</script>

<style>
  .margins {
    margin: 18px 0;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  * :global(.shaped) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 32px;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>
<svelte:head>
  <title>Text Field - SMUI</title>
</svelte:head>

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

    <pre class="status">Dirty: {dirtyClickable}, Invalid: {invalidClickable}</pre>
  </div>

  <div>
    Standard:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueStandardA} label="Label" input$aria-controls="helper-text-standard-a" input$aria-describedby="helper-text-standard-a" />
        <HelperText id="helper-text-standard-a">Helper Text</HelperText>

        <pre class="status">Value: {valueStandardA}</pre>
      </div>
      <div>
        <Textfield withLeadingIcon bind:value={valueStandardB} label="Leading Icon" input$aria-controls="helper-text-standard-b" input$aria-describedby="helper-text-standard-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-b">Helper Text</HelperText>

        <pre class="status">Value: {valueStandardB}</pre>
      </div>
      <div>
        <Textfield withTrailingIcon bind:value={valueStandardC} label="Trailing Icon" input$aria-controls="helper-text-standard-c" input$aria-describedby="helper-text-standard-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-standard-c">Helper Text</HelperText>

        <pre class="status">Value: {valueStandardC}</pre>
      </div>
      <div>
        <Textfield invalid bind:value={valueStandardD} label="Invalid" input$aria-controls="helper-text-standard-d" input$aria-describedby="helper-text-standard-d" />
        <HelperText id="helper-text-standard-d">Helper Text</HelperText>

        <pre class="status">Value: {valueStandardD}</pre>
      </div>
    </div>
  </div>

  <div>
    Filled:

    <div class="columns margins">
      <div>
        <Textfield variant="filled" bind:value={valueFilledA} label="Label" input$aria-controls="helper-text-filled-a" input$aria-describedby="helper-text-filled-a" />
        <HelperText id="helper-text-filled-a">Helper Text</HelperText>

        <pre class="status">Value: {valueFilledA}</pre>
      </div>
      <div>
        <Textfield withLeadingIcon variant="filled" bind:value={valueFilledB} label="Leading Icon" input$aria-controls="helper-text-filled-b" input$aria-describedby="helper-text-filled-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-b">Helper Text</HelperText>

        <pre class="status">Value: {valueFilledB}</pre>
      </div>
      <div>
        <Textfield withTrailingIcon variant="filled" bind:value={valueFilledC} label="Trailing Icon" input$aria-controls="helper-text-filled-c" input$aria-describedby="helper-text-filled-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-filled-c">Helper Text</HelperText>

        <pre class="status">Value: {valueFilledC}</pre>
      </div>
      <div>
        <Textfield invalid variant="filled" bind:value={valueFilledD} label="Invalid" input$aria-controls="helper-text-filled-d" input$aria-describedby="helper-text-filled-d" />
        <HelperText id="helper-text-filled-d">Helper Text</HelperText>

        <pre class="status">Value: {valueFilledD}</pre>
      </div>
    </div>
  </div>

  <div>
    Shaped Filled:

    <div class="columns margins">
      <div>
        <Textfield class="shaped" variant="filled" bind:value={valueShapedFilledA} label="Label" input$aria-controls="helper-text-shaped-filled-a" input$aria-describedby="helper-text-shaped-filled-a" />
        <HelperText id="helper-text-shaped-filled-a">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedFilledA}</pre>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" withLeadingIcon bind:value={valueShapedFilledB} label="Leading Icon" input$aria-controls="helper-text-shaped-filled-b" input$aria-describedby="helper-text-shaped-filled-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-filled-b">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedFilledB}</pre>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" withTrailingIcon bind:value={valueShapedFilledC} label="Trailing Icon" input$aria-controls="helper-text-shaped-filled-c" input$aria-describedby="helper-text-shaped-filled-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-filled-c">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedFilledC}</pre>
      </div>
      <div>
        <Textfield class="shaped" variant="filled" invalid bind:value={valueShapedFilledD} label="Invalid" input$aria-controls="helper-text-shaped-filled-d" input$aria-describedby="helper-text-shaped-filled-d" />
        <HelperText id="helper-text-shaped-filled-d">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedFilledD}</pre>
      </div>
    </div>
  </div>

  <div>
    Outlined:

    <div class="columns margins">
      <div>
        <Textfield variant="outlined" bind:value={valueOutlinedA} label="Label" input$aria-controls="helper-text-outlined-a" input$aria-describedby="helper-text-outlined-a" />
        <HelperText id="helper-text-outlined-a">Helper Text</HelperText>

        <pre class="status">Value: {valueOutlinedA}</pre>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon bind:value={valueOutlinedB} label="Leading Icon" input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>

        <pre class="status">Value: {valueOutlinedB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" withTrailingIcon bind:value={valueOutlinedC} label="Trailing Icon" input$aria-controls="helper-text-outlined-c" input$aria-describedby="helper-text-outlined-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-outlined-c">Helper Text</HelperText>

        <pre class="status">Value: {valueOutlinedC}</pre>
      </div>
      <div>
        <Textfield variant="outlined" invalid bind:value={valueOutlinedD} label="Invalid" input$aria-controls="helper-text-outlined-d" input$aria-describedby="helper-text-outlined-d" />
        <HelperText id="helper-text-outlined-d">Helper Text</HelperText>

        <pre class="status">Value: {valueOutlinedD}</pre>
      </div>
    </div>
  </div>

  <div>
    Shaped Outlined:

    <div class="columns margins">
      <div>
        <Textfield class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedA} label="Label" input$aria-controls="helper-text-shaped-outlined-a" input$aria-describedby="helper-text-shaped-outlined-a" />
        <HelperText id="helper-text-shaped-outlined-a">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedOutlinedA}</pre>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedB} label="Leading Icon" input$aria-controls="helper-text-shaped-outlined-b" input$aria-describedby="helper-text-shaped-outlined-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-outlined-b">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedOutlinedB}</pre>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" withTrailingIcon bind:value={valueShapedOutlinedC} label="Trailing Icon" input$aria-controls="helper-text-shaped-outlined-c" input$aria-describedby="helper-text-shaped-outlined-c">
          <Icon class="material-icons">delete</Icon>
        </Textfield>
        <HelperText id="helper-text-shaped-outlined-c">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedOutlinedC}</pre>
      </div>
      <div>
        <Textfield class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedD} label="Invalid" input$aria-controls="helper-text-shaped-outlined-d" input$aria-describedby="helper-text-shaped-outlined-d" />
        <HelperText id="helper-text-shaped-outlined-d">Helper Text</HelperText>

        <pre class="status">Value: {valueShapedOutlinedD}</pre>
      </div>
    </div>
  </div>

  <div>
    Disabled:

    <div class="columns margins">
      <div>
        <Textfield disabled value="" label="Standard" input$aria-controls="helper-text-disabled-a" input$aria-describedby="helper-text-disabled-a" />
        <HelperText id="helper-text-disabled-a">Helper Text</HelperText>
      </div>
      <div>
        <Textfield variant="filled" disabled value="" label="Filled" input$aria-controls="helper-text-disabled-b" input$aria-describedby="helper-text-disabled-b" />
        <HelperText id="helper-text-disabled-b">Helper Text</HelperText>
      </div>
      <div>
        <Textfield variant="outlined" disabled value="" label="Outlined" input$aria-controls="helper-text-disabled-c" input$aria-describedby="helper-text-disabled-c" />
        <HelperText id="helper-text-disabled-c">Helper Text</HelperText>
      </div>
    </div>
  </div>

  <div>
    Dense:

    <div class="columns margins">
      <div>
        <Textfield dense bind:value={valueDenseA} label="Standard" input$aria-controls="helper-text-dense-a" input$aria-describedby="helper-text-dense-a" />
        <HelperText id="helper-text-dense-a">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseA}</pre>
      </div>
      <div>
        <Textfield variant="filled" dense bind:value={valueDenseB} label="Filled" input$aria-controls="helper-text-dense-b" input$aria-describedby="helper-text-dense-b" />
        <HelperText id="helper-text-dense-b">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" dense bind:value={valueDenseC} label="Outlined" input$aria-controls="helper-text-dense-c" input$aria-describedby="helper-text-dense-c" />
        <HelperText id="helper-text-dense-c">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseC}</pre>
      </div>
    </div>
  </div>

  <div>
    Dense, with Icon:

    <div class="columns margins">
      <div>
        <Textfield dense withLeadingIcon bind:value={valueDenseIconA} label="Standard" input$aria-controls="helper-text-dense-icon-a" input$aria-describedby="helper-text-dense-icon-a">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-a">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseIconA}</pre>
      </div>
      <div>
        <Textfield variant="filled" dense withLeadingIcon bind:value={valueDenseIconB} label="Filled" input$aria-controls="helper-text-dense-icon-b" input$aria-describedby="helper-text-dense-icon-b">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-b">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseIconB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" dense withLeadingIcon bind:value={valueDenseIconC} label="Outlined" input$aria-controls="helper-text-dense-icon-c" input$aria-describedby="helper-text-dense-icon-c">
          <Icon class="material-icons">event</Icon>
        </Textfield>
        <HelperText id="helper-text-dense-icon-c">Helper Text</HelperText>

        <pre class="status">Value: {valueDenseIconC}</pre>
      </div>
    </div>
  </div>

  <div>
    Without label or helper text:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueNoLabelA} />

        <pre class="status">Value: {valueNoLabelA}</pre>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valueNoLabelB} />

        <pre class="status">Value: {valueNoLabelB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valueNoLabelC} />

        <pre class="status">Value: {valueNoLabelC}</pre>
      </div>
    </div>
  </div>

  <div>
    With persistent helper text:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valuePersistentA} label="Standard" input$aria-controls="helper-text-persistent-a" input$aria-describedby="helper-text-persistent-a" />
        <HelperText id="helper-text-persistent-a" persistent>Helper Text</HelperText>

        <pre class="status">Value: {valuePersistentA}</pre>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valuePersistentB} label="Filled" input$aria-controls="helper-text-persistent-b" input$aria-describedby="helper-text-persistent-b" />
        <HelperText id="helper-text-persistent-b" persistent>Helper Text</HelperText>

        <pre class="status">Value: {valuePersistentB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valuePersistentC} label="Outlined" input$aria-controls="helper-text-persistent-c" input$aria-describedby="helper-text-persistent-c" />
        <HelperText id="helper-text-persistent-c" persistent>Helper Text</HelperText>

        <pre class="status">Value: {valuePersistentC}</pre>
      </div>
    </div>
  </div>

  <div>
    With character count:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueCharCountA} label="Standard" input$maxlength="18" input$aria-controls="helper-text-char-count-a" input$aria-describedby="helper-text-char-count-a" />
        <HelperText id="helper-text-char-count-a">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <pre class="status">Value: {valueCharCountA}</pre>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valueCharCountB} label="Filled" input$maxlength="18" input$aria-controls="helper-text-char-count-b" input$aria-describedby="helper-text-char-count-b" />
        <HelperText id="helper-text-char-count-b">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <pre class="status">Value: {valueCharCountB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valueCharCountC} label="Outlined" input$maxlength="18" input$aria-controls="helper-text-char-count-c" input$aria-describedby="helper-text-char-count-c" />
        <HelperText id="helper-text-char-count-c">Helper Text<span slot="character-counter"><CharacterCounter>0 / 18</CharacterCounter></span></HelperText>

        <pre class="status">Value: {valueCharCountC}</pre>
      </div>
    </div>
  </div>

  <div>
    Both icons:

    <div class="columns margins">
      <div>
        <Textfield withLeadingIcon withTrailingIcon bind:value={valueIconsA} label="Standard">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsA}</pre>
      </div>
      <div>
        <Textfield variant="filled" withLeadingIcon withTrailingIcon bind:value={valueIconsB} label="Filled">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon withTrailingIcon bind:value={valueIconsC} label="Outlined">
          <Icon class="material-icons">event</Icon>
          <Icon class="material-icons">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsC}</pre>
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
    Different Types:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueTypeNumber} label="Number" type="number" />
      </div>

      <div>
        <Textfield bind:value={valueTypeDate} label="DateTime-Local" type="datetime-local" />
      </div>

      <div>
        <Textfield bind:files={valueTypeFiles} label="File" type="file" on:change={handleFiles} />
      </div>
    </div>
  </div>

  <div>
    Manual Setup:

    <div class="columns margins">
      <div>
        <Textfield>
          <Input bind:value={valueManualA} id="input-manual-a" aria-controls="helper-text-manual-a" aria-describedby="helper-text-manual-a" />
          <FloatingLabel for="input-manual-a">Standard</FloatingLabel>
          <LineRipple />
        </Textfield>
        <HelperText id="helper-text-manual-a">Helper Text</HelperText>

        <pre class="status">Value: {valueManualA}</pre>
      </div>
      <div>
        <Textfield variant="filled">
          <Input bind:value={valueManualB} id="input-manual-b" aria-controls="helper-text-manual-b" aria-describedby="helper-text-manual-b" />
          <FloatingLabel for="input-manual-b">Filled</FloatingLabel>
          <LineRipple />
        </Textfield>
        <HelperText id="helper-text-manual-b">Helper Text</HelperText>

        <pre class="status">Value: {valueManualB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" withLeadingIcon>
          <Icon class="material-icons">event</Icon>
          <Input bind:value={valueManualC} id="input-manual-c" aria-controls="helper-text-manual-c" aria-describedby="helper-text-manual-c" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-c">Outlined</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <HelperText id="helper-text-manual-c">Helper Text</HelperText>

        <pre class="status">Value: {valueManualC}</pre>
      </div>
      <div>
        <Textfield textarea>
          <Textarea bind:value={valueManualD} id="input-manual-d" aria-controls="helper-text-manual-d" aria-describedby="helper-text-manual-d" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-d">Textarea</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <HelperText id="helper-text-manual-d">Helper Text</HelperText>

        <pre class="status">Value: {valueManualD}</pre>
      </div>
    </div>
  </div>
</section>

<script>
  import Textfield, {Input, Textarea} from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';
  import CharacterCounter from '@smui/textfield/character-counter/index';
  import {Icon as CommonIcon} from '@smui/common';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

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
  let valueDenseIconA = '';
  let valueDenseIconB = '';
  let valueDenseIconC = '';
  let valueNoLabelA = '';
  let valueNoLabelB = '';
  let valueNoLabelC = '';
  let valuePersistentA = '';
  let valuePersistentB = '';
  let valuePersistentC = '';
  let valueCharCountA = '';
  let valueCharCountB = '';
  let valueCharCountC = '';
  let valueIconsA = '';
  let valueIconsB = '';
  let valueIconsC = '';
  let valueTextarea = '';
  let valueTextareaCharCount = '';
  let valueFullwidth = '';
  let valueFullwidthTextarea = '';
  let valueElementsLabel = '';
  let valueTypeNumber = 0;
  let valueTypeDate = '';
  let valueTypeFiles = [];
  let valueManualA = '';
  let valueManualB = '';
  let valueManualC = '';
  let valueManualD = '';

  function clickableHandler() {
    alert(`Sending to ${valueClickable}!`);
    valueClickable = '';
    dirtyClickable = false;
  }

  function handleFiles() {
    alert('Selected '+valueTypeFiles.length+' file(s).');
  }
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    flex-basis: 0;
    min-width: 218px;
  }

  .columns :global(.mdc-text-field) {
    width: 218px;
  }

  .columns .status {
    width: auto;
    word-break: break-all;
    overflow-wrap: break-word;
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
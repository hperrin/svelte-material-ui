<section>
  <h2>Text Field</h2>

  <div>
    <div class="margins">
      <Textfield type="email" withTrailingIcon={valueClickable !== ''} bind:dirty={dirtyClickable} bind:invalid={invalidClickable} bind:value={valueClickable} label="To" style="min-width: 250px;">
        {#if valueClickable !== '' && dirtyClickable && !invalidClickable}
          <Icon role="button" on:click={clickableHandler}>send</Icon>
        {/if}
      </Textfield>
      <div use:HelperLine>
        <HelperText validationMsg>That's not a valid email address.</HelperText>
      </div>
    </div>

    <div class="status">Dirty: {dirtyClickable}, Invalid: {invalidClickable}</div>
  </div>

  <div>
    Filled:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueFilledA} label="Standard" input$aria-controls="helper-text-filled-a" input$aria-describedby="helper-text-filled-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-filled-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueFilledA}</div>
      </div>
      <div>
        <Textfield withLeadingIcon bind:value={valueFilledB} label="Standard" input$aria-controls="helper-text-filled-b" input$aria-describedby="helper-text-filled-b">
          <Icon>event</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-filled-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueFilledB}</div>
      </div>
      <div>
        <Textfield withTrailingIcon bind:value={valueFilledC} label="Standard" input$aria-controls="helper-text-filled-c" input$aria-describedby="helper-text-filled-c">
          <Icon>delete</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-filled-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueFilledC}</div>
      </div>
    </div>
  </div>

  <div>
    Shaped Filled:

    <div class="columns margins">
      <div>
        <Textfield class="shaped" bind:value={valueShapedFilledA} label="Standard" input$aria-controls="helper-text-shaped-filled-a" input$aria-describedby="helper-text-shaped-filled-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-filled-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedFilledA}</div>
      </div>
      <div>
        <Textfield class="shaped" withLeadingIcon bind:value={valueShapedFilledB} label="Standard" input$aria-controls="helper-text-shaped-filled-b" input$aria-describedby="helper-text-shaped-filled-b">
          <Icon>event</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-filled-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedFilledB}</div>
      </div>
      <div>
        <Textfield class="shaped" withTrailingIcon bind:value={valueShapedFilledC} label="Standard" input$aria-controls="helper-text-shaped-filled-c" input$aria-describedby="helper-text-shaped-filled-c">
          <Icon>delete</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-filled-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedFilledC}</div>
      </div>
    </div>
  </div>

  <div>
    Outlined:

    <div class="columns margins">
      <div>
        <Textfield outlined bind:value={valueOutlinedA} label="Standard" input$aria-controls="helper-text-outlined-a" input$aria-describedby="helper-text-outlined-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-outlined-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueOutlinedA}</div>
      </div>
      <div>
        <Textfield outlined withLeadingIcon bind:value={valueOutlinedB} label="Standard" input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
          <Icon>event</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-outlined-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueOutlinedB}</div>
      </div>
      <div>
        <Textfield outlined withTrailingIcon bind:value={valueOutlinedC} label="Standard" input$aria-controls="helper-text-outlined-c" input$aria-describedby="helper-text-outlined-c">
          <Icon>delete</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-outlined-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueOutlinedC}</div>
      </div>
    </div>
  </div>

  <div>
    Shaped Outlined:

    <div class="columns margins">
      <div>
        <Textfield class="shaped-outlined" outlined bind:value={valueShapedOutlinedA} label="Standard" input$aria-controls="helper-text-shaped-outlined-a" input$aria-describedby="helper-text-shaped-outlined-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-outlined-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedOutlinedA}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined withLeadingIcon bind:value={valueShapedOutlinedB} label="Standard" input$aria-controls="helper-text-shaped-outlined-b" input$aria-describedby="helper-text-shaped-outlined-b">
          <Icon>event</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-outlined-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedOutlinedB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined withTrailingIcon bind:value={valueShapedOutlinedC} label="Standard" input$aria-controls="helper-text-shaped-outlined-c" input$aria-describedby="helper-text-shaped-outlined-c">
          <Icon>delete</Icon>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-shaped-outlined-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueShapedOutlinedC}</div>
      </div>
    </div>
  </div>

  <div>
    Disabled:

    <div class="columns margins">
      <div>
        <Textfield disabled value="" label="Standard" input$aria-controls="helper-text-disabled-a" input$aria-describedby="helper-text-disabled-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-disabled-a">Helper Text</HelperText>
        </div>
      </div>
      <div>
        <Textfield outlined disabled value="" label="Standard" input$aria-controls="helper-text-disabled-b" input$aria-describedby="helper-text-disabled-b" />
        <div use:HelperLine>
          <HelperText id="helper-text-disabled-b">Helper Text</HelperText>
        </div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined disabled value="" label="Standard" input$aria-controls="helper-text-disabled-c" input$aria-describedby="helper-text-disabled-c" />
        <div use:HelperLine>
          <HelperText id="helper-text-disabled-c">Helper Text</HelperText>
        </div>
      </div>
    </div>
  </div>

  <div>
    Dense:

    <div class="columns margins">
      <div>
        <Textfield dense bind:value={valueDenseA} label="Standard" input$aria-controls="helper-text-dense-a" input$aria-describedby="helper-text-dense-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-dense-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueDenseA}</div>
      </div>
      <div>
        <Textfield outlined dense bind:value={valueDenseB} label="Standard" input$aria-controls="helper-text-dense-b" input$aria-describedby="helper-text-dense-b" />
        <div use:HelperLine>
          <HelperText id="helper-text-dense-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueDenseB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined dense bind:value={valueDenseC} label="Standard" input$aria-controls="helper-text-dense-c" input$aria-describedby="helper-text-dense-c" />
        <div use:HelperLine>
          <HelperText id="helper-text-dense-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueDenseC}</div>
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
        <Textfield outlined bind:value={valueNoLabelB} />

        <div class="status">Value: {valueNoLabelB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined bind:value={valueNoLabelC} />

        <div class="status">Value: {valueNoLabelC}</div>
      </div>
    </div>
  </div>

  <div>
    With persistent helper text:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valuePersistentA} label="Standard" input$aria-controls="helper-text-persistent-a" input$aria-describedby="helper-text-persistent-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-persistent-a" persistent>Helper Text</HelperText>
        </div>

        <div class="status">Value: {valuePersistentA}</div>
      </div>
      <div>
        <Textfield outlined bind:value={valuePersistentB} label="Standard" input$aria-controls="helper-text-persistent-b" input$aria-describedby="helper-text-persistent-b" />
        <div use:HelperLine>
          <HelperText id="helper-text-persistent-b" persistent>Helper Text</HelperText>
        </div>

        <div class="status">Value: {valuePersistentB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined bind:value={valuePersistentC} label="Standard" input$aria-controls="helper-text-persistent-c" input$aria-describedby="helper-text-persistent-c" />
        <div use:HelperLine>
          <HelperText id="helper-text-persistent-c" persistent>Helper Text</HelperText>
        </div>

        <div class="status">Value: {valuePersistentC}</div>
      </div>
    </div>
  </div>

  <div>
    With character count:

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueCharCountA} label="Standard" input$maxlength="18" input$aria-controls="helper-text-char-count-a" input$aria-describedby="helper-text-char-count-a" />
        <div use:HelperLine>
          <HelperText id="helper-text-char-count-a">Helper Text</HelperText>
          <CharacterCount>0 / 18</CharacterCount>
        </div>

        <div class="status">Value: {valueCharCountA}</div>
      </div>
      <div>
        <Textfield outlined bind:value={valueCharCountB} label="Standard" input$maxlength="18" input$aria-controls="helper-text-char-count-b" input$aria-describedby="helper-text-char-count-b" />
        <div use:HelperLine>
          <HelperText id="helper-text-char-count-b">Helper Text</HelperText>
          <CharacterCount>0 / 18</CharacterCount>
        </div>

        <div class="status">Value: {valueCharCountB}</div>
      </div>
      <div>
        <Textfield class="shaped-outlined" outlined bind:value={valueCharCountC} label="Standard" input$maxlength="18" input$aria-controls="helper-text-char-count-c" input$aria-describedby="helper-text-char-count-c" />
        <div use:HelperLine>
          <HelperText id="helper-text-char-count-c">Helper Text</HelperText>
          <CharacterCount>0 / 18</CharacterCount>
        </div>

        <div class="status">Value: {valueCharCountC}</div>
      </div>
    </div>
  </div>

  <div>
    Both icons:

    <div class="margins">
      <Textfield withLeadingIcon withTrailingIcon bind:value={valueIcons} label="Standard">
        <Icon>event</Icon>
        <Icon>delete</Icon>
      </Textfield>
    </div>
  </div>

  <div>
    Textarea:

    <div class="margins">
      <Textfield textarea bind:value={valueTextarea} label="Standard" input$aria-controls="helper-text-textarea" input$aria-describedby="helper-text-textarea" />
      <div use:HelperLine>
        <HelperText id="helper-text-textarea">Helper Text</HelperText>
      </div>
    </div>
  </div>

  <div>
    Textarea with Character Count:

    <div class="margins">
      <Textfield textarea input$maxlength="100" bind:value={valueTextareaCharCount} label="Standard">
        <CharacterCount>0 / 100</CharacterCount>
      </Textfield>
    </div>
  </div>

  <div>
    Full Width:

    <div class="margins">
      <Textfield fullwidth lineRipple={false} bind:value={valueFullwidth} label="Standard" input$aria-controls="helper-text-fullwidth" input$aria-describedby="helper-text-fullwidth" />
      <div use:HelperLine>
        <HelperText id="helper-text-fullwidth">Helper Text</HelperText>
      </div>
    </div>
  </div>

  <div>
    Full Width Textarea:

    <div class="margins">
      <Textfield fullwidth textarea bind:value={valueFullwidthTextarea} label="Standard" input$aria-controls="helper-text-fullwidth-textarea" input$aria-describedby="helper-text-fullwidth-textarea" />
      <div use:HelperLine>
        <HelperText id="helper-text-fullwidth-textarea">Helper Text</HelperText>
      </div>
    </div>
  </div>

  <div>
    Elements in the Label:

    <div class="margins">
      <Textfield bind:value={valueElementsLabel} label="" type="email">
        <span slot="label"><CommonIcon style="font-size: 1em; line-height: normal; vertical-align: middle;">email</CommonIcon> Email</span>
      </Textfield>
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
        <div use:HelperLine>
          <HelperText id="helper-text-manual-a">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueManualA}</div>
      </div>
      <div>
        <Textfield outlined withLeadingIcon>
          <Icon>event</Icon>
          <Input bind:value={valueManualB} id="input-manual-b" aria-controls="helper-text-manual-b" aria-describedby="helper-text-manual-b" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-b">Standard</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-manual-b">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueManualB}</div>
      </div>
      <div>
        <Textfield textarea>
          <Textarea bind:value={valueManualC} id="input-manual-c" aria-controls="helper-text-manual-c" aria-describedby="helper-text-manual-c" />
          <NotchedOutline>
            <FloatingLabel for="input-manual-c">Standard</FloatingLabel>
          </NotchedOutline>
        </Textfield>
        <div use:HelperLine>
          <HelperText id="helper-text-manual-c">Helper Text</HelperText>
        </div>

        <div class="status">Value: {valueManualC}</div>
      </div>
    </div>
  </div>
</section>

<script>
  import Textfield, {Input, Textarea, Icon, HelperLine, HelperText, CharacterCount} from '../components/textfield';
  import {Icon as CommonIcon} from '../components/common';
  import FloatingLabel from '../components/floating-label';
  import LineRipple from '../components/line-ripple';
  import NotchedOutline from '../components/notched-outline';

  let valueClickable = '';
  let dirtyClickable = false;
  let invalidClickable = false;
  let valueFilledA = '';
  let valueFilledB = '';
  let valueFilledC = '';
  let valueShapedFilledA = '';
  let valueShapedFilledB = '';
  let valueShapedFilledC = '';
  let valueOutlinedA = '';
  let valueOutlinedB = '';
  let valueOutlinedC = '';
  let valueShapedOutlinedA = '';
  let valueShapedOutlinedB = '';
  let valueShapedOutlinedC = '';
  let valueDenseA = '';
  let valueDenseB = '';
  let valueDenseC = '';
  let valueNoLabelA = '';
  let valueNoLabelB = '';
  let valueNoLabelC = '';
  let valuePersistentA = '';
  let valuePersistentB = '';
  let valuePersistentC = '';
  let valueCharCountA = '';
  let valueCharCountB = '';
  let valueCharCountC = '';
  let valueIcons = '';
  let valueTextarea = '';
  let valueTextareaCharCount = '';
  let valueFullwidth = '';
  let valueFullwidthTextarea = '';
  let valueElementsLabel = '';
  let valueManualA = '';
  let valueManualB = '';
  let valueManualC = '';

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
    padding-right: 0;
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
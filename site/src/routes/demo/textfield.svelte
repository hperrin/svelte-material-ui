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
      <Textfield
        type="email"
        bind:dirty={dirtyClickable}
        bind:invalid={invalidClickable}
        updateInvalid
        bind:value={valueClickable}
        label="To"
        style="min-width: 250px;"
        input$autocomplete="email"
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
      >
        <Icon
          class="material-icons"
          role="button"
          disabled={valueClickable === '' ||
            !dirtyClickable ||
            invalidClickable}
          on:click={clickableHandler}
          slot="leadingIcon">send</Icon
        >
        <HelperText validationMsg slot="helper"
          >That's not a valid email address.</HelperText
        >
      </Textfield>
    </div>

    <pre
      class="status">Focused: {focused}, Dirty: {dirtyClickable}, Invalid: {invalidClickable}</pre>
  </div>

  <div>
    <h6 class="demo-title">Standard</h6>

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueStandardA} label="Label">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueStandardA}</pre>
      </div>
      <div>
        <Textfield bind:value={valueStandardB} label="Leading Icon">
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueStandardB}</pre>
      </div>
      <div>
        <Textfield bind:value={valueStandardC} label="Trailing Icon">
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueStandardC}</pre>
      </div>
      <div>
        <Textfield invalid bind:value={valueStandardD} label="Invalid">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueStandardD}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Filled</h6>

    <div class="columns margins">
      <div>
        <Textfield variant="filled" bind:value={valueFilledA} label="Label">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueFilledA}</pre>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={valueFilledB}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueFilledB}</pre>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={valueFilledC}
          label="Trailing Icon"
        >
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueFilledC}</pre>
      </div>
      <div>
        <Textfield
          invalid
          variant="filled"
          bind:value={valueFilledD}
          label="Invalid"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueFilledD}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Shaped Filled</h6>

    <div class="columns margins">
      <div>
        <Textfield
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilledA}
          label="Label"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedFilledA}</pre>
      </div>
      <div>
        <Textfield
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilledB}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedFilledB}</pre>
      </div>
      <div>
        <Textfield
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilledC}
          label="Trailing Icon"
        >
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedFilledC}</pre>
      </div>
      <div>
        <Textfield
          class="shaped"
          variant="filled"
          invalid
          bind:value={valueShapedFilledD}
          label="Invalid"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedFilledD}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Outlined</h6>

    <div class="columns margins">
      <div>
        <Textfield variant="outlined" bind:value={valueOutlinedA} label="Label">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueOutlinedA}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          bind:value={valueOutlinedB}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueOutlinedB}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          bind:value={valueOutlinedC}
          label="Trailing Icon"
        >
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueOutlinedC}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          invalid
          bind:value={valueOutlinedD}
          label="Invalid"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueOutlinedD}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Shaped Outlined</h6>

    <div class="columns margins">
      <div>
        <Textfield
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlinedA}
          label="Label"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedOutlinedA}</pre>
      </div>
      <div>
        <Textfield
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlinedB}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedOutlinedB}</pre>
      </div>
      <div>
        <Textfield
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlinedC}
          label="Trailing Icon"
        >
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedOutlinedC}</pre>
      </div>
      <div>
        <Textfield
          class="shaped-outlined"
          variant="outlined"
          invalid
          bind:value={valueShapedOutlinedD}
          label="Invalid"
        >
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueShapedOutlinedD}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Disabled</h6>

    <div class="columns margins">
      <div>
        <Textfield disabled value="" label="Standard">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>
      </div>
      <div>
        <Textfield variant="filled" disabled value="" label="Filled">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>
      </div>
      <div>
        <Textfield variant="outlined" disabled value="" label="Outlined">
          <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Without label or helper text</h6>

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
    <h6 class="demo-title">With persistent helper text</h6>

    <div class="columns margins">
      <div>
        <Textfield bind:value={valuePersistentA} label="Standard">
          <HelperText persistent slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valuePersistentA}</pre>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={valuePersistentB}
          label="Filled"
        >
          <HelperText persistent slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valuePersistentB}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          bind:value={valuePersistentC}
          label="Outlined"
        >
          <HelperText persistent slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valuePersistentC}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">With character count</h6>

    <div class="columns margins">
      <div>
        <Textfield
          bind:value={valueCharCountA}
          label="Standard"
          input$maxlength="18"
        >
          <CharacterCounter slot="helper">0 / 18</CharacterCounter>
        </Textfield>

        <pre class="status">Value: {valueCharCountA}</pre>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={valueCharCountB}
          label="Filled"
          input$maxlength="18"
        >
          <CharacterCounter slot="helper">0 / 18</CharacterCounter>
        </Textfield>

        <pre class="status">Value: {valueCharCountB}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          bind:value={valueCharCountC}
          label="Outlined"
          input$maxlength="18"
        >
          <CharacterCounter slot="helper">0 / 18</CharacterCounter>
        </Textfield>

        <pre class="status">Value: {valueCharCountC}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">With helper text and character count</h6>

    <div class="columns margins">
      <div>
        <Textfield
          bind:value={valueHelperCharCountA}
          label="Standard"
          input$maxlength="18"
        >
          <svelte:fragment slot="helper">
            <HelperText>Helper Text</HelperText>
            <CharacterCounter>0 / 18</CharacterCounter>
          </svelte:fragment>
        </Textfield>

        <pre class="status">Value: {valueHelperCharCountA}</pre>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={valueHelperCharCountB}
          label="Filled"
          input$maxlength="18"
        >
          <svelte:fragment slot="helper">
            <HelperText>Helper Text</HelperText>
            <CharacterCounter>0 / 18</CharacterCounter>
          </svelte:fragment>
        </Textfield>

        <pre class="status">Value: {valueHelperCharCountB}</pre>
      </div>
      <div>
        <Textfield
          variant="outlined"
          bind:value={valueHelperCharCountC}
          label="Outlined"
          input$maxlength="18"
        >
          <svelte:fragment slot="helper">
            <HelperText>Helper Text</HelperText>
            <CharacterCounter>0 / 18</CharacterCounter>
          </svelte:fragment>
        </Textfield>

        <pre class="status">Value: {valueHelperCharCountC}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Both icons</h6>

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueIconsA} label="Standard">
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsA}</pre>
      </div>
      <div>
        <Textfield variant="filled" bind:value={valueIconsB} label="Filled">
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsB}</pre>
      </div>
      <div>
        <Textfield variant="outlined" bind:value={valueIconsC} label="Outlined">
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Icon class="material-icons" slot="trailingIcon">delete</Icon>
        </Textfield>

        <pre class="status">Value: {valueIconsC}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Textarea</h6>

    <div class="margins">
      <Textfield textarea bind:value={valueTextarea} label="Label">
        <HelperText slot="helper">Helper Text</HelperText>
      </Textfield>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Textarea with Character Count</h6>

    <div class="margins">
      <Textfield
        textarea
        input$maxlength="100"
        bind:value={valueTextareaCharCount}
        label="Label"
      >
        <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
      </Textfield>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Full Width</h6>

    <div class="margins">
      <Textfield
        style="width: 100%;"
        lineRipple={false}
        bind:value={valueFullwidth}
        label="Label"
      >
        <HelperText slot="helper">Helper Text</HelperText>
      </Textfield>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Full Width Textarea</h6>

    <div class="margins">
      <Textfield
        style="width: 100%;"
        textarea
        bind:value={valueFullwidthTextarea}
        label="Label"
      >
        <HelperText slot="helper">Helper Text</HelperText>
      </Textfield>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Elements in the Label</h6>

    <div class="margins">
      <Textfield bind:value={valueElementsLabel} type="email">
        <svelte:fragment slot="label"
          ><CommonIcon
            class="material-icons"
            style="font-size: 1em; line-height: normal; vertical-align: top;"
            >email</CommonIcon
          > Email</svelte:fragment
        >
      </Textfield>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Different Types</h6>

    <div class="columns margins">
      <div>
        <Textfield bind:value={valueTypeNumber} label="Number" type="number" />
      </div>

      <div>
        <Textfield
          bind:value={valueTypeNumberStep}
          label="Number with Step"
          type="number"
          input$step="2"
        />
      </div>

      <div>
        <Textfield
          bind:value={valueTypeDate}
          label="DateTime-Local"
          type="datetime-local"
        />
      </div>

      <div>
        <!-- Note that the change and input events fire before the `files` props is updated. -->
        <Textfield bind:files={valueTypeFiles} label="File" type="file" />
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Manual Setup</h6>

    <!--
      Using a manual setup gives you more control over the layout and
      elements inside the Textfield.
      
      When you setup the textfield manually, you need to provide each
      of the components underneath to the Textfield component. It will
      also not be wrapped inside a label element, so you'll need to
      provide `id` and `for` attributes yourself. The HelperText does
      not pass its ID over to the Input either, so you'll need those
      accessibility attributes too.
      
      The Textfield's foundation will only be initialized after a
      Svelte tick() has passed, in order to properly recieve the
      components. (This may have unforeseen consequences, IDK.
      Use this feature at your own risk.)
    -->
    <div class="columns margins">
      <div>
        <Textfield
          bind:input={inputManualInputA}
          bind:floatingLabel={inputManualFloatingLabelA}
          bind:lineRipple={inputManualLineRippleA}
        >
          <FloatingLabel
            bind:this={inputManualFloatingLabelA}
            for="input-manual-a"
            slot="label">Standard</FloatingLabel
          >
          <Input
            bind:this={inputManualInputA}
            bind:value={valueManualA}
            id="input-manual-a"
            aria-controls="helper-text-manual-a"
            aria-describedby="helper-text-manual-a"
          />
          <LineRipple bind:this={inputManualLineRippleA} slot="ripple" />
          <HelperText id="helper-text-manual-a" slot="helper"
            >Helper Text</HelperText
          >
        </Textfield>

        <pre class="status">Value: {valueManualA}</pre>
      </div>
      <div>
        <Textfield
          bind:input={inputManualInputB}
          bind:floatingLabel={inputManualFloatingLabelB}
          bind:lineRipple={inputManualLineRippleB}
          variant="filled"
        >
          <FloatingLabel
            bind:this={inputManualFloatingLabelB}
            for="input-manual-b"
            slot="label">Filled</FloatingLabel
          >
          <Input
            bind:this={inputManualInputB}
            bind:value={valueManualB}
            id="input-manual-b"
            aria-controls="helper-text-manual-b"
            aria-describedby="helper-text-manual-b"
          />
          <LineRipple bind:this={inputManualLineRippleB} slot="ripple" />
          <HelperText id="helper-text-manual-b" slot="helper"
            >Helper Text</HelperText
          >
        </Textfield>

        <pre class="status">Value: {valueManualB}</pre>
      </div>
      <div>
        <Textfield
          bind:input={inputManualInputC}
          bind:notchedOutline={inputManualNotchedOutlineC}
          variant="outlined"
        >
          <NotchedOutline bind:this={inputManualNotchedOutlineC} slot="label">
            <FloatingLabel for="input-manual-c">Outlined</FloatingLabel>
          </NotchedOutline>
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Input
            bind:this={inputManualInputC}
            bind:value={valueManualC}
            id="input-manual-c"
            aria-controls="helper-text-manual-c"
            aria-describedby="helper-text-manual-c"
          />
          <HelperText id="helper-text-manual-c" slot="helper"
            >Helper Text</HelperText
          >
        </Textfield>

        <pre class="status">Value: {valueManualC}</pre>
      </div>
      <div>
        <Textfield
          bind:input={inputManualInputD}
          bind:notchedOutline={inputManualNotchedOutlineD}
          textarea
        >
          <NotchedOutline bind:this={inputManualNotchedOutlineD} slot="label">
            <FloatingLabel for="input-manual-d">Textarea</FloatingLabel>
          </NotchedOutline>
          <Textarea
            bind:this={inputManualInputD}
            bind:value={valueManualD}
            id="input-manual-d"
            aria-controls="helper-text-manual-d"
            aria-describedby="helper-text-manual-d"
          />
          <HelperText id="helper-text-manual-d" slot="helper"
            >Helper Text</HelperText
          >
        </Textfield>

        <pre class="status">Value: {valueManualD}</pre>
      </div>
    </div>
  </div>
</section>

<script>
  import Textfield, { Input, Textarea } from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';
  import CharacterCounter from '@smui/textfield/character-counter/index';
  import { Icon as CommonIcon } from '@smui/common';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  let focused = false;
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
  let valueNoLabelA = '';
  let valueNoLabelB = '';
  let valueNoLabelC = '';
  let valuePersistentA = '';
  let valuePersistentB = '';
  let valuePersistentC = '';
  let valueCharCountA = '';
  let valueCharCountB = '';
  let valueCharCountC = '';
  let valueHelperCharCountA = '';
  let valueHelperCharCountB = '';
  let valueHelperCharCountC = '';
  let valueIconsA = '';
  let valueIconsB = '';
  let valueIconsC = '';
  let valueTextarea = '';
  let valueTextareaCharCount = '';
  let valueFullwidth = '';
  let valueFullwidthTextarea = '';
  let valueElementsLabel = '';
  let valueTypeNumber = 0;
  let valueTypeNumberStep = 0;
  let valueTypeDate = '';
  let valueTypeFiles = [];

  // Manual Setup requires passing the lower components up to the Textfield
  let valueManualA = '';
  let inputManualInputA;
  let inputManualFloatingLabelA;
  let inputManualLineRippleA;

  let valueManualB = '';
  let inputManualInputB;
  let inputManualFloatingLabelB;
  let inputManualLineRippleB;

  let valueManualC = '';
  let inputManualInputC;
  let inputManualNotchedOutlineC;

  let valueManualD = '';
  let inputManualInputD;
  let inputManualNotchedOutlineD;

  function clickableHandler() {
    alert(`Sending to ${valueClickable}!`);
    valueClickable = '';
    dirtyClickable = false;
  }

  // Note that the change and input events fire before the `files` props is updated.
  $: if (valueTypeFiles.length) {
    alert('Selected ' + valueTypeFiles.length + ' file(s).');
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
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
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

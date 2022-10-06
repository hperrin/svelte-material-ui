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
      bind:input={inputA}
      bind:floatingLabel={floatingLabelA}
      bind:lineRipple={lineRippleA}
    >
      <FloatingLabel
        bind:this={floatingLabelA}
        for="input-manual-a"
        slot="label">Standard</FloatingLabel
      >
      <Input
        bind:this={inputA}
        bind:value={valueA}
        id="input-manual-a"
        aria-controls="helper-text-manual-a"
        aria-describedby="helper-text-manual-a"
      />
      <LineRipple bind:this={lineRippleA} slot="ripple" />
      <HelperText id="helper-text-manual-a" slot="helper"
        >Helper Text</HelperText
      >
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      bind:input={inputB}
      bind:floatingLabel={floatingLabelB}
      bind:lineRipple={lineRippleB}
      variant="filled"
    >
      <FloatingLabel
        bind:this={floatingLabelB}
        for="input-manual-b"
        slot="label">Filled</FloatingLabel
      >
      <Input
        bind:this={inputB}
        bind:value={valueB}
        id="input-manual-b"
        aria-controls="helper-text-manual-b"
        aria-describedby="helper-text-manual-b"
      />
      <LineRipple bind:this={lineRippleB} slot="ripple" />
      <HelperText id="helper-text-manual-b" slot="helper"
        >Helper Text</HelperText
      >
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      bind:input={inputC}
      bind:notchedOutline={notchedOutlineC}
      bind:floatingLabel={floatingLabelC}
      variant="outlined"
    >
      <NotchedOutline bind:this={notchedOutlineC} slot="label">
        <FloatingLabel bind:this={floatingLabelC} for="input-manual-c"
          >Outlined</FloatingLabel
        >
      </NotchedOutline>
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Input
        bind:this={inputC}
        bind:value={valueC}
        id="input-manual-c"
        aria-controls="helper-text-manual-c"
        aria-describedby="helper-text-manual-c"
      />
      <HelperText id="helper-text-manual-c" slot="helper"
        >Helper Text</HelperText
      >
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
  <div>
    <Textfield
      bind:input={inputD}
      bind:notchedOutline={notchedOutlineD}
      bind:floatingLabel={floatingLabelD}
      textarea
    >
      <NotchedOutline bind:this={notchedOutlineD} slot="label">
        <FloatingLabel bind:this={floatingLabelD} for="input-manual-d"
          >Textarea</FloatingLabel
        >
      </NotchedOutline>
      <Textarea
        bind:this={inputD}
        bind:value={valueD}
        id="input-manual-d"
        aria-controls="helper-text-manual-d"
        aria-describedby="helper-text-manual-d"
      />
      <HelperText id="helper-text-manual-d" slot="helper"
        >Helper Text</HelperText
      >
    </Textfield>

    <pre class="status">Value: {valueD}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield, { Input, Textarea } from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  // Manual Setup requires passing the lower components up to the Textfield
  let valueA = '';
  let inputA: Input;
  let floatingLabelA: FloatingLabel;
  let lineRippleA: LineRipple;

  let valueB = '';
  let inputB: Input;
  let floatingLabelB: FloatingLabel;
  let lineRippleB: LineRipple;

  let valueC = '';
  let inputC: Input;
  let notchedOutlineC: NotchedOutline;
  let floatingLabelC: FloatingLabel;

  let valueD = '';
  let inputD: Textarea;
  let notchedOutlineD: NotchedOutline;
  let floatingLabelD: FloatingLabel;
</script>

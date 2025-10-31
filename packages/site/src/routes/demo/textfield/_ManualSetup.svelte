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
      input={inputA}
      floatingLabel={floatingLabelA}
      lineRipple={lineRippleA}
    >
      {#snippet label()}
        <FloatingLabel bind:this={floatingLabelA} for="input-manual-a"
          >Standard</FloatingLabel
        >
      {/snippet}
      <Input
        bind:this={inputA}
        bind:value={valueA}
        id="input-manual-a"
        aria-controls="helper-text-manual-a"
        aria-describedby="helper-text-manual-a"
      />
      {#snippet line()}
        <LineRipple bind:this={lineRippleA} />
      {/snippet}
      {#snippet helper()}
        <HelperText id="helper-text-manual-a">Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      input={inputB}
      floatingLabel={floatingLabelB}
      lineRipple={lineRippleB}
      variant="filled"
    >
      {#snippet label()}
        <FloatingLabel bind:this={floatingLabelB} for="input-manual-b"
          >Filled</FloatingLabel
        >
      {/snippet}
      <Input
        bind:this={inputB}
        bind:value={valueB}
        id="input-manual-b"
        aria-controls="helper-text-manual-b"
        aria-describedby="helper-text-manual-b"
      />
      {#snippet line()}
        <LineRipple bind:this={lineRippleB} />
      {/snippet}
      {#snippet helper()}
        <HelperText id="helper-text-manual-b">Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      input={inputC}
      notchedOutline={notchedOutlineC}
      floatingLabel={floatingLabelC}
      variant="outlined"
    >
      {#snippet label()}
        <NotchedOutline bind:this={notchedOutlineC}>
          <FloatingLabel bind:this={floatingLabelC} for="input-manual-c"
            >Outlined</FloatingLabel
          >
        </NotchedOutline>
      {/snippet}
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      <Input
        bind:this={inputC}
        bind:value={valueC}
        id="input-manual-c"
        aria-controls="helper-text-manual-c"
        aria-describedby="helper-text-manual-c"
      />
      {#snippet helper()}
        <HelperText id="helper-text-manual-c">Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
  <div>
    <Textfield
      input={inputD}
      notchedOutline={notchedOutlineD}
      floatingLabel={floatingLabelD}
      textarea
    >
      {#snippet label()}
        <NotchedOutline bind:this={notchedOutlineD}>
          <FloatingLabel bind:this={floatingLabelD} for="input-manual-d"
            >Textarea</FloatingLabel
          >
        </NotchedOutline>
      {/snippet}
      <Textarea
        bind:this={inputD}
        bind:value={valueD}
        id="input-manual-d"
        aria-controls="helper-text-manual-d"
        aria-describedby="helper-text-manual-d"
      />
      {#snippet helper()}
        <HelperText id="helper-text-manual-d">Helper Text</HelperText>
      {/snippet}
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
  let valueA = $state('');
  let inputA: Input | undefined = $state();
  let floatingLabelA: FloatingLabel | undefined = $state();
  let lineRippleA: LineRipple | undefined = $state();

  let valueB = $state('');
  let inputB: Input | undefined = $state();
  let floatingLabelB: FloatingLabel | undefined = $state();
  let lineRippleB: LineRipple | undefined = $state();

  let valueC = $state('');
  let inputC: Input | undefined = $state();
  let notchedOutlineC: NotchedOutline | undefined = $state();
  let floatingLabelC: FloatingLabel | undefined = $state();

  let valueD = $state('');
  let inputD: Textarea | undefined = $state();
  let notchedOutlineD: NotchedOutline | undefined = $state();
  let floatingLabelD: FloatingLabel | undefined = $state();
</script>

<svelte:head>
  <title>Chip Input - SMUI</title>
</svelte:head>

<section>
  <h2>Chip Input</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui-extra/chip-input</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="chip-input/_Simple.svelte" />

  <Demo component={Validity} file="chip-input/_Validity.svelte">
    Validity state
  </Demo>

  <Demo component={Objects} file="chip-input/_Objects.svelte">
    Objects
    <svelte:fragment slot="subtitle"
      >Objects allow you to have dupliate entries.</svelte:fragment
    >
  </Demo>

  <Demo component={Autocomplete} file="chip-input/_Autocomplete.svelte">
    Autocomplete
  </Demo>

  <Demo
    component={AutocompleteObjects}
    file="chip-input/_AutocompleteObjects.svelte"
  >
    Autocomplete objects
  </Demo>

  <Demo component={Async} file="chip-input/_Async.svelte">
    Async options loading
    <svelte:fragment slot="subtitle">
      The autocomplete in the chip input supports retrieving results
      asynchronously, like from a REST endpoint. Try typing a letter in the box
      below.
    </svelte:fragment>
  </Demo>

  <Demo component={AddChipKeys} file="chip-input/_AddChipKeys.svelte">
    Add chip keys
    <svelte:fragment slot="subtitle">
      You can control which keys add the current chip. This one uses space,
      comma, dash, and plus.
    </svelte:fragment>
  </Demo>

  <Demo component={Disabled} file="chip-input/_Disabled.svelte">Disabled</Demo>

  <Demo component={SvgRemoveIcons} file="chip-input/_SvgRemoveIcons.svelte">
    SVG remove icons
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import Validity from './_Validity.svelte';
  import Objects from './_Objects.svelte';
  import Autocomplete from './_Autocomplete.svelte';
  import AutocompleteObjects from './_AutocompleteObjects.svelte';
  import Async from './_Async.svelte';
  import AddChipKeys from './_AddChipKeys.svelte';
  import Disabled from './_Disabled.svelte';
  import SvgRemoveIcons from './_SvgRemoveIcons.svelte';
</script>

<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper</h2>

  <Demo component={Simple} file="paper/Simple.svelte" />

  <Demo component={Square} file="paper/Square.svelte">Square paper</Demo>

  <Demo component={PrimaryColor} file="paper/PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={SecondaryColor} file="paper/SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo component={CustomColor} file="paper/CustomColor.svelte">
    Custom color
  </Demo>

  <Demo component={ElevationTransition} file="paper/ElevationTransition.svelte">
    Elevation and transition
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './Simple.svelte';
  import Square from './Square.svelte';
  import PrimaryColor from './PrimaryColor.svelte';
  import SecondaryColor from './SecondaryColor.svelte';
  import CustomColor from './CustomColor.svelte';
  import ElevationTransition from './ElevationTransition.svelte';
</script>

<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper</h2>

  <pre class="demo-spaced">npm i -D @smui/paper</pre>

  <Demo component={Simple} file="paper/_Simple.svelte" />

  <Demo component={Square} file="paper/_Square.svelte">Square paper</Demo>

  <Demo component={PrimaryColor} file="paper/_PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={SecondaryColor} file="paper/_SecondaryColor.svelte">
    Secondary color
  </Demo>

  <Demo
    component={CustomColor}
    files={['paper/_CustomColor.svelte', 'paper/_CustomColor.scss']}
  >
    Custom color
  </Demo>

  <Demo
    component={ElevationTransition}
    file="paper/_ElevationTransition.svelte"
  >
    Elevation and transition
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Square from './_Square.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import CustomColor from './_CustomColor.svelte';
  import ElevationTransition from './_ElevationTransition.svelte';
</script>

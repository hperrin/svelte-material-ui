<svelte:head>
  <title>Floating Action Button - SMUI</title>
</svelte:head>

<section>
  <h2>Floating Action Button</h2>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/fab</pre>

  <h5>Demos</h5>

  <Demo component={Simple} file="fab/_Simple.svelte" />

  <Demo component={PrimaryColor} file="fab/_PrimaryColor.svelte">
    Primary color
  </Demo>

  <Demo component={Exited} file="fab/_Exited.svelte">Exited</Demo>

  <Demo component={Mini} file="fab/_Mini.svelte">Mini</Demo>

  <Demo component={Extended} file="fab/_Extended.svelte">Extended</Demo>

  <Demo component={NoRipple} file="fab/_NoRipple.svelte">No Ripple</Demo>

  <Demo component={Link} file="fab/_Link.svelte">Link</Demo>

  <Demo component={Svg} file="fab/_Svg.svelte">Svg</Demo>

  <Demo
    component={Colored}
    files={['fab/_Colored.svelte', 'fab/_Colored.scss']}
  >
    Colored (using Sass mixins)
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import Exited from './_Exited.svelte';
  import Mini from './_Mini.svelte';
  import Extended from './_Extended.svelte';
  import NoRipple from './_NoRipple.svelte';
  import Link from './_Link.svelte';
  import Svg from './_Svg.svelte';
  import Colored from './_Colored.svelte';
</script>

<style>
  * :global(.flexy) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  * :global(.margins) {
    margin: 0 0.4em 0.4em 0;
  }
</style>

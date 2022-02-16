<Snackbar surface$class="bg-green" bind:this={customSnackbar}>
	<Label>Success snackbar with custom color !</Label>
</Snackbar>

<Button on:click={() => customSnackbar.open()}>
	<Label>Open Custom Snackbar</Label>
</Button>

<script lang="ts">
	import Snackbar, { Label, SnackbarComponentDev } from '@smui/snackbar';
	import Button from '@smui/button';

	let customSnackbar: SnackbarComponentDev;
</script>

<style>
	:global(.bg-green) {
		background-color: green;
	}
</style>

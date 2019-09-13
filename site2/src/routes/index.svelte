<svelte:head>
  <title>Svelte Material UI</title>
</svelte:head>

<Button>Click Me</Button>

<Card style="width: 250px;">
  <Content>You can also use <code>Content</code>.</Content>
</Card>

<script>
  import Button from '@smui/button';
  import Card, {Content} from '@smui/card';
</script>
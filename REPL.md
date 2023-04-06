# Using SMUI in the Svelte REPL

Check out an [example REPL](https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a).

SMUI components provide "bare.css" files to use in the REPL. In a `<svelte:head>` section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for SMUI:

```svelte
<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>
```

Now load the Components, from within a `<script>` section, and you can use them:

```svelte
<Button on:click={() => alert('See, I told you.')}>This is a button!</Button>

<Card style="width: 360px; margin: 2em auto;">
  <Content class="mdc-typography--body2">This is a card!</Content>
</Card>

<script>
  import Button from '@smui/button';
  import Card, { Content } from '@smui/card';
</script>
```

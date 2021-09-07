# Svelte Material UI - Text Field

Text fields offer users an area to input text, numbers, files, etc.

# Installation

```sh
npm install --save-dev @smui/textfield
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/textfield)

[See the demo code.](/site/src/routes/demo/textfield/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Textfield bind:value={name} label="Name" />
<br />
<Textfield
  type="email"
  bind:value={email}
  label="Email"
  input$autocomplete="email"
/>
<br />
<Textfield textarea bind:value={comment} label="Comment" />

<script>
  import Textfield from '@smui/textfield';

  export let name = '';
  export let email = '';
  export let comment = '';
</script>
```

# Exports

todo...

# More Information

See [Text fields](https://material.io/components/text-fields) in the Material design spec.

See [Text Field](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-textfield) in MDC-Web for information about the upstream library's architecture.

# Svelte Material UI - Tab

Tabs are navigation elements used to organize areas of an app.

# Installation

```sh
npm install --save-dev @smui/tab
```

# Examples and Usage Information

https://sveltematerialui.com/demo/tabs

[See it in action.](https://sveltematerialui.com/demo/tabs)

[See the demo code.](/site/src/routes/demo/tabs/)

# Basic Usage

Use if/else conditional constructs to display tab content, eg:

```javascript
<script>
 import TabBar from '@smui/tab-bar';
 import Tab from '@smui/tab';
 import Paper, { Subtitle } from '@smui/paper';
 let active = 'Home';
</script>
<TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <!-- Note: the `tab` property is required! -->
    <Tab {tab} tabIndicator$transition="fade">
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
{#if active ==="Home"}
	<Paper class="paper-demo">
		<Title>Paper</Title>
		<Subtitle>This is a sheet of paper.</Subtitle>
		<Content>Home Content.</Content>
	</Paper>
{:else if active ==="Merchandise"}
	<Paper class="paper-demo">
		<Title>Paper</Title>
		<Subtitle>This is a sheet of paper.</Subtitle>
		<Content>Merchandise content.</Content>
	</Paper>
 {:else if active ==="About Us"}
	<Paper class="paper-demo">
		<Title>Paper</Title>
		<Subtitle>This is a sheet of paper.</Subtitle>
		<Content>About Content.</Content>
	</Paper>
{/if}
```

# Exports

todo...

# More Information

See [Tabs](https://material.io/components/tabs) in the Material design spec.

See [Tab](https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-tab) in MDC-Web for information about the upstream library's architecture.

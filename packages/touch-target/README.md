# Svelte Material UI - Touch Target

A touch target is the area that extends beyond the visible boundary of an interactive element that still responds to touch inputs. According to the Material Design spec, touch targets should be no less than 48px x 48px in size. SMUI provides a `touch` prop on the following components that will increased their touch target.

- Button
- Chips
- Checkbox
- Radio
- Mini FAB
- Segmented Button

This component provides a wrapper to ensure that collapsing margins don't cause touch targets to overlap.

# Installation

```sh
npm install --save-dev @smui/touch-target
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/touch-target)

[See the demo code.](/site/src/routes/demo/touch-target/)

# Basic Usage

```svelte
<Wrapper>
  <Button touch><Label>Tap Me</Label></Button>
</Wrapper>

<script>
  import Wrapper from '@smui/touch-target';
  import Button, { Label } from '@smui/button';
</script>
```

# Exports

## (default)

A fragment used as a touch target wrapper.

Equivalent to the [`ClassAdder` with `Div` common component](/packages/common/README.md#classaddersvelte).

# More Information

See [Layout and typography](https://material.io/design/usability/accessibility.html#layout-and-typography) in the Material design spec.

See [Touch Target](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-touch-target) in MDC-Web for information about the upstream library's architecture.

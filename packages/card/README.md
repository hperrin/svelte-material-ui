# Svelte Material UI - Cards

A container for media and actions.

See [MDC Cards](https://material.io/develop/web/components/cards/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-card/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/card
```

# Basic Usage

```html
<script>
  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
  import Button, {Label} from '@smui/button';
  import IconButton, {Icon} from '@smui/icon-button';

  function doAction(action) {
    alert('You did an action: '+action);
  }
</script>

<Card style="width: 360px;">
  <PrimaryAction on:click={() => doAction('openItemPage')}>
    <Media style="background-image: url(https://via.placeholder.com/320x180.png?text=16x9);" aspectRatio="16x9">
      <MediaContent>
        <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
          <h2 class="mdc-typography--headline6" style="margin: 0;">Glorious Item</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0;">People are saying you need to buy it.</h3>
        </div>
      </MediaContent>
    </Media>
    <Content class="mdc-typography--body2">
      This item is so glorious that you would have to be some kind of fool to not immediately buy it.
    </Content>
  </PrimaryAction>
  <Actions>
    <ActionButtons>
      <Button on:click={() => doAction('addToCart')}>
        <Label>Add to Card</Label>
      </Button>
      <Button on:click={() => doAction('buyNow')}>
        <Label>Buy Now</Label>
      </Button>
    </ActionButtons>
    <ActionIcons>
      <IconButton on:click={() => doAction('addToFavoritesToggle')} toggle aria-label="Add to favorites" title="Add to favorites">
        <Icon class="material-icons" on>favorite</Icon>
        <Icon class="material-icons">favorite_border</Icon>
      </IconButton>
      <IconButton class="material-icons" on:click={() => doAction('share')} title="Share">share</IconButton>
    </ActionIcons>
  </Actions>
</Card>
```

# Demo

*in action:* https://sveltematerialui.com/demo/card

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/card.svelte

# Exports

## (default)

A card.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `variant`: `'raised'` - The card's style variant. ('raised' or 'outlined')
* `padded`: `false` - Whether to apply padding to the card. You can also use a `Content` component to achieve the same effect.

### Events

All standard UI events are forwarded.

## Content

A fragment used as a content area within a card.

Equivalent to the [`ClassAdder` with `Div` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

Note that you can supply your own component to a `ClassAdder` based component. You can use this to create things like list cards.

## PrimaryAction

An interactive portion of the card. Meant to be the primary way to interact with the card.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
* `color`: `null` - A color, passed to the Ripple action. (null, 'primary', or 'secondary')
* `padded`: `false` - Whether to apply padding to the area.
* `tabindex`: `'0'` - The tabindex of the area.

### Events

All standard UI events are forwarded.

## Media

An area of the card meant to show media content.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `aspectRatio`: `null` - Add styling to maintain a given aspect ratio. ('square' or '16x9')

### Events

All standard UI events are forwarded.

## MediaContent

An area of the card within the media meant to show content over top of the media.

Equivalent to the [`ClassAdder` with `Div` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

## Actions

An area of the card containing interactive actions.

### Options / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `fullBleed`: `false` - Whether to style the actions as full bleed, meaning they take up the whole width of the card.

### Events

All standard UI events are forwarded.

## ActionButtons

An area of the card, within Actions, containing buttons.

Equivalent to the [`ClassAdder` with `Div` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).

## ActionIcons

An area of the card, within Actions, containing icon buttons.

Equivalent to the [`ClassAdder` with `Div` common component](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#classaddersvelte).


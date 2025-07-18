# Svelte Material UI - Animation

Material in motion is responsive and natural. Use these easing curves and duration patterns to create smooth and consistent motion.

# Installation

```sh
npm install --save-dev @smui/animation
```

# Design

https://m2.material.io/design/motion/understanding-motion.html

# Usage

## Sass Variables

We provide timing functions which you can use with the `animation` or `transition` CSS properties

```scss
@use '@smui/animation';

.my-element--animating {
  animation: foo-keyframe 175ms animation.$standard-curve-timing-function;
}
```

| Variable                              | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `$deceleration-curve-timing-function` | Timing function to decelerate                               |
| `$standard-curve-timing-function`     | Timing function to quickly accelerate and slowly decelerate |
| `$acceleration-curve-timing-function` | Timing function to accelerate                               |
| `$sharp-curve-timing-function`        | Timing function to quickly accelerate and decelerate        |

The following functions create transitions given `$name` and the `$duration`. You can also specify `$delay`, but the default is 0ms. `$name` can either refer to the keyframe, or to CSS property used in `transition`.

```scss
@use '@smui/animation';

.my-element {
  transition: animation.exit-permanent(
    /* $name: */ opacity,
    /* $duration: */ 175ms,
    /* $delay: */ 150ms
  );
  opacity: 0;
  will-change: opacity;

  &--animating {
    transition: animation.enter(/* $name: */ opacity, /* $duration: */ 175ms);
    opacity: 1;
  }
}
```

```scss
@use '@smui/animation';

@keyframes fade-in {
  from {
    transform: translateY(-80px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.my-element {
  animation: animation.enter(/* $name: */ fade-in, /* $duration: */ 350ms);
}
```

| Function                                   | Description                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `enter($name, $duration, $delay)`          | Defines transition for entering the frame            |
| `exit-permanent($name, $duration, $delay)` | Defines transition for exiting the frame permanently |
| `exit-temporary($name, $duration, $delay)` | Defines transition for exiting the frame temporarily |

## JavaScript

These functions handle prefixing across various browsers

```js
import { getCorrectEventName } from '@smui/animation';

const eventToListenFor = getCorrectEventName(window, 'animationstart');
```

| Method Signature                                                                                                                        | Description                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `getCorrectEventName(windowObj: Window, eventType: StandardJsEventType) => StandardJsEventType \| PrefixedJsEventType`                  | Returns a JavaScript event name, prefixed if necessary. See [`types.ts`](types.ts) for supported values. |
| `getCorrectPropertyName(windowObj: Window, cssProperty: StandardCssPropertyName) => StandardCssPropertyName \| PrefixedCssPropertyName` | Returns a CSS property name, prefixed if necessary. See [`types.ts`](types.ts) for supported values.     |

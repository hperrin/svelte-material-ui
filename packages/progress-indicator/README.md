# Svelte Material UI - Progress Indicator

The SMUI Progress Indicator component exposes common foundation and component interfaces for a progress indicator. Components that implement these interfaces include linear progress and circular progress.

# Installation

```sh
npm install --save-dev @smui/progress-indicator
```

# Design

https://m2.material.io/components/progress-indicators

# Basic Usage

## MDCProgressIndicatorFoundation API

MDC Progress Indicator Foundation exposes the following methods:

| Method Signature                         | Description                                                            |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| `setDeterminate(value: boolean) => void` | Toggles the component between the determinate and indeterminate state. |
| `isDeterminate() => boolean`             | Whether or not the component is in determinate state.                  |
| `setProgress(value: number) => void`     | Sets the progress to this value. Value should be between [0, 1].       |
| `getProgress() => number`                | The current progress value in the interval [0,1].                      |
| `open() => void`                         | Puts the component in the open state.                                  |
| `close() => void`                        | Puts the component in the closed state.                                |
| `isClosed() => boolean`                  | Whether or not the progress indicator is closed.                       |

## MDCProgressIndicator Component API

MDC Progress Indicator exposes the following API:

| Method Signature       | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `determinate: boolean` | Whether the indicator is in the determinate or indeterminate state. |
| `progress: number`     | The current progress. Value should be between [0, 1].               |
| `open() => void`       | Puts the component in the open state.                               |
| `close() => void`      | Puts the component in the closed state.                             |

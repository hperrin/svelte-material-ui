<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-circular-progress': true,
    'mdc-circular-progress--indeterminate': indeterminate,
    'mdc-circular-progress--closed': closed,
    ...internalClasses,
    [className]: true,
  })}
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={1}
  aria-valuenow={indeterminate ? undefined : progress}
  {...internalAttrs}
  {...restProps}
>
  <div class="mdc-circular-progress__determinate-container">
    <svg
      class="mdc-circular-progress__determinate-circle-graphic"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="mdc-circular-progress__determinate-track"
        cx="24"
        cy="24"
        r="18"
        stroke-width="4"
      />
      <circle
        bind:this={determinateCircle}
        class="mdc-circular-progress__determinate-circle"
        cx="24"
        cy="24"
        r="18"
        stroke-dasharray="113.097"
        stroke-dashoffset="113.097"
        stroke-width="4"
        {...determinateCircleAttrs}
      />
    </svg>
  </div>
  <div class="mdc-circular-progress__indeterminate-container">
    {#each fourColor ? [1, 2, 3, 4] : [1] as color}
      <div
        class={classMap({
          'mdc-circular-progress__spinner-layer': true,
          ['mdc-circular-progress__color-' + color]: fourColor,
          [className]: true,
        })}
      >
        <div
          class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
        >
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke-dasharray="113.097"
              stroke-dashoffset="56.549"
              stroke-width="4"
            />
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke-dasharray="113.097"
              stroke-dashoffset="56.549"
              stroke-width="3.2"
            />
          </svg>
        </div>
        <div
          class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
        >
          <svg
            class="mdc-circular-progress__indeterminate-circle-graphic"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke-dasharray="113.097"
              stroke-dashoffset="56.549"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>
    {/each}
  </div>
</div>

<script lang="ts">
  import { MDCCircularProgressFoundation } from '@material/circular-progress';
  import { onMount } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * Whether to show indeterminate progress (a throbber).
     */
    indeterminate?: boolean;
    /**
     * Whether the progress indicator is closed.
     *
     * Closed progress indicators animate out, then still take up space in the
     * UI.
     */
    closed?: boolean;
    /**
     * The current progress (between 0 and 1).
     */
    progress?: number;
    /**
     * Show the four color loop animation.
     */
    fourColor?: boolean;
  };
  let {
    use = [],
    class: className = '',
    indeterminate = false,
    closed = false,
    progress = 0,
    fourColor = false,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCCircularProgressFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let determinateCircleAttrs: { [k: string]: string | undefined } = $state({});
  let determinateCircle: SVGCircleElement;

  $effect(() => {
    if (instance && instance.isDeterminate() !== !indeterminate) {
      instance.setDeterminate(!indeterminate);
    }
  });

  $effect(() => {
    if (instance && instance.getProgress() !== progress) {
      instance.setProgress(progress);
    }
  });

  $effect(() => {
    if (instance) {
      if (closed) {
        instance.close();
      } else {
        instance.open();
      }
    }
  });

  onMount(() => {
    instance = new MDCCircularProgressFoundation({
      addClass,
      getDeterminateCircleAttribute: getDeterminateCircleAttr,
      hasClass,
      removeClass,
      removeAttribute: removeAttr,
      setAttribute: addAttr,
      setDeterminateCircleAttribute: addDeterminateCircleAttr,
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name: string) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  function getDeterminateCircleAttr(name: string) {
    return name in determinateCircleAttrs
      ? (determinateCircleAttrs[name] ?? null)
      : determinateCircle.getAttribute(name);
  }

  function addDeterminateCircleAttr(name: string, value: string) {
    if (determinateCircleAttrs[name] !== value) {
      determinateCircleAttrs[name] = value;
    }
  }

  export function getElement() {
    return element;
  }
</script>

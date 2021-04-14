<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-circular-progress': true,
    'mdc-circular-progress--indeterminate': indeterminate,
    'mdc-circular-progress--closed': closed,
    ...internalClasses,
  })}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="1"
  aria-valuenow={indeterminate ? null : `${progress.toLocaleString()}`}
  {...internalAttrs}
  {...$$restProps}
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
          [className]: true,
          'mdc-circular-progress__spinner-layer': true,
          ['mdc-circular-progress__color-' + color]: fourColor,
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

<script>
  import { MDCCircularProgressFoundation } from '@material/circular-progress';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let indeterminate = false;
  export let closed = false;
  export let progress = 0;
  export let fourColor = false;

  let element;
  let instance;
  let internalClasses = {};
  let internalAttrs = {};
  let determinateCircleAttrs = {};
  let determinateCircle;

  $: if (instance && instance.isDeterminate() !== !indeterminate) {
    instance.setDeterminate(!indeterminate);
  }

  $: if (instance && instance.getProgress() !== progress) {
    instance.setProgress(progress);
  }

  $: if (instance) {
    if (closed) {
      instance.close();
    } else {
      instance.open();
    }
  }

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
      instance.destroy();
    };
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  function getDeterminateCircleAttr(name) {
    return name in determinateCircleAttrs
      ? determinateCircleAttrs[name]
      : determinateCircle.getAttribute(name);
  }

  function addDeterminateCircleAttr(name, value) {
    if (determinateCircleAttrs[name] !== value) {
      determinateCircleAttrs[name] = value;
    }
  }

  export function getElement() {
    return element;
  }
</script>

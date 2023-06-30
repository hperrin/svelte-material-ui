<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-linear-progress': true,
    'mdc-linear-progress--indeterminate': indeterminate,
    'mdc-linear-progress--closed': closed,
    'mdc-data-table__linear-progress': context === 'data-table',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="progressbar"
  aria-valuemin={0}
  aria-valuemax={1}
  aria-valuenow={indeterminate ? undefined : progress}
  on:transitionend={() => instance && instance.handleTransitionEnd()}
  {...internalAttrs}
  {...$$restProps}
>
  <div class="mdc-linear-progress__buffer">
    <div
      class="mdc-linear-progress__buffer-bar"
      style={Object.entries(bufferBarStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    />
    <div class="mdc-linear-progress__buffer-dots" />
  </div>
  <div
    class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
    style={Object.entries(primaryBarStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ')}
  >
    <span class="mdc-linear-progress__bar-inner" />
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner" />
  </div>
</div>

<script lang="ts">
  import type { MDCResizeObserver } from '@material/linear-progress';
  import { MDCLinearProgressFoundation } from '@material/linear-progress';
  import { onMount, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    indeterminate?: boolean;
    closed?: boolean;
    progress?: number;
    buffer?: number | undefined;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let indeterminate = false;
  export let closed = false;
  export let progress = 0;
  export let buffer: number | undefined = undefined;

  let element: HTMLDivElement;
  let instance: MDCLinearProgressFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let internalStyles: { [k: string]: string } = {};
  let bufferBarStyles: { [k: string]: string } = {};
  let primaryBarStyles: { [k: string]: string } = {};
  let context = getContext<string | undefined>('SMUI:linear-progress:context');
  let closedStore = getContext<Writable<boolean> | undefined>(
    'SMUI:linear-progress:closed'
  );

  $: if (closedStore) {
    $closedStore = closed;
  }

  $: if (instance && instance.isDeterminate() !== !indeterminate) {
    instance.setDeterminate(!indeterminate);
  }

  $: if (instance && instance.getProgress() !== progress) {
    instance.setProgress(progress);
  }

  $: if (instance) {
    if (buffer == null) {
      instance.setBuffer(1);
    } else {
      instance.setBuffer(buffer);
    }
  }

  $: if (instance) {
    if (closed) {
      instance.close();
    } else {
      instance.open();
    }
  }

  onMount(() => {
    instance = new MDCLinearProgressFoundation({
      addClass,
      forceLayout: () => {
        getElement().getBoundingClientRect();
      },
      setBufferBarStyle: addBufferBarStyle,
      setPrimaryBarStyle: addPrimaryBarStyle,
      hasClass,
      removeAttribute: removeAttr,
      removeClass,
      setAttribute: addAttr,
      setStyle: addStyle,
      attachResizeObserver: (callback) => {
        const RO = window.ResizeObserver;
        if (RO) {
          const ro = new RO(
            callback as unknown as ResizeObserverCallback
          ) as unknown as MDCResizeObserver;
          ro.observe(getElement());
          return ro;
        }

        return null;
      },
      getWidth: () => getElement().offsetWidth,
    });

    instance.init();

    return () => {
      instance.destroy();
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

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addBufferBarStyle(name: string, value: string) {
    if (bufferBarStyles[name] != value) {
      if (value === '' || value == null) {
        delete bufferBarStyles[name];
        bufferBarStyles = bufferBarStyles;
      } else {
        bufferBarStyles[name] = value;
      }
    }
  }

  function addPrimaryBarStyle(name: string, value: string) {
    if (primaryBarStyles[name] != value) {
      if (value === '' || value == null) {
        delete primaryBarStyles[name];
        primaryBarStyles = primaryBarStyles;
      } else {
        primaryBarStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>

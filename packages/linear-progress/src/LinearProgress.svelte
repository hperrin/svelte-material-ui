<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
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
  {...internalAttrs}
  {...restProps}
  ontransitionend={(e) => {
    if (instance) {
      instance.handleTransitionEnd();
    }
    restProps.ontransitionend?.(e);
  }}
>
  <div class="mdc-linear-progress__buffer">
    <div
      class="mdc-linear-progress__buffer-bar"
      style={Object.entries(bufferBarStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    ></div>
    <div class="mdc-linear-progress__buffer-dots"></div>
  </div>
  <div
    class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
    style={Object.entries(primaryBarStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ')}
  >
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>

<script lang="ts">
  import type { MDCResizeObserver } from '@material/linear-progress';
  import { MDCLinearProgressFoundation } from '@material/linear-progress';
  import { onMount, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
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
     * A list of CSS styles.
     */
    style?: string;
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
     * An optional buffer section of the progress bar.
     *
     * This can be used to show when, for example, a video has a current
     * position and a buffered position.
     */
    buffer?: number | undefined;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    indeterminate = false,
    closed = false,
    progress = 0,
    buffer = undefined,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCLinearProgressFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let bufferBarStyles: { [k: string]: string } = $state({});
  let primaryBarStyles: { [k: string]: string } = $state({});
  let context = getContext<string | undefined>('SMUI:linear-progress:context');
  let closedStore = getContext<Writable<boolean> | undefined>(
    'SMUI:linear-progress:closed',
  );

  $effect(() => {
    if (closedStore) {
      $closedStore = closed;
    }
  });

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
      if (buffer == null) {
        instance.setBuffer(1);
      } else {
        instance.setBuffer(buffer);
      }
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
            callback as unknown as ResizeObserverCallback,
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

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function addBufferBarStyle(name: string, value: string) {
    if (bufferBarStyles[name] != value) {
      if (value === '' || value == null) {
        delete bufferBarStyles[name];
      } else {
        bufferBarStyles[name] = value;
      }
    }
  }

  function addPrimaryBarStyle(name: string, value: string) {
    if (primaryBarStyles[name] != value) {
      if (value === '' || value == null) {
        delete primaryBarStyles[name];
      } else {
        primaryBarStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element;
  }
</script>

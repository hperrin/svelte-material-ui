<svelte:options runes />

<aside
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'mdc-snackbar': true,
    'mdc-snackbar--stacked': variant === 'stacked',
    'mdc-snackbar--leading': leading,
    ...internalClasses,
    [className]: true,
  })}
  {...exclude(restProps, ['surface$'])}
  onkeydown={(e) => {
    if (instance) {
      instance.handleKeyDown(e);
    }
    restProps.onkeydown?.(e);
  }}
  onSMUISnackbarClosed={(e) => {
    handleClosed();
    restProps.onSMUISnackbarClosed?.(e);
  }}
>
  <div
    use:useActions={surface$use}
    class={classMap({
      'mdc-snackbar__surface': true,
      [surface$class]: true,
    })}
    role="status"
    aria-relevant="additions"
    {...prefixFilter(restProps, 'surface$')}
    onclick={(e) => {
      handleSurfaceClick(e);
      restProps.surface$onclick?.(e);
    }}
  >
    {@render children?.()}
  </div>
</aside>

<script module lang="ts">
  let waiting = Promise.resolve();
</script>

<script lang="ts">
  import { MDCSnackbarFoundation, util } from '@material/snackbar';
  import { ponyfill } from '@material/dom';
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  const { closest } = ponyfill;

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

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
     * The styling variant of the snackbar.
     *
     * Undefined is the default variant. Stacked means the text goes above the
     * actions and icons.
     */
    variant?: 'stacked' | undefined;
    /**
     * Whether to position the snackbar in the leading portion of the screen.
     */
    leading?: boolean;
    /**
     * How many milliseconds to wait before automatically closing.
     */
    timeoutMs?: number;
    /**
     * Whether to close the snackbar when the escape key is pressed.
     *
     * This only works when an element inside the snackbar has focus.
     */
    closeOnEscape?: boolean;
    /**
     * Text content to place in the label.
     */
    labelText?: string;
    /**
     * Text content to place in the action button.
     */
    actionButtonText?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    surface$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    surface$class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    variant,
    leading = false,
    timeoutMs = 5000,
    closeOnEscape = true,
    labelText = uninitializedValue as unknown as string,
    actionButtonText = uninitializedValue as unknown as string,
    surface$use = [],
    surface$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'aside', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    } = $props();

  let element: HTMLElement;
  let instance: MDCSnackbarFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let closeResolve: (value: void) => void;
  let closePromise = new Promise<void>((resolve) => (closeResolve = resolve));

  setContext('SMUI:label:context', 'snackbar');

  $effect(() => {
    if (instance && instance.getTimeoutMs() !== timeoutMs) {
      instance.setTimeoutMs(timeoutMs);
    }
  });

  $effect(() => {
    if (instance && instance.getCloseOnEscape() !== closeOnEscape) {
      instance.setCloseOnEscape(closeOnEscape);
    }
  });

  $effect(() => {
    if (
      instance &&
      !isUninitializedValue(labelText) &&
      getLabelElement().textContent !== labelText
    ) {
      getLabelElement().textContent = labelText;
    }
  });

  $effect(() => {
    if (
      instance &&
      !isUninitializedValue(actionButtonText) &&
      getActionButtonElement().textContent !== actionButtonText
    ) {
      getActionButtonElement().textContent = actionButtonText;
    }
  });

  onMount(() => {
    instance = new MDCSnackbarFoundation({
      addClass,
      announce: () => util.announce(getLabelElement()),
      notifyClosed: (reason) =>
        dispatch(getElement(), 'SMUISnackbarClosed', reason ? { reason } : {}),
      notifyClosing: (reason) =>
        dispatch(getElement(), 'SMUISnackbarClosing', reason ? { reason } : {}),
      notifyOpened: () => dispatch(getElement(), 'SMUISnackbarOpened'),
      notifyOpening: () => dispatch(getElement(), 'SMUISnackbarOpening'),
      removeClass,
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

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

  function handleSurfaceClick(event: MouseEvent) {
    const target = event.target;
    if (instance) {
      if (closest(target as HTMLElement, '.mdc-snackbar__action')) {
        instance.handleActionButtonClick(event);
      } else if (closest(target as HTMLElement, '.mdc-snackbar__dismiss')) {
        instance.handleActionIconClick(event);
      }
    }
  }

  function handleClosed() {
    closeResolve();
    closePromise = new Promise((resolve) => (closeResolve = resolve));
  }

  export function open() {
    waiting = waiting.then(() => {
      instance?.open();
      return closePromise;
    });
  }

  export function forceOpen() {
    return instance?.open();
  }

  export function close(reason?: string) {
    return instance?.close(reason);
  }

  export function isOpen() {
    if (instance == null) {
      throw new Error('Instance is undefined.');
    }
    return instance.isOpen();
  }

  export function getLabelElement() {
    return (
      getElement().querySelector<HTMLElement>('.mdc-snackbar__label') ??
      document.createElement('div')
    );
  }

  export function getActionButtonElement() {
    return (
      getElement().querySelector<HTMLElement>('.mdc-snackbar__action') ??
      document.createElement('button')
    );
  }

  export function getElement() {
    return element;
  }
</script>

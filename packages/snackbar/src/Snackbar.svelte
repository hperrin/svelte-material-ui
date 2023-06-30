<aside
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-snackbar': true,
    'mdc-snackbar--stacked': variant === 'stacked',
    'mdc-snackbar--leading': leading,
    ...internalClasses,
  })}
  on:SMUISnackbar:closed={handleClosed}
  on:keydown={instance && instance.handleKeyDown.bind(instance)}
  {...exclude($$restProps, ['surface$'])}
>
  <div
    use:useActions={surface$use}
    class={classMap({
      [surface$class]: true,
      'mdc-snackbar__surface': true,
    })}
    on:click={handleSurfaceClick}
    role="status"
    aria-relevant="additions"
    {...prefixFilter($$restProps, 'surface$')}
  >
    <slot />
  </div>
</aside>

<script context="module" lang="ts">
  let waiting = Promise.resolve();
</script>

<script lang="ts">
  import { MDCSnackbarFoundation, util } from '@material/snackbar';
  import { ponyfill } from '@material/dom';
  import { onMount, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  const { closest } = ponyfill;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    variant?: string;
    leading?: boolean;
    timeoutMs?: number;
    closeOnEscape?: boolean;
    labelText?: string;
    actionButtonText?: string;
    surface$class?: string;
    surface$use?: ActionArray;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'aside', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['div'] as `surface\$${k}`]?: SmuiElementPropMap['div'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());
  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let variant = '';
  export let leading = false;
  export let timeoutMs = 5000;
  export let closeOnEscape = true;
  export let labelText: UninitializedValue | string = uninitializedValue;
  export let actionButtonText: UninitializedValue | string = uninitializedValue;
  export let surface$class = '';
  export let surface$use: ActionArray = [];

  let element: HTMLElement;
  let instance: MDCSnackbarFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let closeResolve: (value: void) => void;
  let closePromise = new Promise<void>((resolve) => (closeResolve = resolve));

  setContext('SMUI:label:context', 'snackbar');

  $: if (instance && instance.getTimeoutMs() !== timeoutMs) {
    instance.setTimeoutMs(timeoutMs);
  }

  $: if (instance && instance.getCloseOnEscape() !== closeOnEscape) {
    instance.setCloseOnEscape(closeOnEscape);
  }

  $: if (
    instance &&
    !isUninitializedValue(labelText) &&
    getLabelElement().textContent !== labelText
  ) {
    getLabelElement().textContent = labelText;
  }

  $: if (
    instance &&
    !isUninitializedValue(actionButtonText) &&
    getActionButtonElement().textContent !== actionButtonText
  ) {
    getActionButtonElement().textContent = actionButtonText;
  }

  onMount(() => {
    instance = new MDCSnackbarFoundation({
      addClass,
      announce: () => util.announce(getLabelElement()),
      notifyClosed: (reason) =>
        dispatch(
          getElement(),
          'SMUISnackbar:closed',
          reason ? { reason } : {},
          undefined,
          true
        ),
      notifyClosing: (reason) =>
        dispatch(
          getElement(),
          'SMUISnackbar:closing',
          reason ? { reason } : {},
          undefined,
          true
        ),
      notifyOpened: () =>
        dispatch(
          getElement(),
          'SMUISnackbar:opened',
          undefined,
          undefined,
          true
        ),
      notifyOpening: () =>
        dispatch(
          getElement(),
          'SMUISnackbar:opening',
          undefined,
          undefined,
          true
        ),
      removeClass,
    });

    instance.init();

    return () => {
      instance.destroy();
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
      instance.open();
      return closePromise;
    });
  }

  export function forceOpen() {
    return instance.open();
  }

  export function close(reason?: string) {
    return instance.close(reason);
  }

  export function isOpen() {
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

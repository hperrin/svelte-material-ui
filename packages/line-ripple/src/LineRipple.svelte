<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-line-ripple': true,
    'mdc-line-ripple--active': active,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...restProps}
></div>

<script lang="ts">
  import { MDCLineRippleFoundation } from '@material/line-ripple';
  import { onMount } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    useActions,
    SvelteEventManager,
  } from '@smui/common/internal';

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
     * Whether the line is active.
     */
    active?: boolean;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    active = false,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCLineRippleFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});

  onMount(() => {
    instance = new MDCLineRippleFoundation({
      addClass,
      removeClass,
      hasClass,
      setStyle: addStyle,
      registerEventHandler: (evtType, handler) =>
        eventManager.on(getElement(), evtType, handler),
      deregisterEventHandler: (evtType, handler) =>
        eventManager.off(getElement(), evtType, handler),
    });

    instance.init();

    return () => {
      instance?.destroy();
      eventManager.clear();
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

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function activate() {
    instance?.activate();
  }

  export function deactivate() {
    instance?.deactivate();
  }

  export function setRippleCenter(xCoordinate: number) {
    instance?.setRippleCenter(xCoordinate);
  }

  export function getElement() {
    return element;
  }
</script>

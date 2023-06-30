<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-notched-outline': true,
    'mdc-notched-outline--notched': notched,
    'mdc-notched-outline--no-label': noLabel,
    ...internalClasses,
  })}
  on:SMUIFloatingLabel:mount={handleFloatingLabelMount}
  on:SMUIFloatingLabel:unmount={() => (floatingLabel = undefined)}
  {...$$restProps}
>
  <div class="mdc-notched-outline__leading" />
  {#if !noLabel}
    <div
      class="mdc-notched-outline__notch"
      style={Object.entries(notchStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      <slot />
    </div>
  {/if}
  <div class="mdc-notched-outline__trailing" />
</div>

<script lang="ts">
  import { MDCNotchedOutlineFoundation } from '@material/notched-outline';
  import { onMount } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';
  import type { SMUIFloatingLabelAccessor } from '@smui/floating-label';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    notched?: boolean;
    noLabel?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let notched = false;
  export let noLabel = false;

  let element: HTMLDivElement;
  let instance: MDCNotchedOutlineFoundation;
  let floatingLabel: SMUIFloatingLabelAccessor | undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let notchStyles: { [k: string]: string } = {};

  $: if (floatingLabel) {
    floatingLabel.addStyle('transition-duration', '0s');
    addClass('mdc-notched-outline--upgraded');
    requestAnimationFrame(() => {
      if (floatingLabel) {
        floatingLabel.removeStyle('transition-duration');
      }
    });
  } else {
    removeClass('mdc-notched-outline--upgraded');
  }

  onMount(() => {
    instance = new MDCNotchedOutlineFoundation({
      addClass,
      removeClass,
      setNotchWidthProperty: (width) => addNotchStyle('width', width + 'px'),
      removeNotchWidthProperty: () => removeNotchStyle('width'),
    });

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  function handleFloatingLabelMount(
    event: CustomEvent<SMUIFloatingLabelAccessor>
  ) {
    floatingLabel = event.detail;
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

  function addNotchStyle(name: string, value: string) {
    if (notchStyles[name] != value) {
      if (value === '' || value == null) {
        delete notchStyles[name];
        notchStyles = notchStyles;
      } else {
        notchStyles[name] = value;
      }
    }
  }

  function removeNotchStyle(name: string) {
    if (name in notchStyles) {
      delete notchStyles[name];
      notchStyles = notchStyles;
    }
  }

  export function notch(notchWidth: number) {
    instance.notch(notchWidth);
  }

  export function closeNotch() {
    instance.closeNotch();
  }

  export function getElement() {
    return element;
  }
</script>

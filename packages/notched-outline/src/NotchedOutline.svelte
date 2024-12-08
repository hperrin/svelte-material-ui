<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-notched-outline': true,
    'mdc-notched-outline--notched': notched,
    'mdc-notched-outline--no-label': noLabel,
    ...internalClasses,
  })}
  {...restProps}
>
  <div class="mdc-notched-outline__leading"></div>
  {#if !noLabel}
    <div
      class="mdc-notched-outline__notch"
      style={Object.entries(notchStyles)
        .map(([name, value]) => `${name}: ${value};`)
        .join(' ')}
    >
      {@render children?.()}
    </div>
  {/if}
  <div class="mdc-notched-outline__trailing"></div>
</div>

<script lang="ts">
  import { MDCNotchedOutlineFoundation } from '@material/notched-outline';
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';
  import type { SMUIFloatingLabelAccessor } from '@smui/floating-label';

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
     * The notched state of the outline.
     */
    notched?: boolean;
    /**
     * Don't render a label.
     */
    noLabel?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    notched = false,
    noLabel = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCNotchedOutlineFoundation | undefined = $state();
  let floatingLabel: SMUIFloatingLabelAccessor | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let notchStyles: { [k: string]: string } = $state({});

  let previousFloatingLabel: SMUIFloatingLabelAccessor | undefined = undefined;
  $effect(() => {
    if (floatingLabel !== previousFloatingLabel) {
      if (floatingLabel) {
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
      previousFloatingLabel = floatingLabel;
    }
  });

  setContext(
    'SMUI:floating-label:mount',
    (accessor: SMUIFloatingLabelAccessor) => {
      floatingLabel = accessor;
    },
  );
  setContext('SMUI:floating-label:unmount', () => {
    floatingLabel = undefined;
  });

  onMount(() => {
    instance = new MDCNotchedOutlineFoundation({
      addClass,
      removeClass,
      setNotchWidthProperty: (width) => addNotchStyle('width', width + 'px'),
      removeNotchWidthProperty: () => removeNotchStyle('width'),
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

  function addNotchStyle(name: string, value: string) {
    if (notchStyles[name] != value) {
      if (value === '' || value == null) {
        delete notchStyles[name];
      } else {
        notchStyles[name] = value;
      }
    }
  }

  function removeNotchStyle(name: string) {
    if (name in notchStyles) {
      delete notchStyles[name];
    }
  }

  export function notch(notchWidth: number) {
    instance?.notch(notchWidth);
  }

  export function closeNotch() {
    instance?.closeNotch();
  }

  export function getElement() {
    return element;
  }
</script>

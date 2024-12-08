<svelte:options runes />

<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-tab-indicator': true,
    'mdc-tab-indicator--active': active,
    'mdc-tab-indicator--fade': transition === 'fade',
    ...internalClasses,
  })}
  {...exclude(restProps, ['content$'])}
>
  <span
    bind:this={content}
    use:useActions={content$use}
    class={classMap({
      [content$class]: true,
      'mdc-tab-indicator__content': true,
      'mdc-tab-indicator__content--underline': type === 'underline',
      'mdc-tab-indicator__content--icon': type === 'icon',
    })}
    style={Object.entries(contentStyles)
      .map(([name, value]) => `${name}: ${value};`)
      .join(' ')}
    aria-hidden={type === 'icon' ? 'true' : undefined}
    {...prefixFilter(restProps, 'content$')}>{@render children?.()}</span
  >
</span>

<script lang="ts">
  import {
    MDCFadingTabIndicatorFoundation,
    MDCSlidingTabIndicatorFoundation,
  } from '@material/tab-indicator';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
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
     * Whether the tab associated with this indicator is active.
     */
    active?: boolean;
    /**
     * The visual styling of the tab indictor.
     */
    type?: 'underline' | 'icon';
    /**
     * The visual transition used when the active tab changes.
     */
    transition?: 'slide' | 'fade';
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    content$use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    content$class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    active = $bindable(false),
    type = 'underline',
    transition = 'slide',
    content$use = [],
    content$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'span', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `content\$${k}`]?: SmuiElementPropMap['span'][k];
    } = $props();

  let element: HTMLSpanElement;
  let instance:
    | MDCFadingTabIndicatorFoundation
    | MDCSlidingTabIndicatorFoundation
    | undefined = $state();
  let content: HTMLSpanElement;
  let internalClasses: { [k: string]: boolean } = $state({});
  let contentStyles: { [k: string]: string } = $state({});
  let changeSets: (() => void)[][] = $state([]);

  let oldTransition = transition;
  $effect(() => {
    if (oldTransition !== transition) {
      oldTransition = transition;
      instance && instance.destroy();
      internalClasses = {};
      contentStyles = {};
      instance = getInstance();
      instance.init();
    }
  });

  // Use sets of changes for DOM updates, to facilitate animations.
  $effect.pre(() => {
    if (changeSets.length) {
      requestAnimationFrame(() => {
        const changeSet = changeSets.shift() ?? [];
        for (const fn of changeSet) {
          fn();
        }
      });
    }
  });

  onMount(() => {
    instance = getInstance();

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

  function getInstance() {
    const Foundation =
      {
        fade: MDCFadingTabIndicatorFoundation,
        slide: MDCSlidingTabIndicatorFoundation,
      }[transition] || MDCSlidingTabIndicatorFoundation;

    return new Foundation({
      addClass: (...props) => doChange(() => addClass(...props)),
      removeClass: (...props) => doChange(() => removeClass(...props)),
      computeContentClientRect,
      setContentStyleProperty: (...props) =>
        doChange(() => addContentStyle(...props)),
    });
  }

  function doChange(fn: () => void) {
    if (changeSets.length) {
      changeSets[changeSets.length - 1].push(fn);
    } else {
      fn();
    }
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

  function addContentStyle(name: string, value: string) {
    if (contentStyles[name] != value) {
      if (value === '' || value == null) {
        delete contentStyles[name];
      } else {
        contentStyles[name] = value;
      }
    }
  }

  export function activate(previousIndicatorClientRect: DOMRect) {
    active = true;
    instance?.activate(previousIndicatorClientRect);
  }

  export function deactivate() {
    active = false;
    instance?.deactivate();
  }

  export function computeContentClientRect() {
    changeSets.push([]);
    return content.getBoundingClientRect();
  }

  export function getElement() {
    return element;
  }
</script>

<span
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-tab-indicator': true,
    'mdc-tab-indicator--active': active,
    'mdc-tab-indicator--fade': transition === 'fade',
    ...internalClasses,
  })}
  {...exclude($$restProps, ['content$'])}
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
    {...prefixFilter($$restProps, 'content$')}><slot /></span
  >
</span>

<script lang="ts">
  import {
    MDCFadingTabIndicatorFoundation,
    MDCSlidingTabIndicatorFoundation,
  } from '@material/tab-indicator';
  import { onMount } from 'svelte';
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
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    active?: boolean;
    type?: 'underline' | 'icon';
    transition?: 'slide' | 'fade';
    content$use?: ActionArray;
    content$class?: string;
  };
  type $$Props = OwnProps &
    SmuiAttrs<'span', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['span'] as `content\$${k}`]?: SmuiElementPropMap['span'][k];
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let active = false;
  export let type: 'underline' | 'icon' = 'underline';
  export let transition: 'slide' | 'fade' = 'slide';
  export let content$use: ActionArray = [];
  export let content$class = '';

  let element: HTMLSpanElement;
  let instance:
    | MDCFadingTabIndicatorFoundation
    | MDCSlidingTabIndicatorFoundation;
  let content: HTMLSpanElement;
  let internalClasses: { [k: string]: boolean } = {};
  let contentStyles: { [k: string]: string } = {};
  let changeSets: (() => void)[][] = [];

  let oldTransition = transition;
  $: if (oldTransition !== transition) {
    oldTransition = transition;
    instance && instance.destroy();
    internalClasses = {};
    contentStyles = {};
    instance = getInstance();
    instance.init();
  }

  // Use sets of changes for DOM updates, to facilitate animations.
  $: if (changeSets.length) {
    requestAnimationFrame(() => {
      const changeSet = changeSets.shift() ?? [];
      changeSets = changeSets;
      for (const fn of changeSet) {
        fn();
      }
    });
  }

  onMount(() => {
    instance = getInstance();

    instance.init();

    return () => {
      instance.destroy();
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
        contentStyles = contentStyles;
      } else {
        contentStyles[name] = value;
      }
    }
  }

  export function activate(previousIndicatorClientRect: DOMRect) {
    active = true;
    instance.activate(previousIndicatorClientRect);
  }

  export function deactivate() {
    active = false;
    instance.deactivate();
  }

  export function computeContentClientRect() {
    changeSets.push([]);
    changeSets = changeSets;
    return content.getBoundingClientRect();
  }

  export function getElement() {
    return element;
  }
</script>

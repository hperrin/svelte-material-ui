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
    aria-hidden={type === 'icon' ? 'true' : null}
    {...prefixFilter($$restProps, 'content$')}><slot /></span
  >
</span>

<script>
  import {
    MDCFadingTabIndicatorFoundation,
    MDCSlidingTabIndicatorFoundation,
  } from '@material/tab-indicator';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let active = false;
  export let type = 'underline';
  export let transition = 'slide';
  export let content$use = [];
  export let content$class = '';

  let element;
  let instance;
  let content;
  let internalClasses = {};
  let contentStyles = {};
  let changeSets = [];

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
      const changeSet = changeSets.shift();
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

    return Foundation
      ? new Foundation({
          addClass: (...props) => doChange(() => addClass(...props)),
          removeClass: (...props) => doChange(() => removeClass(...props)),
          computeContentClientRect,
          setContentStyleProperty: (...props) =>
            doChange(() => addContentStyle(...props)),
        })
      : undefined;
  }

  function doChange(fn) {
    if (changeSets.length) {
      changeSets[changeSets.length - 1].push(fn);
    } else {
      fn();
    }
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

  function addContentStyle(name, value) {
    if (contentStyles[name] != value) {
      if (value === '' || value == null) {
        delete contentStyles[name];
        contentStyles = contentStyles;
      } else {
        contentStyles[name] = value;
      }
    }
  }

  export function activate(previousIndicatorClientRect) {
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

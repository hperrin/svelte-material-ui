<svelte:component
  this={component}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple: ripple && !$nonInteractive,
        unbounded: false,
        addClass,
        removeClass,
        addStyle,
      },
    ],
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-chip': true,
    'mdc-chip--selected': selected,
    'mdc-chip--touch': touch,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  role="row"
  on:transitionend={(event) => instance && instance.handleTransitionEnd(event)}
  on:click={() => instance && instance.handleClick()}
  on:keydown={(event) => instance && instance.handleKeydown(event)}
  on:focusin={(event) => instance && instance.handleFocusIn(event)}
  on:focusout={(event) => instance && instance.handleFocusOut(event)}
  on:MDCChipTrailingAction:interaction={() =>
    instance && instance.handleTrailingActionInteraction()}
  on:MDCChipTrailingAction:navigation={(event) =>
    instance && instance.handleTrailingActionNavigation(event)}
  on:SMUI:chip:primary-action:mount={(event) =>
    (primaryActionAccessor = event.detail)}
  on:SMUI:chip:primary-action:unmount={() =>
    (primaryActionAccessor = undefined)}
  on:SMUI:chip:trailing-action:mount={(event) =>
    (trailingActionAccessor = event.detail)}
  on:SMUI:chip:trailing-action:unmount={() =>
    (trailingActionAccessor = undefined)}
  {...$$restProps}
>
  {#if ripple && !$nonInteractive}
    <div class="mdc-chip__ripple" />
  {/if}
  <slot />
  {#if touch}
    <div class="mdc-chip__touch" />
  {/if}
</svelte:component>

<script>
  import { MDCChipFoundation } from '@material/chips';
  import { onMount, setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal.js';
  import Ripple from '@smui/ripple/bare.js';
  import Div from '@smui/common/Div.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  let chipId;
  export { chipId as chip };
  export let ripple = true;
  export let touch = false;
  export let shouldRemoveOnTrailingIconClick = true;
  export let shouldFocusPrimaryActionOnClick = true;

  let element;
  let instance;
  let internalClasses = {};
  let leadingIconClasses = {};
  let internalStyles = {};
  const initialSelectedStore = getContext('SMUI:chip:initialSelected');
  let selected = $initialSelectedStore;
  let primaryActionAccessor;
  let trailingActionAccessor;
  const nonInteractive = getContext('SMUI:chip:nonInteractive');
  const choice = getContext('SMUI:chip:choice');
  const index = getContext('SMUI:chip:index');

  export let component = Div;

  const shouldRemoveOnTrailingIconClickStore = writable(
    shouldRemoveOnTrailingIconClick
  );
  $: $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick;
  setContext(
    'SMUI:chip:shouldRemoveOnTrailingIconClick',
    shouldRemoveOnTrailingIconClickStore
  );
  const isSelectedStore = writable(selected);
  $: $isSelectedStore = selected;
  setContext('SMUI:chip:isSelected', isSelectedStore);
  const leadingIconClassesStore = writable(leadingIconClasses);
  $: $leadingIconClassesStore = leadingIconClasses;
  setContext('SMUI:chip:leadingIconClasses', leadingIconClassesStore);
  setContext('SMUI:chip:focusable', ($choice && selected) || $index === 0);

  if (!chipId) {
    throw new Error(
      'The chip property is required! It should be passed down from the Set to the Chip.'
    );
  }

  $: if (
    instance &&
    instance.getShouldRemoveOnTrailingIconClick() !==
      shouldRemoveOnTrailingIconClick
  ) {
    instance.setShouldRemoveOnTrailingIconClick(
      shouldRemoveOnTrailingIconClick
    );
  }

  $: if (instance) {
    instance.setShouldFocusPrimaryActionOnClick(
      shouldFocusPrimaryActionOnClick
    );
  }

  onMount(() => {
    instance = new MDCChipFoundation({
      addClass,
      addClassToLeadingIcon: addLeadingIconClass,
      eventTargetHasClass: (target, className) =>
        target ? target.classList.contains(className) : false,
      focusPrimaryAction: () => {
        if (primaryActionAccessor) {
          primaryActionAccessor.focus();
        }
      },
      focusTrailingAction: () => {
        if (trailingActionAccessor) {
          trailingActionAccessor.focus();
        }
      },
      getAttribute: (attr) => getElement().getAttribute(attr),
      getCheckmarkBoundingClientRect: () => {
        const target = getElement().querySelector('.mdc-chip__checkmark');
        if (target) {
          return target.getBoundingClientRect();
        }
        return null;
      },
      getComputedStyleValue: getStyle,
      getRootBoundingClientRect: () => getElement().getBoundingClientRect(),
      hasClass,
      hasLeadingIcon: () => {
        const target = getElement().querySelector('.mdc-chip__icon--leading');
        return !!target;
      },
      isRTL: () =>
        getComputedStyle(getElement()).getPropertyValue('direction') === 'rtl',
      isTrailingActionNavigable: () => {
        if (trailingActionAccessor) {
          return trailingActionAccessor.isNavigable();
        }
        return false;
      },
      notifyInteraction: () =>
        dispatch(getElement(), 'MDCChip:interaction', { chipId }),
      notifyNavigation: (key, source) =>
        dispatch(getElement(), 'MDCChip:navigation', { chipId, key, source }),
      notifyRemoval: (removedAnnouncement) => {
        dispatch(getElement(), 'MDCChip:removal', {
          chipId,
          removedAnnouncement,
        });
      },
      notifySelection: (selected, shouldIgnore) =>
        dispatch(getElement(), 'MDCChip:selection', {
          chipId,
          selected,
          shouldIgnore,
        }),
      notifyTrailingIconInteraction: () =>
        dispatch(getElement(), 'MDCChip:trailingIconInteraction', { chipId }),
      notifyEditStart: () => {
        /* Not Implemented. */
      },
      notifyEditFinish: () => {
        /* Not Implemented. */
      },
      removeClass,
      removeClassFromLeadingIcon: removeLeadingIconClass,
      removeTrailingActionFocus: () => {
        if (trailingActionAccessor) {
          trailingActionAccessor.removeFocus();
        }
      },
      setPrimaryActionAttr: (attr, value) => {
        if (primaryActionAccessor) {
          primaryActionAccessor.addAttr(attr, value);
        }
      },
      setStyleProperty: addStyle,
    });

    const accessor = {
      chipId,
      get selected() {
        return selected;
      },
      focusPrimaryAction,
      focusTrailingAction,
      removeFocus,
      setSelectedFromChipSet,
    };

    dispatch(getElement(), 'SMUI:chip:mount', accessor);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUI:chip:unmount', accessor);

      instance.destroy();
    };
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
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

  function addLeadingIconClass(className) {
    if (!leadingIconClasses[className]) {
      leadingIconClasses[className] = true;
    }
  }

  function removeLeadingIconClass(className) {
    if (!(className in leadingIconClasses) || leadingIconClasses[className]) {
      leadingIconClasses[className] = false;
    }
  }

  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getStyle(name) {
    return name in internalStyles
      ? internalStyles[name]
      : getComputedStyle(getElement()).getPropertyValue(name);
  }

  function setSelectedFromChipSet(value, shouldNotifyClients) {
    selected = value;
    instance.setSelectedFromChipSet(selected, shouldNotifyClients);
  }

  function focusPrimaryAction() {
    instance.focusPrimaryAction();
  }

  function focusTrailingAction() {
    instance.focusTrailingAction();
  }

  function removeFocus() {
    instance.removeFocus();
  }

  export function getElement() {
    return element.getElement();
  }
</script>

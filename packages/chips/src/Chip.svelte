<svelte:options runes={false} />

<svelte:component
  this={component}
  {tag}
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
  {...$$restProps}
  ontransitionend={(e: TransitionEvent) => {
    if (instance) {
      instance.handleTransitionEnd(e);
    }
    $$restProps.ontransitionend?.(e);
  }}
  onclick={(e: MouseEvent) => {
    if (instance) {
      instance.handleClick();
    }
    $$restProps.onclick?.(e);
  }}
  onkeydown={(e: KeyboardEvent) => {
    if (instance) {
      instance.handleKeydown(e);
    }
    $$restProps.onkeydown?.(e);
  }}
  onfocusin={(e: FocusEvent) => {
    if (instance) {
      instance.handleFocusIn(e);
    }
    $$restProps.onfocusin?.(e);
  }}
  onfocusout={(e: FocusEvent) => {
    if (instance) {
      instance.handleFocusOut(e);
    }
    $$restProps.onfocusout?.(e);
  }}
  onSMUIChipTrailingActionInteraction={(e: CustomEvent) => {
    if (instance) {
      instance.handleTrailingActionInteraction();
    }
    $$restProps.onSMUIChipTrailingActionInteraction?.(e);
  }}
  onSMUIChipTrailingActionNavigation={(e: CustomEvent) => {
    if (instance) {
      instance.handleTrailingActionNavigation(e);
    }
    $$restProps.onSMUIChipTrailingActionNavigation?.(e);
  }}
>
  {#if ripple && !$nonInteractive}
    <div class="mdc-chip__ripple"></div>
  {/if}
  <slot />
  {#if touch}
    <div class="mdc-chip__touch"></div>
  {/if}
</svelte:component>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'div'">
  import { deprecated } from '@material/chips';
  import type { SvelteComponent } from 'svelte';
  import { onMount, setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type { SMUIChipsPrimaryActionAccessor } from './Text.types.js';
  import type { SMUIChipsTrailingActionAccessor } from './TrailingAction.types.js';
  import type { SMUIChipsChipAccessor } from './Chip.types.js';

  const { MDCChipFoundation } = deprecated;

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    chip: any;
    ripple?: boolean;
    touch?: boolean;
    shouldRemoveOnTrailingIconClick?: boolean;
    shouldFocusPrimaryActionOnClick?: boolean;
    component?: typeof SvelteComponent<
      Record<string, any>,
      Record<string, any>,
      Record<string, any>
    >;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  let chipId: any;
  export { chipId as chip };
  export let ripple = true;
  export let touch = false;
  export let shouldRemoveOnTrailingIconClick = true;
  export let shouldFocusPrimaryActionOnClick = true;

  let element: SvelteComponent;
  let instance: deprecated.MDCChipFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let leadingIconClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  const initialSelectedStore = getContext<SvelteStore<boolean>>(
    'SMUI:chips:chip:initialSelected',
  );
  let selected = $initialSelectedStore;
  let primaryActionAccessor: SMUIChipsPrimaryActionAccessor | undefined =
    undefined;
  let trailingActionAccessor: SMUIChipsTrailingActionAccessor | undefined =
    undefined;
  const nonInteractive = getContext<SvelteStore<boolean>>(
    'SMUI:chips:nonInteractive',
  );
  const choice = getContext<SvelteStore<boolean>>('SMUI:chips:choice');
  const index = getContext<SvelteStore<number>>('SMUI:chips:chip:index');

  export let component: typeof SvelteComponent<
    Record<string, any>,
    Record<string, any>,
    Record<string, any>
  > = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? 'div' : undefined;

  const shouldRemoveOnTrailingIconClickStore = writable(
    shouldRemoveOnTrailingIconClick,
  );
  $: $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick;
  setContext(
    'SMUI:chips:chip:shouldRemoveOnTrailingIconClick',
    shouldRemoveOnTrailingIconClickStore,
  );
  const isSelectedStore = writable(selected);
  $: $isSelectedStore = selected;
  setContext('SMUI:chips:chip:isSelected', isSelectedStore);
  const leadingIconClassesStore = writable(leadingIconClasses);
  $: $leadingIconClassesStore = leadingIconClasses;
  setContext('SMUI:chips:chip:leadingIconClasses', leadingIconClassesStore);
  setContext(
    'SMUI:chips:chip:focusable',
    ($choice && selected) || $index === 0,
  );

  if (!chipId) {
    throw new Error(
      'The chip property is required! It should be passed down from the Set to the Chip.',
    );
  }

  $: if (
    instance &&
    instance.getShouldRemoveOnTrailingIconClick() !==
      shouldRemoveOnTrailingIconClick
  ) {
    instance.setShouldRemoveOnTrailingIconClick(
      shouldRemoveOnTrailingIconClick,
    );
  }

  $: if (instance) {
    instance.setShouldFocusPrimaryActionOnClick(
      shouldFocusPrimaryActionOnClick,
    );
  }

  setContext(
    'SMUI:chips:primary-action:mount',
    (accessor: SMUIChipsPrimaryActionAccessor) => {
      primaryActionAccessor = accessor;
    },
  );
  setContext('SMUI:chips:primary-action:unmount', () => {
    primaryActionAccessor = undefined;
  });
  setContext(
    'SMUI:chips:trailing-action:mount',
    (accessor: SMUIChipsTrailingActionAccessor) => {
      trailingActionAccessor = accessor;
    },
  );
  setContext('SMUI:chips:trailing-action:unmount', () => {
    trailingActionAccessor = undefined;
  });

  const SMUIChipsChipMount = getContext<
    ((accessor: SMUIChipsChipAccessor) => void) | undefined
  >('SMUI:chips:chip:mount');
  const SMUIChipsChipUnmount = getContext<
    ((accessor: SMUIChipsChipAccessor) => void) | undefined
  >('SMUI:chips:chip:unmount');

  onMount(() => {
    instance = new MDCChipFoundation({
      addClass,
      addClassToLeadingIcon: addLeadingIconClass,
      eventTargetHasClass: (target, className) =>
        target && 'classList' in target
          ? (target as HTMLElement).classList.contains(className)
          : false,
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
        dispatch(getElement(), 'SMUIChipInteraction', { chipId }),
      notifyNavigation: (key, source) =>
        dispatch(getElement(), 'SMUIChipNavigation', { chipId, key, source }),
      notifyRemoval: (removedAnnouncement) =>
        dispatch(getElement(), 'SMUIChipRemoval', {
          chipId,
          removedAnnouncement,
        }),
      notifySelection: (selected, shouldIgnore) =>
        dispatch(getElement(), 'SMUIChipSelection', {
          chipId,
          selected,
          shouldIgnore,
        }),
      notifyTrailingIconInteraction: () =>
        dispatch(getElement(), 'SMUIChipTrailingIconInteraction', { chipId }),
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

    const accessor: SMUIChipsChipAccessor = {
      chipId,
      get selected() {
        return selected;
      },
      focusPrimaryAction,
      focusTrailingAction,
      removeFocus,
      setSelectedFromChipSet,
    };

    SMUIChipsChipMount && SMUIChipsChipMount(accessor);

    instance.init();

    return () => {
      SMUIChipsChipUnmount && SMUIChipsChipUnmount(accessor);

      instance.destroy();
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

  function addLeadingIconClass(className: string) {
    if (!leadingIconClasses[className]) {
      leadingIconClasses[className] = true;
    }
  }

  function removeLeadingIconClass(className: string) {
    if (!(className in leadingIconClasses) || leadingIconClasses[className]) {
      leadingIconClasses[className] = false;
    }
  }

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getStyle(name: string) {
    return name in internalStyles
      ? internalStyles[name]
      : getComputedStyle(getElement()).getPropertyValue(name);
  }

  function setSelectedFromChipSet(
    value: boolean,
    shouldNotifyClients: boolean,
  ) {
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

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>

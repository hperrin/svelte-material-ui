<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[
    ...(nonInteractive
      ? []
      : [
          [
            Ripple,
            {
              ripple: !input,
              unbounded: false,
              color:
                (activated || selected) && color == null ? 'primary' : color,
              disabled,
              addClass,
              removeClass,
              addStyle,
            },
          ],
        ]),
    forwardEvents,
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-deprecated-list-item': !wrapper,
    'mdc-deprecated-list-item__wrapper': wrapper,
    'mdc-deprecated-list-item--activated': activated,
    'mdc-deprecated-list-item--selected': selected,
    'mdc-deprecated-list-item--disabled': disabled,
    'mdc-menu-item--selected': !nav && role === 'menuitem' && selected,
    'smui-menu-item--non-interactive': nonInteractive,
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...nav && activated ? { 'aria-current': 'page' } : {}}
  {...!nav || wrapper ? { role } : {}}
  {...!nav && role === 'option'
    ? { 'aria-selected': selected ? 'true' : 'false' }
    : {}}
  {...!nav && (role === 'radio' || role === 'checkbox')
    ? { 'aria-checked': input && input.checked ? 'true' : 'false' }
    : {}}
  {...!nav ? { 'aria-disabled': disabled ? 'true' : 'false' } : {}}
  data-menu-item-skip-restore-focus={skipRestoreFocus || undefined}
  {tabindex}
  on:click={action}
  on:keydown={handleKeydown}
  on:SMUIGenericInput:mount={handleInputMount}
  on:SMUIGenericInput:unmount={() => (input = undefined)}
  {href}
  {...internalAttrs}
  {...$$restProps}
  >{#if ripple}<span class="mdc-deprecated-list-item__ripple" />{/if}<slot
  /></svelte:component
>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'li'"
>
  import type { SvelteComponent } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type {
    SMUICheckboxInputAccessor,
    SMUIGenericInputAccessor,
    SMUIRadioInputAccessor,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type { SMUIListItemAccessor } from './Item.types.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    color?: 'primary' | 'secondary' | undefined;
    nonInteractive?: boolean;
    ripple?: boolean;
    wrapper?: boolean;
    activated?: boolean;
    role?: string;
    selected?: boolean;
    disabled?: boolean;
    skipRestoreFocus?: boolean;
    tabindex?: number;
    inputId?: string;
    href?: Href;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = SmuiAttrs<TagName, keyof OwnProps> &
    OwnProps & {
      value?: any;
      'data-value'?: any;
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
  export let style = '';
  export let color: 'primary' | 'secondary' | undefined = undefined;
  export let nonInteractive: boolean =
    getContext<boolean | undefined>('SMUI:list:nonInteractive') ?? false;
  setContext('SMUI:list:nonInteractive', undefined);
  export let ripple = !nonInteractive;
  export let wrapper = false;
  export let activated = false;
  export let role: string = wrapper
    ? 'presentation'
    : getContext('SMUI:list:item:role');
  setContext('SMUI:list:item:role', undefined);
  export let selected = false;
  export let disabled = false;
  export let skipRestoreFocus = false;
  let tabindexProp: UninitializedValue | number = uninitializedValue;
  export { tabindexProp as tabindex };
  export let inputId = 'SMUI-form-field-list-' + counter++;
  export let href: string | undefined = undefined;

  let element: SvelteComponent;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let input: SMUICheckboxInputAccessor | SMUIRadioInputAccessor | undefined;
  let addTabindexIfNoItemsSelectedRaf: number | undefined;
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');

  $: tabindex = isUninitializedValue(tabindexProp)
    ? !nonInteractive && !disabled && (selected || (input && input.checked))
      ? 0
      : -1
    : tabindexProp;

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement
      ? nav
        ? href
          ? 'a'
          : 'span'
        : 'li'
      : undefined;

  setContext('SMUI:generic:input:props', { id: inputId });
  // Reset separator context, because we aren't directly under a list anymore.
  setContext('SMUI:separator:context', undefined);

  onMount(() => {
    // Tabindex needs to be '0' if this is the first non-disabled list item, and
    // no other item is selected.

    if (!selected && !nonInteractive) {
      let first = true;
      let el = element.getElement();
      while (el.previousSibling) {
        el = el.previousSibling;
        if (
          el.nodeType === 1 &&
          el.classList.contains('mdc-deprecated-list-item') &&
          !el.classList.contains('mdc-deprecated-list-item--disabled')
        ) {
          first = false;
          break;
        }
      }
      if (first) {
        // This is first, so now set up a check that no other items are
        // selected.
        addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(() =>
          addTabindexIfNoItemsSelected(el)
        );
      }
    }

    const accessor: SMUIListItemAccessor = {
      _smui_list_item_accessor: true,
      get element() {
        return getElement();
      },
      get selected() {
        return selected;
      },
      set selected(value) {
        selected = value;
      },
      hasClass,
      addClass,
      removeClass,
      getAttr,
      addAttr,
      removeAttr,
      getPrimaryText,

      // For inputs within item.
      get checked() {
        return (input && input.checked) ?? false;
      },
      set checked(value) {
        if (input) {
          input.checked = !!value;
        }
      },
      get hasCheckbox() {
        return !!(input && '_smui_checkbox_accessor' in input);
      },
      get hasRadio() {
        return !!(input && '_smui_radio_accessor' in input);
      },
      activateRipple() {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateRipple() {
        if (input) {
          input.deactivateRipple();
        }
      },

      // For select options.
      getValue() {
        return $$restProps.value;
      },

      // For autocomplete
      action,
      get tabindex() {
        return tabindex;
      },
      set tabindex(value: number) {
        tabindexProp = value;
      },
      get disabled() {
        return disabled;
      },
      get activated() {
        return activated;
      },
      set activated(value: boolean) {
        activated = value;
      },
    };

    dispatch(getElement(), 'SMUIListItem:mount', accessor);

    return () => {
      dispatch(getElement(), 'SMUIListItem:unmount', accessor);
    };
  });

  onDestroy(() => {
    if (addTabindexIfNoItemsSelectedRaf) {
      window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
    }
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
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name: string) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  function addTabindexIfNoItemsSelected(el: HTMLElement) {
    // Look through next siblings to see if none of them are selected.
    let noneSelected = true;
    while (el.nextElementSibling) {
      el = el.nextElementSibling as HTMLElement;
      if (
        el.nodeType === 1 &&
        el.classList.contains('mdc-deprecated-list-item')
      ) {
        const tabindexAttr = el.attributes.getNamedItem('tabindex');
        if (tabindexAttr && tabindexAttr.value === '0') {
          noneSelected = false;
          break;
        }
      }
    }
    if (noneSelected) {
      // This is the first element, and no other element is selected, so the
      // tabindex should be '0'.
      tabindex = 0;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    const isEnter = e.key === 'Enter';
    const isSpace = e.key === 'Space';
    if (isEnter || isSpace) {
      action(e);
    }
  }

  function handleInputMount(e: CustomEvent<SMUIGenericInputAccessor>) {
    if (
      '_smui_checkbox_accessor' in e.detail ||
      '_smui_radio_accessor' in e.detail
    ) {
      input = e.detail;
    }
  }

  export function action(e: Event) {
    if (!disabled) {
      dispatch(getElement(), 'SMUI:action', e);
    }
  }

  export function getPrimaryText() {
    const element = getElement();

    const primaryText = element.querySelector(
      '.mdc-deprecated-list-item__primary-text'
    );
    if (primaryText) {
      return primaryText.textContent ?? '';
    }
    const text = element.querySelector('.mdc-deprecated-list-item__text');
    if (text) {
      return text.textContent ?? '';
    }
    return element.textContent ?? '';
  }

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>

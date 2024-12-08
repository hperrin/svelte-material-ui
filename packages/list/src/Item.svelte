<svelte:options runes />

<MyComponent
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
  {href}
  {...internalAttrs}
  {...restProps}
  onclick={(e: MouseEvent) => {
    action(e);
    restProps.onclick?.(e);
  }}
  onkeydown={(e: KeyboardEvent) => {
    handleKeydown(e);
    restProps.onkeydown?.(e);
  }}
  >{#if ripple}<span class="mdc-deprecated-list-item__ripple"
    ></span>{/if}{@render children?.()}</MyComponent
>

<script module lang="ts">
  let counter = 0;
</script>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'li'"
>
  import type { Snippet } from 'svelte';
  import { onMount, onDestroy, setContext, getContext } from 'svelte';
  import type {
    SMUICheckboxInputAccessor,
    SMUIGenericInputAccessor,
    SMUIRadioInputAccessor,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, dispatch } from '@smui/common/internal';
  import Ripple from '@smui/ripple';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type { SMUIListItemAccessor } from './Item.types.js';

  interface UninitializedValue extends Function {}
  let uninitializedValue: UninitializedValue = () => {};
  function isUninitializedValue(value: any): value is UninitializedValue {
    return value === uninitializedValue;
  }

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
     * The color of the item.
     */
    color?: 'primary' | 'secondary' | undefined;
    /**
     * Whether the item should ignore all user input.
     */
    nonInteractive?: boolean;
    /**
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * Whether this item wraps another list.
     */
    wrapper?: boolean;
    /**
     * Whether this item is activated.
     */
    activated?: boolean;
    /**
     * The accessibility role of this item.
     */
    role?: string;
    /**
     * Whether this item is selected.
     */
    selected?: boolean;
    /**
     * Whether this item is disabled.
     */
    disabled?: boolean;
    /**
     * If this is a menu item, skip restoring focus to the previous item when
     * this is selected.
     */
    skipRestoreFocus?: boolean;
    /**
     * The item's tab index.
     */
    tabindex?: number;
    /**
     * An ID to pass down to an input.
     */
    inputId?: string;
    /**
     * If provided, the item will act as a link.
     */
    href?: Href;
    /**
     * The component to use to render the element.
     */
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
  };
  let nav = getContext<boolean | undefined>('SMUI:list:item:nav');
  let {
    use = [],
    class: className = '',
    style = '',
    color,
    nonInteractive = getContext<boolean | undefined>(
      'SMUI:list:nonInteractive',
    ) ?? false,
    ripple = !nonInteractive,
    wrapper = false,
    activated = $bindable(false),
    role = wrapper ? 'presentation' : getContext('SMUI:list:item:role'),
    selected = $bindable(false),
    disabled = false,
    skipRestoreFocus = false,
    tabindex: tabindexProp = $bindable(uninitializedValue as unknown as number),
    inputId = 'SMUI-form-field-list-' + counter++,
    href,
    component: MyComponent = SmuiElement,
    tag = (nav ? (href ? 'a' : 'span') : 'li') as TagName,
    children,
    ...restProps
  }: SmuiAttrs<TagName, keyof OwnProps> &
    OwnProps & {
      value?: any;
      'data-value'?: any;
    } = $props();

  setContext('SMUI:list:nonInteractive', undefined);
  setContext('SMUI:list:item:role', undefined);

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let input: SMUICheckboxInputAccessor | SMUIRadioInputAccessor | undefined =
    $state();
  let addTabindexIfNoItemsSelectedRaf: number | undefined = $state();

  const tabindex = $derived(
    isUninitializedValue(tabindexProp)
      ? !nonInteractive && !disabled && (selected || (input && input.checked))
        ? 0
        : -1
      : tabindexProp,
  );

  setContext('SMUI:generic:input:props', { id: inputId });
  // Reset separator context, because we aren't directly under a list anymore.
  setContext('SMUI:separator:context', undefined);

  setContext(
    'SMUI:generic:input:mount',
    (accessor: SMUIGenericInputAccessor) => {
      if (
        '_smui_checkbox_accessor' in accessor ||
        '_smui_radio_accessor' in accessor
      ) {
        input = accessor;
      }
    },
  );
  setContext('SMUI:generic:input:unmount', () => {
    input = undefined;
  });

  const SMUIListItemMount = getContext<
    ((accessor: SMUIListItemAccessor) => void) | undefined
  >('SMUI:list:item:mount');
  const SMUIListItemUnmount = getContext<
    ((accessor: SMUIListItemAccessor) => void) | undefined
  >('SMUI:list:item:unmount');

  onMount(() => {
    // Tabindex needs to be '0' if this is the first non-disabled list item, and
    // no other item is selected.

    if (!selected && !nonInteractive) {
      let first = true;
      let el: Element = element.getElement();
      while (el.previousElementSibling) {
        el = el.previousElementSibling;
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
          addTabindexIfNoItemsSelected(el as HTMLElement),
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
        return restProps.value;
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

    SMUIListItemMount && SMUIListItemMount(accessor);

    return () => {
      SMUIListItemUnmount && SMUIListItemUnmount(accessor);
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
      } else {
        internalStyles[name] = value;
      }
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
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
      tabindexProp = 0;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    const isEnter = e.key === 'Enter';
    const isSpace = e.key === 'Space';
    if (isEnter || isSpace) {
      action(e);
    }
  }

  export function action(e: Event) {
    if (!disabled) {
      dispatch(getElement(), 'SMUIAction', e);
    }
  }

  export function getPrimaryText() {
    const element = getElement();

    const primaryText = element.querySelector(
      '.mdc-deprecated-list-item__primary-text',
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

  export function getElement() {
    return element.getElement();
  }
</script>

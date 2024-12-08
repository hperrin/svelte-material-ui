<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: true,
        color,
        disabled: !!restProps.disabled,
        addClass,
        removeClass,
        addStyle,
      },
    ],
    ...use,
  ]}
  class={classMap({
    [className]: true,
    'mdc-icon-button': true,
    'mdc-icon-button--on': !isUninitializedValue(pressed) && pressed,
    'mdc-icon-button--touch': touch,
    'mdc-icon-button--display-flex': displayFlex,
    'smui-icon-button--size-button': size === 'button',
    'smui-icon-button--size-mini': size === 'mini',
    'mdc-icon-button--reduced-size': size === 'mini' || size === 'button',
    'mdc-card__action': context === 'card:action',
    'mdc-card__action--icon': context === 'card:action',
    'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',
    'mdc-top-app-bar__action-item': context === 'top-app-bar:action',
    'mdc-snackbar__dismiss': context === 'snackbar:actions',
    'mdc-data-table__pagination-button': context === 'data-table:pagination',
    'mdc-data-table__sort-icon-button':
      context === 'data-table:sortable-header-cell',
    'mdc-dialog__close':
      (context === 'dialog:header' || context === 'dialog:sheet') &&
      action === 'close',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  aria-pressed={!isUninitializedValue(pressed)
    ? pressed
      ? 'true'
      : 'false'
    : null}
  aria-label={pressed ? ariaLabelOn : ariaLabelOff}
  data-aria-label-on={ariaLabelOn}
  data-aria-label-off={ariaLabelOff}
  aria-describedby={ariaDescribedby}
  {href}
  {...actionProp}
  {...internalAttrs}
  {...restProps}
  onclick={(e: MouseEvent) => {
    if (instance) {
      instance.handleClick();
    }
    if (context === 'top-app-bar:navigation') {
      dispatch(getElement(), 'SMUITopAppBarIconButtonNav');
    }
    restProps.onclick?.(e);
  }}
  ><div class="mdc-icon-button__ripple"></div>
  {@render children?.()}{#if touch}<div
      class="mdc-icon-button__touch"
    ></div>{/if}</MyComponent
>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { MDCIconButtonToggleEventDetail } from '@material/icon-button';
  import { MDCIconButtonToggleFoundation } from '@material/icon-button';
  import type { Snippet } from 'svelte';
  import { onDestroy, getContext, setContext } from 'svelte';
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
     * Whether to show a ripple animation.
     */
    ripple?: boolean;
    /**
     * The color of the button.
     */
    color?: 'primary' | 'secondary' | undefined;
    /**
     * Whether to act as a toggle button.
     */
    toggle?: boolean;
    /**
     * When acting as a toggle button, whether the button is toggled.
     */
    pressed?: boolean;
    /**
     * The ARIA label for the pressed state.
     */
    ariaLabelOn?: string;
    /**
     * The ARIA label for the unpressed stated.
     */
    ariaLabelOff?: string;
    /**
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * Use flex styling.
     */
    displayFlex?: boolean;
    /**
     * The size of the button.
     */
    size?: 'normal' | 'mini' | 'button';
    /**
     * If provided, the button will act as a link.
     */
    href?: Href;
    /**
     * The action the button represents.
     */
    action?:
      | 'close'
      | 'first-page'
      | 'prev-page'
      | 'next-page'
      | 'last-page'
      | string;
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
  let {
    use = [],
    class: className = '',
    style = '',
    ripple = true,
    color,
    toggle = false,
    pressed = $bindable(uninitializedValue as unknown as boolean),
    ariaLabelOn,
    ariaLabelOff,
    touch = false,
    displayFlex = true,
    size = 'normal',
    href,
    action,
    component: MyComponent = SmuiElement,
    tag = (href == null ? 'button' : 'a') as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let instance: MDCIconButtonToggleFoundation | undefined;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let context = getContext('SMUI:icon-button:context');
  let ariaDescribedby = getContext('SMUI:icon-button:aria-describedby');

  const actionProp = $derived.by(() => {
    if (context === 'data-table:pagination') {
      switch (action) {
        case 'first-page':
          return { 'data-first-page': 'true' };
        case 'prev-page':
          return { 'data-prev-page': 'true' };
        case 'next-page':
          return { 'data-next-page': 'true' };
        case 'last-page':
          return { 'data-last-page': 'true' };
        default:
          return { 'data-action': 'true' };
      }
    } else if (context === 'dialog:header' || context === 'dialog:sheet') {
      return { 'data-mdc-dialog-action': action };
    } else {
      return { action };
    }
  });

  let previousDisabled = !!restProps.disabled;
  $effect(() => {
    if (previousDisabled != !!restProps.disabled) {
      if (element) {
        const el = getElement();
        if ('blur' in el) {
          el.blur();
        }
      }
      previousDisabled = !!restProps.disabled;
    }
  });

  setContext('SMUI:icon:context', 'icon-button');

  let oldToggle: boolean | null = null;
  $effect(() => {
    if (element && getElement() && toggle !== oldToggle) {
      if (toggle && !instance) {
        instance = new MDCIconButtonToggleFoundation({
          addClass,
          hasClass,
          notifyChange: (evtData) => {
            handleChange(evtData);
            dispatch(getElement(), 'SMUIIconButtonToggleChange', evtData);
          },
          removeClass,
          getAttr,
          setAttr: addAttr,
        });
        instance.init();
      } else if (!toggle && instance) {
        instance.destroy();
        instance = undefined;
        internalClasses = {};
        internalAttrs = {};
      }
      oldToggle = toggle;
    }
  });

  $effect(() => {
    if (
      instance &&
      !isUninitializedValue(pressed) &&
      instance.isOn() !== pressed
    ) {
      instance.toggle(pressed);
    }
  });

  onDestroy(() => {
    instance && instance.destroy();
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

  function handleChange(evtData: MDCIconButtonToggleEventDetail) {
    pressed = evtData.isOn;
  }

  export function getElement() {
    return element.getElement();
  }
</script>

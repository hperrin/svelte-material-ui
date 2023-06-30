<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: true,
        color,
        disabled: !!$$restProps.disabled,
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
  on:click={() => instance && instance.handleClick()}
  on:click={() =>
    context === 'top-app-bar:navigation' &&
    dispatch(getElement(), 'SMUITopAppBarIconButton:nav')}
  {href}
  {...actionProp}
  {...internalAttrs}
  {...$$restProps}
  ><div class="mdc-icon-button__ripple" />
  <slot />{#if touch}<div
      class="mdc-icon-button__touch"
    />{/if}</svelte:component
>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { MDCIconButtonToggleEventDetail } from '@material/icon-button';
  import { MDCIconButtonToggleFoundation } from '@material/icon-button';
  import type { SvelteComponent } from 'svelte';
  import { onDestroy, getContext, setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
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

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    ripple?: boolean;
    color?: 'primary' | 'secondary' | undefined;
    toggle?: boolean;
    pressed?: boolean;
    ariaLabelOn?: string | undefined;
    ariaLabelOff?: string | undefined;
    touch?: boolean;
    displayFlex?: boolean;
    size?: 'normal' | 'mini' | 'button';
    href?: Href;
    action?:
      | 'close'
      | 'first-page'
      | 'prev-page'
      | 'next-page'
      | 'last-page'
      | string
      | undefined;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

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
  export let ripple = true;
  export let color: 'primary' | 'secondary' | undefined = undefined;
  export let toggle = false;
  export let pressed: UninitializedValue | boolean = uninitializedValue;
  export let ariaLabelOn: string | undefined = undefined;
  export let ariaLabelOff: string | undefined = undefined;
  export let touch = false;
  export let displayFlex = true;
  export let size: 'normal' | 'mini' | 'button' = 'normal';
  export let href: string | undefined = undefined;
  export let action:
    | 'close'
    | 'first-page'
    | 'prev-page'
    | 'next-page'
    | 'last-page'
    | string
    | undefined = undefined;

  let element: SvelteComponent;
  let instance: MDCIconButtonToggleFoundation | undefined;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let context = getContext('SMUI:icon-button:context');
  let ariaDescribedby = getContext('SMUI:icon-button:aria-describedby');

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? (href == null ? 'button' : 'a') : undefined;

  $: actionProp = (() => {
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
  })();

  let previousDisabled = $$restProps.disabled;
  $: if (previousDisabled !== $$restProps.disabled) {
    const elem = getElement() as HTMLButtonElement;
    if ('blur' in elem) {
      elem.blur();
    }
    previousDisabled = $$restProps.disabled;
  }

  setContext('SMUI:icon:context', 'icon-button');

  let oldToggle: boolean | null = null;
  $: if (element && getElement() && toggle !== oldToggle) {
    if (toggle && !instance) {
      instance = new MDCIconButtonToggleFoundation({
        addClass,
        hasClass,
        notifyChange: (evtData) => {
          handleChange(evtData);
          dispatch(
            getElement(),
            'SMUIIconButtonToggle:change',
            evtData,
            undefined,
            true
          );
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

  $: if (
    instance &&
    !isUninitializedValue(pressed) &&
    instance.isOn() !== pressed
  ) {
    instance.toggle(pressed);
  }

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

  function handleChange(evtData: MDCIconButtonToggleEventDetail) {
    pressed = evtData.isOn;
  }

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>

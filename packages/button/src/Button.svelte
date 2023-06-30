<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
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
    'mdc-button': true,
    'mdc-button--raised': variant === 'raised',
    'mdc-button--unelevated': variant === 'unelevated',
    'mdc-button--outlined': variant === 'outlined',
    'smui-button--color-secondary': color === 'secondary',
    'mdc-button--touch': touch,
    'mdc-card__action': context === 'card:action',
    'mdc-card__action--button': context === 'card:action',
    'mdc-dialog__button': context === 'dialog:action',
    'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',
    'mdc-top-app-bar__action-item': context === 'top-app-bar:action',
    'mdc-snackbar__action': context === 'snackbar:actions',
    'mdc-banner__secondary-action': context === 'banner' && secondary,
    'mdc-banner__primary-action': context === 'banner' && !secondary,
    'mdc-tooltip__action': context === 'tooltip:rich-actions',
    ...internalClasses,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...actionProp}
  {...defaultProp}
  {...secondaryProp}
  {href}
  on:click={handleClick}
  {...$$restProps}
  ><div class="mdc-button__ripple" />
  <slot />{#if touch}<div class="mdc-button__touch" />{/if}</svelte:component
>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { SvelteComponent } from 'svelte';
  import { setContext, getContext } from 'svelte';
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
    color?: 'primary' | 'secondary';
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined';
    touch?: boolean;
    href?: Href;
    action?: string;
    defaultAction?: boolean;
    secondary?: boolean;
    component?: typeof SvelteComponent;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let ripple = true;
  export let color: 'primary' | 'secondary' = 'primary';
  export let variant: 'text' | 'raised' | 'unelevated' | 'outlined' = 'text';
  export let touch = false;
  export let href: string | undefined = undefined;
  export let action = 'close';
  export let defaultAction = false;
  export let secondary = false;

  let element: SvelteComponent;
  let internalClasses: { [k: string]: boolean } = {};
  let internalStyles: { [k: string]: string } = {};
  let context = getContext<string | undefined>('SMUI:button:context');

  export let component: typeof SvelteComponent = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? (href == null ? 'button' : 'a') : undefined;

  $: actionProp =
    context === 'dialog:action' && action != null
      ? { 'data-mdc-dialog-action': action }
      : { action: $$props.action };
  $: defaultProp =
    context === 'dialog:action' && defaultAction
      ? { 'data-mdc-dialog-button-default': '' }
      : { default: $$props.default };
  $: secondaryProp =
    context === 'banner' ? {} : { secondary: $$props.secondary };

  let previousDisabled = $$restProps.disabled;
  $: if (previousDisabled !== $$restProps.disabled) {
    const el = getElement();
    if ('blur' in el) {
      (el as HTMLButtonElement).blur();
    }
    previousDisabled = $$restProps.disabled;
  }

  setContext('SMUI:label:context', 'button');
  setContext('SMUI:icon:context', 'button');

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

  function handleClick() {
    if (context === 'banner') {
      dispatch(
        getElement(),
        secondary
          ? 'SMUIBannerButton:secondaryActionClick'
          : 'SMUIBannerButton:primaryActionClick'
      );
    }
  }

  export function getElement(): SmuiElementMap[TagName] {
    return element.getElement();
  }
</script>

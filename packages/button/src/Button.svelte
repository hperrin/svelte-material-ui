<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  use={[
    [
      Ripple,
      {
        ripple,
        unbounded: false,
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
  {...restProps}
  onclick={(e: MouseEvent) => {
    handleClick();
    restProps.onclick?.(e);
  }}
  ><div class="mdc-button__ripple"></div>
  {@render children?.()}{#if touch}<div
      class="mdc-button__touch"
    ></div>{/if}</MyComponent
>

<script
  lang="ts"
  generics="Href extends string | undefined = undefined, TagName extends SmuiEveryElement = Href extends string ? 'a' : 'button'"
>
  import type { Snippet } from 'svelte';
  import { setContext, getContext } from 'svelte';
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
    color?: 'primary' | 'secondary';
    /**
     * The styling variant of the button.
     */
    variant?: 'text' | 'raised' | 'unelevated' | 'outlined';
    /**
     * Whether to use touch styling
     */
    touch?: boolean;
    /**
     * If provided, the button will act as a link.
     */
    href?: Href;
    /**
     * The action the button represents.
     */
    action?: string;
    /**
     * Whether the button is the default action for the dialog.
     */
    defaultAction?: boolean;
    /**
     * Whether the button is the secondary button for the banner.
     */
    secondary?: boolean;
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
    color = 'primary',
    variant = 'text',
    touch = false,
    href,
    action = 'close',
    defaultAction = false,
    secondary = false,
    component: MyComponent = SmuiElement,
    tag = (href == null ? 'button' : 'a') as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalStyles: { [k: string]: string } = $state({});
  let context = getContext<string | undefined>('SMUI:button:context');

  const actionProp = $derived(
    context === 'dialog:action' && action != null
      ? { 'data-mdc-dialog-action': action }
      : { action },
  );
  const defaultProp = $derived(
    context === 'dialog:action' && defaultAction
      ? { 'data-mdc-dialog-button-default': '' }
      : {},
  );
  const secondaryProp = $derived(context === 'banner' ? {} : { secondary });

  let previousDisabled = restProps.disabled;
  $effect(() => {
    if (previousDisabled !== restProps.disabled) {
      if (element) {
        const el = getElement();
        if ('blur' in el) {
          el.blur();
        }
      }
      previousDisabled = restProps.disabled;
    }
  });

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
          ? 'SMUIBannerButtonSecondaryActionClick'
          : 'SMUIBannerButtonPrimaryActionClick',
      );
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>

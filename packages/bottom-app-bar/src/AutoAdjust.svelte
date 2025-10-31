<svelte:options runes />

<MyComponent
  {tag}
  bind:this={element}
  {use}
  class={classMap({
    [adjustClass]: true,
    [className]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...restProps}
>
  {@render children?.()}
</MyComponent>

<script lang="ts" generics="TagName extends SmuiEveryElement = 'main'">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap } from '@smui/common/internal';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  import type BottomAppBar from './BottomAppBar.svelte';

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
     * The Bottom App Bar that this auto adjuster is for.
     *
     * This is REQUIRED! The reason you can provide `null` is so that the
     * Bottom App Bar has a chance to mount, then you must provide it.
     */
    bottomAppBar: BottomAppBar | null;
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
    bottomAppBar = null,
    component: MyComponent = SmuiElement,
    tag = 'main' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  let internalStyles: { [k: string]: string } = $state({});
  const propStore = $derived(bottomAppBar && bottomAppBar.getPropStore());
  const adjustClass = $derived.by(() => {
    if (!propStore || !$propStore || $propStore.variant === 'static') {
      return '';
    }

    return `smui-bottom-app-bar--${$propStore.variant}-adjust ${
      $propStore.withFab ? 'smui-bottom-app-bar--with-fab' : ''
    }`;
  });
  $effect(() => {
    if (!propStore || !$propStore || $propStore.variant === 'static') {
      addStyle('--smui-bottom-app-bar--fab-offset', '0px');
      return;
    }

    addStyle(
      '--smui-bottom-app-bar--fab-offset',
      $propStore.adjustOffset + 'px',
    );
  });

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>

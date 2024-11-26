<svelte:options runes={true} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-form-field': true,
    'mdc-form-field--align-end': align === 'end',
    'mdc-form-field--nowrap': noWrap,
  })}
  {...exclude(restProps, ['label$'])}
>
  {#if children}{@render children()}{/if}
  <label
    bind:this={labelEl}
    use:useActions={label$use}
    for={inputId}
    {...prefixFilter(restProps, 'label$')}
    >{#if label}{@render label()}{/if}</label
  >
</div>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { MDCFormFieldFoundation } from '@material/form-field';
  import type { Snippet } from 'svelte';
  import { onMount, setContext } from 'svelte';
  import type {
    SmuiAttrs,
    SmuiElementPropMap,
    SMUIGenericInputAccessor,
  } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

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
     * Where to align the input.
     */
    align?: 'start' | 'end';
    /**
     * Whether to prevent content wrapping.
     */
    noWrap?: boolean;
    /**
     * The ID the input will use.
     */
    inputId?: string;
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    label$use?: ActionArray;

    children?: Snippet;
    /**
     * The content of the form field's label.
     */
    label?: Snippet;
  };
  let {
    use = $bindable([]),
    class: className = $bindable(''),
    align = $bindable('start'),
    noWrap = $bindable(false),
    inputId = $bindable('SMUI-form-field-' + counter++),
    label$use = $bindable([]),
    children,
    label,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof SmuiElementPropMap['label'] as `label\$${k}`]?: SmuiElementPropMap['label'];
    } = $props();

  let element: HTMLDivElement;
  let instance: MDCFormFieldFoundation | undefined = $state();
  let labelEl: HTMLLabelElement;
  let input: SMUIGenericInputAccessor | undefined = $state();

  setContext('SMUI:generic:input:props', { id: inputId });

  setContext(
    'SMUI:generic:input:mount',
    (accessor: SMUIGenericInputAccessor) => {
      input = accessor;
    },
  );
  setContext('SMUI:generic:input:unmount', () => {
    input = undefined;
  });

  onMount(() => {
    instance = new MDCFormFieldFoundation({
      activateInputRipple: () => {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateInputRipple: () => {
        if (input) {
          input.deactivateRipple();
        }
      },
      deregisterInteractionHandler: (evtType, handler) => {
        labelEl.removeEventListener(evtType, handler);
      },
      registerInteractionHandler: (evtType, handler) => {
        labelEl.addEventListener(evtType, handler);
      },
    });

    instance.init();

    return () => {
      instance?.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>

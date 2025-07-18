<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    'smui-chip-input': true,
    'smui-chip-input--disabled': disabled,
    [className]: true,
  })}
  {...exclude(restProps, [
    'chipSet$',
    'chip$',
    'chipText$',
    'chipTrailingAction$',
    'autocomplete$',
    'textfield$',
    'label$',
    'input$',
    'loading$',
    'ripple$',
  ])}
>
  <Set
    bind:chips
    class={classMap({
      [chipSet$class]: true,
      'smui-chip-input__chip-set': true,
    })}
    input
    nonInteractive={disabled}
    {...chipSetProps}
    {...prefixFilter(restProps, 'chipSet$')}
  >
    {#snippet chip(chip)}
      <Chip
        {chip}
        {...prefixFilter(restProps, 'chip$')}
        onSMUIChipInteraction={(e) => {
          handleChipInteraction(chip);
          restProps.chip$onSMUIChipInteraction?.(e);
        }}
        onSMUIChipRemoval={(e) => {
          handleChipRemoval(chip);
          restProps.chip$onSMUIChipRemoval?.(e);
        }}
      >
        <ChipText {...prefixFilter(restProps, 'chipText$')}
          >{getChipLabel(chip)}</ChipText
        >
        <TrailingAction {...prefixFilter(restProps, 'chipTrailingAction$')}>
          {@render chipTrailingAction?.()}
        </TrailingAction>
      </Chip>
    {/snippet}
  </Set>
  <Autocomplete
    bind:this={autocomplete}
    class={classMap({
      [autocomplete$class]: true,
      'smui-chip-input__autocomplete': true,
    })}
    combobox={autocomplete$combobox}
    showMenuWithNoInput={false}
    bind:value
    bind:text
    {...prefixFilter(restProps, 'autocomplete$')}
    onSMUIAutocompleteSelected={(e) => {
      handleAutocompleteSelected(e);
      restProps.autocomplete$onSMUIAutocompleteSelected?.(e);
    }}
    onfocusout={(e) => {
      handleAutocompleteFocusout(e);
      restProps.autocomplete$onfocusout?.(e);
    }}
  >
    <Textfield
      class={classMap({
        [textfield$class]: true,
        'smui-chip-input__textfield': true,
      })}
      {input}
      {floatingLabel}
      {lineRipple}
      {...prefixFilter(restProps, 'textfield$')}
    >
      {#snippet label()}
        <FloatingLabel
          bind:this={floatingLabel}
          {...prefixFilter(restProps, 'label$')}
          >{@render labelSnippet?.()}</FloatingLabel
        >
      {/snippet}
      <Input
        bind:this={input}
        bind:value={text}
        {...prefixFilter(restProps, 'input$')}
        onkeydown={(e) => {
          handleInputKeydown(e);
          restProps.input$onkeydown?.(e);
        }}
      />
    </Textfield>
    {#snippet loading()}
      <ListText
        class={classMap({
          [loading$class]: true,
          'smui-chip-input__loading': true,
        })}
        {...prefixFilter(restProps, 'loading$')}
      >
        {@render loading?.()}
      </ListText>
    {/snippet}
  </Autocomplete>
  <LineRipple bind:this={lineRipple} {...prefixFilter(restProps, 'ripple$')} />
</div>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
    dispatch,
  } from '@smui/common/internal';
  import Autocomplete from '@smui-extra/autocomplete';
  import Textfield, { Input } from '@smui/textfield';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import Chip, { Set, TrailingAction, Text as ChipText } from '@smui/chips';
  import { Text as ListText } from '@smui/list';

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
     * An array of chip objects.
     */
    chips: any[];
    /**
     * Function that takes a chip object and returns a unique string.
     *
     * If your chips are strings or convert to unique strings (like numbers),
     * you don't need this.
     */
    key?: (chip: any) => string;
    /**
     * Get the label that will go on the chip itself.
     */
    getChipLabel?: (chip: any) => string;
    /**
     * Get the text that will go in the autocomplete when the chip is clicked.
     */
    getChipText?: (chip: any) => string;
    /**
     * The value of the autocomplete input.
     */
    value: any;
    /**
     * The text of the autocomplete input.
     */
    text?: any;
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
    /**
     * The keys that result in a chip being added when pressed.
     */
    addChipKeys?: string[];
    /**
     * A space separated list of CSS classes.
     */
    chipSet$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    autocomplete$class?: string;
    /**
     * Allow the user to enter their own value as well as pick from the options.
     */
    autocomplete$combobox?: boolean;
    /**
     * A space separated list of CSS classes.
     */
    textfield$class?: string;
    /**
     * A space separated list of CSS classes.
     */
    loading$class?: string;

    /**
     * A spot for the chips' trailing action.
     */
    chipTrailingAction?: Snippet;
    /**
     * A spot for the label.
     */
    label?: Snippet;
    /**
     * A spot for the item text when the results are loading.
     */
    loading?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    chips = $bindable(),
    key,
    getChipLabel = (chip: any) => `${chip}`,
    getChipText = (chip: any) => `${chip}`,
    value = $bindable(),
    text = $bindable(''),
    disabled = false,
    addChipKeys = [','],
    chipSet$class = '',
    autocomplete$class = '',
    autocomplete$combobox = false,
    textfield$class = '',
    loading$class = '',
    chipTrailingAction,
    label: labelSnippet,
    loading,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof Set
      > as `chipSet\$${k}`]?: ComponentProps<typeof Set>[k];
    } & {
      [k in keyof ComponentProps<typeof Chip> as `chip\$${k}`]?: ComponentProps<
        typeof Chip
      >[k];
    } & {
      [k in keyof ComponentProps<
        typeof ChipText
      > as `chipText\$${k}`]?: ComponentProps<typeof ChipText>[k];
    } & {
      [k in keyof ComponentProps<
        typeof TrailingAction
      > as `chipTrailingAction\$${k}`]?: ComponentProps<
        typeof TrailingAction
      >[k];
    } & {
      [k in keyof ComponentProps<
        typeof Autocomplete
      > as `autocomplete\$${k}`]?: ComponentProps<typeof Autocomplete>[k];
    } & {
      [k in keyof ComponentProps<
        typeof Textfield
      > as `textfield\$${k}`]?: ComponentProps<typeof Textfield>[k];
    } & {
      [k in keyof ComponentProps<
        typeof FloatingLabel
      > as `label\$${k}`]?: ComponentProps<typeof FloatingLabel>[k];
    } & {
      [k in keyof ComponentProps<
        typeof Input
      > as `input\$${k}`]?: ComponentProps<typeof Input>[k];
    } & {
      [k in keyof ComponentProps<
        typeof ListText
      > as `loading\$${k}`]?: ComponentProps<typeof ListText>[k];
    } & {
      [k in keyof ComponentProps<
        typeof LineRipple
      > as `ripple\$${k}`]?: ComponentProps<typeof LineRipple>[k];
    } & {
      chipSet$chips?: never;
      chipSet$chip?: never;
      chipSet$key?: never;
      chipSet$input?: never;
      chipSet$nonInteractive?: never;
      chip$chip?: never;
      autocomplete$value?: never;
      autocomplete$text?: never;
      textfield$input?: never;
      textfield$floatingLabel?: never;
      textfield$lineRipple?: never;
      input$value?: never;
    } = $props();

  let element: HTMLDivElement;
  let autocomplete: Autocomplete | undefined = $state();
  let input: Input | undefined = $state();
  let floatingLabel: FloatingLabel | undefined = $state();
  let lineRipple: LineRipple | undefined = $state();

  let previousValue = value;
  $effect(() => {
    if (previousValue !== value) {
      if (previousValue && value == null) {
        text = '';
      }
      previousValue = value;
    }
  });

  $effect(() => {
    if (
      text === '' &&
      floatingLabel &&
      input &&
      document.activeElement !== input.getElement()
    ) {
      floatingLabel.float(false);
    }
  });

  const chipSetProps = $derived({
    ...(key != null ? { key } : {}),
  });

  function handleAutocompleteSelected(event: CustomEvent<any>) {
    event.preventDefault();

    // Clear the text to not trigger an entry event on blur.
    text = '';
    if (document.activeElement !== input?.getElement()) {
      floatingLabel?.float(false);
    }
    const selectEvent = dispatch(
      getElement(),
      'SMUIChipInputSelect',
      event.detail,
      { bubbles: true, cancelable: true },
    );

    if (!selectEvent.defaultPrevented) {
      if (chips.findIndex((chip) => chip === event.detail) === -1) {
        chips.push(event.detail);
      }
    }
  }

  function handleInputKeydown(event: KeyboardEvent) {
    if (
      autocomplete$combobox &&
      (event.key === 'Enter' || addChipKeys.includes(event.key)) &&
      text &&
      input?.getElement().validity.valid
    ) {
      event.preventDefault();

      const entryEvent = dispatch(
        getElement(),
        'SMUIChipInputEntry',
        { text },
        { bubbles: true, cancelable: true },
      );

      if (!entryEvent.defaultPrevented) {
        if (chips.findIndex((chip) => chip === text) === -1) {
          chips.push(text);
        }
        text = '';
      }
    }
  }

  function handleAutocompleteFocusout(event: FocusEvent) {
    if (
      !autocomplete ||
      !autocomplete.getElement() ||
      autocomplete.getElement().contains(event.relatedTarget as Node | null)
    ) {
      return;
    }

    if (autocomplete$combobox && text && input?.getElement().validity.valid) {
      const entryEvent = dispatch(
        getElement(),
        'SMUIChipInputEntry',
        { text },
        { bubbles: true, cancelable: true },
      );

      if (!entryEvent.defaultPrevented) {
        if (chips.findIndex((chip) => chip === text) === -1) {
          chips.push(text);
        }
        text = '';
        floatingLabel?.float(false);
      }
    }
  }

  function handleChipInteraction(chip: any) {
    if (!disabled) {
      chips = chips.filter((curChip) =>
        key ? key(curChip) !== key(chip) : curChip !== chip,
      );
      text = getChipText(chip);
      input?.focus();
    }
  }

  function handleChipRemoval(chip: any) {
    dispatch(getElement(), 'SMUIChipInputRemove', { chip });
  }

  export function focus() {
    input?.focus();
  }

  export function blur() {
    input?.blur();
  }

  export function getElement() {
    return element;
  }
</script>

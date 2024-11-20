<svelte:options runes={false} />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'smui-chip-input': true,
    'smui-chip-input--disabled': disabled,
  })}
  {...exclude($$restProps, [
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
    let:chip
    input
    nonInteractive={disabled}
    {...chipSetProps}
    {...prefixFilter($$restProps, 'chipSet$')}
  >
    <Chip
      {chip}
      {...prefixFilter($$restProps, 'chip$')}
      onSMUIChipInteraction={(e) => {
        handleChipInteraction(chip);
        $$restProps.chip$onSMUIChipInteraction?.(e);
      }}
      onSMUIChipRemoval={(e) => {
        handleChipRemoval(chip);
        $$restProps.chip$onSMUIChipRemoval?.(e);
      }}
    >
      <ChipText {...prefixFilter($$restProps, 'chipText$')}
        >{getChipLabel(chip)}</ChipText
      >
      <TrailingAction {...prefixFilter($$restProps, 'chipTrailingAction$')}>
        <slot name="chipTrailingAction" />
      </TrailingAction>
    </Chip>
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
    {...prefixFilter($$restProps, 'autocomplete$')}
    onSMUIAutocompleteSelected={(e) => {
      handleAutocompleteSelected(e);
      $$restProps.autocomplete$onSMUIAutocompleteSelected?.(e);
    }}
    onfocusout={(e) => {
      handleAutocompleteFocusout(e);
      $$restProps.autocomplete$onfocusout?.(e);
    }}
  >
    <Textfield
      class={classMap({
        [textfield$class]: true,
        'smui-chip-input__textfield': true,
      })}
      bind:input
      bind:floatingLabel
      bind:lineRipple
      {...prefixFilter($$restProps, 'textfield$')}
    >
      <FloatingLabel
        bind:this={floatingLabel}
        slot="label"
        {...prefixFilter($$restProps, 'label$')}
        ><slot name="label" /></FloatingLabel
      >
      <Input
        bind:this={input}
        bind:value={text}
        {...prefixFilter($$restProps, 'input$')}
        onkeypress={(e) => {
          handleInputKeypress(e);
          $$restProps.input$onkeypress?.(e);
        }}
      />
    </Textfield>
    <ListText
      class={classMap({
        [loading$class]: true,
        'smui-chip-input__loading': true,
      })}
      slot="loading"
      {...prefixFilter($$restProps, 'loading$')}
    >
      <slot name="loading" />
    </ListText>
  </Autocomplete>
  <LineRipple
    bind:this={lineRipple}
    {...prefixFilter($$restProps, 'ripple$')}
  />
</div>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
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
    use?: ActionArray;
    class?: string;
    chips: any[];
    key?: (chip: any) => string;
    /**
     * Get the label that will go on the chip itself.
     */
    getChipLabel?: (chip: any) => string;
    /**
     * Get the text that will go in the autocomplete when the chip is clicked.
     */
    getChipText?: (chip: any) => string;
    value: any;
    disabled?: boolean;
    addChipKeys?: string[];
    chipSet$class?: string;
    autocomplete$class?: string;
    autocomplete$combobox?: boolean;
    textfield$class?: string;
    loading$class?: string;
  };
  type $$Props = OwnProps &
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
    };

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let chips: any[];
  export let key: ((chip: any) => string | number) | undefined = undefined;
  export let getChipLabel: (chip: any) => string = (chip: any) => `${chip}`;
  export let getChipText: (chip: any) => string = (chip: any) => `${chip}`;
  export let value: any;
  export let disabled = false;
  export let addChipKeys = [','];
  export let chipSet$class = '';
  export let autocomplete$class = '';
  export let autocomplete$combobox = false;
  export let textfield$class = '';
  export let loading$class = '';

  let element: HTMLDivElement;
  let autocomplete: Autocomplete;
  let input: Input;
  let floatingLabel: FloatingLabel;
  let lineRipple: LineRipple;
  let text = '';

  let previousValue = value;
  $: if (previousValue !== value) {
    if (previousValue && value == null) {
      text = '';
    }
    previousValue = value;
  }

  $: if (
    text === '' &&
    floatingLabel &&
    input &&
    document.activeElement !== input.getElement()
  ) {
    floatingLabel.float(false);
  }

  $: chipSetProps = {
    ...(key != null ? { key } : {}),
  };

  function handleAutocompleteSelected(event: CustomEvent<any>) {
    event.preventDefault();

    // Clear the text to not trigger an entry event on blur.
    text = '';
    if (document.activeElement !== input.getElement()) {
      floatingLabel.float(false);
    }
    const selectEvent = dispatch(
      getElement(),
      'SMUIChipInputSelect',
      event.detail,
      { bubbles: true, cancelable: true },
    );

    if (!selectEvent.defaultPrevented) {
      if (chips.indexOf(event.detail) === -1) {
        chips.push(event.detail);
      }
      chips = chips;
    }
  }

  function handleInputKeypress(event: KeyboardEvent) {
    if (
      autocomplete$combobox &&
      (event.key === 'Enter' || addChipKeys.includes(event.key)) &&
      text &&
      input.getElement().validity.valid
    ) {
      event.preventDefault();

      const entryEvent = dispatch(
        getElement(),
        'SMUIChipInputEntry',
        { text },
        { bubbles: true, cancelable: true },
      );

      if (!entryEvent.defaultPrevented) {
        if (chips.indexOf(text) === -1) {
          chips.push(text);
        }
        chips = chips;
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

    if (autocomplete$combobox && text && input.getElement().validity.valid) {
      const entryEvent = dispatch(
        getElement(),
        'SMUIChipInputEntry',
        { text },
        { bubbles: true, cancelable: true },
      );

      if (!entryEvent.defaultPrevented) {
        if (chips.indexOf(text) === -1) {
          chips.push(text);
        }
        chips = chips;
        text = '';
        floatingLabel.float(false);
      }
    }
  }

  function handleChipInteraction(chip: any) {
    if (!disabled) {
      chips = chips.filter((curChip) =>
        key ? key(curChip) !== key(chip) : curChip !== chip,
      );
      text = getChipText(chip);
      input.focus();
    }
  }

  function handleChipRemoval(chip: any) {
    chips = chips;
    dispatch(getElement(), 'SMUIChipInputRemove', { chip });
  }

  export function focus() {
    input.focus();
  }

  export function blur() {
    input.blur();
  }

  export function getElement() {
    return element;
  }
</script>

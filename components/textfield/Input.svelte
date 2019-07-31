{#if type === 'text'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="text"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'color'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="color"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'date'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="date"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'datetime-local'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="datetime-local"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'email'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="email"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'file'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="file"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'month'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="month"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'number'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="number"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'password'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="password"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'range'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="range"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'search'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="search"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'tel'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="tel"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'time'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="time"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'url'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="url"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'week'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="week"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'datetime'}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="datetime"
    bind:value
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else}
  <input
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    {type}
    {value}
    on:change={valueUpdater}
    on:change={changeHandler}
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{/if}

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, 'change', 'input');

  export let use = [];
  let className = '';
  export {className as class};
  export let type = 'text';
  export let value = '';
  export let dirty = false;
  export let invalid = false;

  let element;

  function valueUpdater(e) {
    value = e.target.value;
  }

  function changeHandler(e) {
    dirty = true;
    invalid = element.matches(':invalid');
  }
</script>
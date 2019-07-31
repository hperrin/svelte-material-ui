{#if type === 'text'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="text"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'color'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="color"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'date'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="date"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'datetime-local'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="datetime-local"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'email'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="email"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'file'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="file"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'month'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="month"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'number'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="number"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'password'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="password"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'range'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="range"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'search'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="search"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'tel'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="tel"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'time'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="time"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'url'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="url"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'week'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="week"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else if type === 'datetime'}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    type="datetime"
    bind:value
    {...exclude($$props, ['use', 'class', 'type', 'value'])}
  />
{:else}
  <input
    use:useActions={use}
    use:forwardEvents
    class="mdc-text-field__input {className}"
    {type}
    {value}
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

  function changeHandler(e) {
    value = e.target.vlue;
  }
</script>
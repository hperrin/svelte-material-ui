<MyComponent
  class="my-class"
  button$disabled={disabled}
  button$onclick={() => (disabled = true)}
>
  Click Me Only Once
</MyComponent>

<script lang="ts">
  import MyComponent from './_ExcludeAndPrefixFilterComponent.svelte';

  let disabled = false;
</script>

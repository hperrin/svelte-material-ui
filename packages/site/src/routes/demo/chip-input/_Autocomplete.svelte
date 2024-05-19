<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={categories}
    bind:value
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove category"
    autocomplete$options={categoryList.filter(
      (category) => !categories.includes(category),
    )}
    autocomplete$showMenuWithNoInput={true}
  >
    <svelte:fragment slot="chipTrailingAction">cancel</svelte:fragment>
    <svelte:fragment slot="label">Categories</svelte:fragment>
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let categories = ['Productivity', 'Audio & Video'];
  let value = '';

  const categoryList = [
    'Productivity',
    'Graphics & Photography',
    'Audio & Video',
    'Education',
    'Games',
    'Networking',
    'Developer Tools',
    'Science',
    'System',
    'Utilities',
  ];
</script>

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
      (category) => !categories.find((cat) => cat === category),
    )}
    autocomplete$showMenuWithNoInput
  >
    {#snippet chipTrailingAction()}cancel{/snippet}
    {#snippet label()}
      Categories
    {/snippet}
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let categories = $state(['Productivity', 'Audio & Video']);
  let value = $state('');

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

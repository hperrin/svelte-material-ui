<div class="container">
  <MyComponent
    use={[
      Pannable,
      Swipeable,
      [
        Tappable,
        {
          bgColor: 'var(--mdc-theme-secondary)',
          color: 'var(--mdc-theme-on-secondary)',
        },
      ],
    ]}
  >
    Swipe me.<br />
    Tap me.<br />
    Press me.
  </MyComponent>
</div>

<script lang="ts">
  import MyComponent from './_UseActionsComponent.svelte';
  import Pannable from './_UseActionsPannable';
  import Swipeable from './_UseActionsSwipeable';
  import Tappable from './_UseActionsTappable';
</script>

<style>
  .container {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid currentcolor;
    overflow: hidden;
  }
</style>

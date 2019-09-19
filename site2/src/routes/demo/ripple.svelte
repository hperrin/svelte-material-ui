<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <p use:Ripple={[true, {color: 'surface'}]} tabindex="0">
    SMUI ripples can be added to arbitrary elements, like this <code>p</code>
    element. Try clicking it to see the ripple.
  </p>

  <p>
    Unbounded:
    <span use:Ripple={[true, {unbounded: true, color: 'surface'}]} tabindex="0" class="unbounded">
      &copy;
    </span>
  </p>

  <p use:Ripple={[true, {color: 'primary'}]} tabindex="0">
    Primary color.
  </p>

  <p use:Ripple={[true, {color: 'secondary'}]} tabindex="0">
    Secondary color.
  </p>
</section>

<script>
  import Ripple from '@smui/ripple';
</script>

<style>
  p {
    padding: 10px;
    border-radius: 5px;
  }

  .unbounded {
    display: inline-flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
  }
</style>
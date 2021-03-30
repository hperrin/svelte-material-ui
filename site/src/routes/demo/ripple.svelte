<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <p use:Ripple={{ ripple: true, color: 'surface' }} tabindex="0">
    SMUI ripples can be added to arbitrary elements, like this <code>p</code>
    element. Try clicking it to see the ripple.
  </p>

  <p>
    Unbounded:
    <span
      use:Ripple={{
        ripple: true,
        unbounded: true,
        color: 'surface',
        // addClass and removeClass need to be provided, since we have
        // a "class" attribute on this element.
        addClass: (className) => {
          if (!(className in unboundedRippleClasses)) {
            unboundedRippleClasses[className] = true;
          }
        },
        removeClass: (className) => {
          if (className in unboundedRippleClasses) {
            delete unboundedRippleClasses[className];
            unboundedRippleClasses = unboundedRippleClasses;
          }
        },
      }}
      tabindex="0"
      class="unbounded {Object.keys(unboundedRippleClasses).join(' ')}"
    >
      &copy;
    </span>
  </p>

  <p use:Ripple={{ ripple: true, color: 'primary' }} tabindex="0">
    Primary color.
  </p>

  <p use:Ripple={{ ripple: true, color: 'secondary' }} tabindex="0">
    Secondary color.
  </p>

  <p use:Ripple={{ ripple: false, color: 'primary' }} tabindex="0">
    Primary color.
  </p>

  <p use:Ripple={{ ripple: false, color: 'secondary' }} tabindex="0">
    Secondary color.
  </p>
</section>

<script>
  import Ripple from '@smui/ripple';

  let unboundedRippleClasses = {};
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

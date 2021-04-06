<svelte:head>
  <title>Ripple - SMUI</title>
</svelte:head>

<section>
  <h2>Ripple</h2>

  <p use:Ripple={{ surface: true }} tabindex="0">
    SMUI ripples can be added to arbitrary elements, like this <code>p</code>
    element. Try clicking it to see the ripple.
  </p>

  <p use:Ripple={{ surface: true, color: 'primary' }} tabindex="0">
    Primary color.
  </p>

  <p use:Ripple={{ surface: true, color: 'secondary' }} tabindex="0">
    Secondary color.
  </p>

  <p>
    Unbounded:
    <span
      use:Ripple={{
        surface: true,
        unbounded: true,
        // addClass and removeClass need to be provided, since
        // we have a "class" attribute on this element.
        addClass: (className) => {
          if (!unboundedRippleClasses[className]) {
            unboundedRippleClasses[className] = true;
          }
        },
        removeClass: (className) => {
          if (unboundedRippleClasses[className]) {
            delete unboundedRippleClasses[className];
            unboundedRippleClasses = unboundedRippleClasses;
          }
        },
      }}
      tabindex="0"
      class="unbounded {Object.keys(unboundedRippleClasses).join(' ')}"
    >
      D
    </span>
    <span
      use:Ripple={{
        surface: true,
        unbounded: true,
        color: 'primary',
        // addClass and removeClass need to be provided, since
        // we have a "class" attribute on this element.
        addClass: (className) => {
          if (!unboundedPrimaryRippleClasses[className]) {
            unboundedPrimaryRippleClasses[className] = true;
          }
        },
        removeClass: (className) => {
          if (unboundedPrimaryRippleClasses[className]) {
            delete unboundedPrimaryRippleClasses[className];
            unboundedPrimaryRippleClasses = unboundedPrimaryRippleClasses;
          }
        },
      }}
      tabindex="0"
      class="unbounded {Object.keys(unboundedPrimaryRippleClasses).join(' ')}"
    >
      P
    </span>
    <span
      use:Ripple={{
        surface: true,
        unbounded: true,
        color: 'secondary',
        // addClass and removeClass need to be provided, since
        // we have a "class" attribute on this element.
        addClass: (className) => {
          if (!unboundedSecondaryRippleClasses[className]) {
            unboundedSecondaryRippleClasses[className] = true;
          }
        },
        removeClass: (className) => {
          if (unboundedSecondaryRippleClasses[className]) {
            delete unboundedSecondaryRippleClasses[className];
            unboundedSecondaryRippleClasses = unboundedSecondaryRippleClasses;
          }
        },
      }}
      tabindex="0"
      class="unbounded {Object.keys(unboundedSecondaryRippleClasses).join(' ')}"
    >
      S
    </span>
  </p>

  <p
    use:Ripple={{ surface: true, active }}
    on:mousedown|capture={() => (active = true)}
    on:mouseup|capture={() => (active = false)}
    on:keydown|capture={(e) =>
      (active = e.code === 'Space' || e.code === 'Enter')}
    on:keyup|capture={() => (active = false)}
    tabindex="0"
  >
    Keyboard activation on a non-button non-link element. (Focus and press
    space/enter.)
  </p>
</section>

<script>
  import Ripple from '@smui/ripple';

  let unboundedRippleClasses = {};
  let unboundedPrimaryRippleClasses = {};
  let unboundedSecondaryRippleClasses = {};
  let active = false;
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

  [tabindex='0'] {
    cursor: pointer;
  }
</style>

<p>
  <span
    use:Ripple={{
      surface: true,
      unbounded: true,
      // addClass and removeClass need to be provided, since
      // we have a "class" attribute on this element. If we had
      // a "style" attribute, we would also need addStyle.
      addClass: (className) => {
        if (!rippleClasses[className]) {
          rippleClasses[className] = true;
        }
      },
      removeClass: (className) => {
        if (rippleClasses[className]) {
          delete rippleClasses[className];
          rippleClasses = rippleClasses;
        }
      },
    }}
    tabindex="0"
    role="button"
    class="unbounded {Object.keys(rippleClasses).join(' ')}"
  >
    D
  </span>
  <span
    use:Ripple={{
      surface: true,
      unbounded: true,
      color: 'primary',
      // addClass and removeClass need to be provided, since
      // we have a "class" attribute on this element. If we had
      // a "style" attribute, we would also need addStyle.
      addClass: (className) => {
        if (!primaryRippleClasses[className]) {
          primaryRippleClasses[className] = true;
        }
      },
      removeClass: (className) => {
        if (primaryRippleClasses[className]) {
          delete primaryRippleClasses[className];
          primaryRippleClasses = primaryRippleClasses;
        }
      },
    }}
    tabindex="0"
    role="button"
    class="unbounded {Object.keys(primaryRippleClasses).join(' ')}"
  >
    P
  </span>
  <span
    use:Ripple={{
      surface: true,
      unbounded: true,
      color: 'secondary',
      // addClass and removeClass need to be provided, since
      // we have a "class" attribute on this element. If we had
      // a "style" attribute, we would also need addStyle.
      addClass: (className) => {
        if (!secondaryRippleClasses[className]) {
          secondaryRippleClasses[className] = true;
        }
      },
      removeClass: (className) => {
        if (secondaryRippleClasses[className]) {
          delete secondaryRippleClasses[className];
          secondaryRippleClasses = secondaryRippleClasses;
        }
      },
    }}
    tabindex="0"
    role="button"
    class="unbounded {Object.keys(secondaryRippleClasses).join(' ')}"
  >
    S
  </span>
</p>

<script lang="ts">
  import Ripple from '@smui/ripple';

  let rippleClasses: { [k: string]: boolean } = {};
  let primaryRippleClasses: { [k: string]: boolean } = {};
  let secondaryRippleClasses: { [k: string]: boolean } = {};
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

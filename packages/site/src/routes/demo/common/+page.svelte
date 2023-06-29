<svelte:head>
  <title>Common - SMUI</title>
</svelte:head>

<section>
  <h2>Common</h2>
  <p>A common Label and Icon, helper utilities, and elemental components.</p>

  <h5>Installation</h5>

  <pre class="demo-spaced">npm i -D @smui/common</pre>

  <h5>Demos</h5>

  <Demo component={CommonLabelIcon} file="common/_CommonLabelIcon.svelte">
    Common Label and Icon
    <svelte:fragment slot="subtitle">
      The common label and icon are also exported from each package that uses
      them.
    </svelte:fragment>
  </Demo>

  <Demo component={SmuiElement} file="common/_SmuiElement.svelte">
    SmuiElement Component
    <svelte:fragment slot="subtitle">
      Many SMUI components let you customize which DOM element is used to render
      them. This is done with the SmuiElement component.
    </svelte:fragment>
  </Demo>

  <Demo component={Svg} file="common/_Svg.svelte">
    Svg Elements
    <svelte:fragment slot="subtitle">
      In the SMUI components that let you customize which DOM element is used to
      render them, you can use the "svg" tag to render an SVG.
    </svelte:fragment>
  </Demo>

  <h4>Helper Utilities</h4>

  <Demo component={ClassMap} file="common/_ClassMap.svelte">
    Class Map
    <svelte:fragment slot="subtitle">
      Build a class string from a map of class names to conditions. This is
      useful when you need to add classes to a component, since Svelte's
      "class:" directives don't work on components. (It's also useful for
      actions that take <code>addClass</code> and <code>removeClass</code> functions.)
    </svelte:fragment>
  </Demo>

  <Demo component={Dispatch} file="common/_Dispatch.svelte">
    Dispatch
    <svelte:fragment slot="subtitle">
      Dispatch a custom event. This differs from Svelte's component event
      system, because these events require a DOM element as a target, can bubble
      (and do by default), and are cancelable with <code
        >event.preventDefault()</code
      >. All SMUI events are dispatched with this instead of Svelte's
      <code>createEventDispatcher</code>.
    </svelte:fragment>
  </Demo>

  <Demo
    component={ExcludeAndPrefixFilter}
    files={[
      'common/_ExcludeAndPrefixFilter.svelte',
      'common/_ExcludeAndPrefixFilterComponent.svelte',
    ]}
  >
    Exclude and Prefix Filter
    <svelte:fragment slot="subtitle">
      Exclude differs from normal <code>omit</code> functions by also excluding all
      properties that begin with a given string if that string ends with "$". Prefix
      Filter filters an object for only properties with a certain prefix. They are
      usually used together to allow props to be given to multiple elements within
      a component.
    </svelte:fragment>
  </Demo>

  <Demo
    component={ForwardEventsBuilder}
    files={[
      'common/_ForwardEventsBuilder.svelte',
      'common/_ForwardEventsBuilderComponent.svelte',
    ]}
  >
    Forward Events Builder
    <svelte:fragment slot="subtitle">
      Build an action to allow **all** events to be forwarded from a Svelte
      component, with support for event modifiers using the "$" syntax.
      <ul>
        <li>
          This is especially useful for UI library components, as it is
          generally unknown which events will be required from them for all
          desired use cases. For example, if a Button component only forwards a <code
            >click</code
          >
          event, then no use case that requires the <code>mouseover</code> or
          the
          <code>keypress</code>
          event can be used with it.
        </li>
        <li>
          In addition, a component that uses Svelte's built in event forwarding
          system cannot allow event listeners on the "capture" phase of the
          event lifecycle. It also cannot allow events to be cancelable with the
          browser's built in
          <code>preventDefault</code>
          function. In fact, the one big advantage to Svelte's event system, the
          fact that you don't need an element as an event target, doesn't even apply
          to UI library components.
        </li>
      </ul>
    </svelte:fragment>
  </Demo>

  <Demo
    component={UseActions}
    files={[
      'common/_UseActions.svelte',
      'common/_UseActionsComponent.svelte',
      'common/_UseActionsPannable.ts',
      'common/_UseActionsSwipeable.ts',
      'common/_UseActionsTappable.ts',
    ]}
  >
    Use Actions
    <svelte:fragment slot="subtitle">
      An action that takes actions and runs them on the element. Used to allow
      actions on components, and forward actions from one component to another,
      until the ultimate component finally renders the DOM element.
    </svelte:fragment>
  </Demo>

  <Demo component={Announce} file="common/_Announce.svelte">
    Announce
    <svelte:fragment slot="subtitle">
      A function that announces a string of text to users who are using a screen
      reader.
    </svelte:fragment>
  </Demo>

  <h4>Other Components</h4>

  <Demo
    component={ClassAdderBuilder}
    files={[
      'common/_ClassAdderBuilder.svelte',
      'common/_ClassAdderBuilderComponent.ts',
    ]}
  >
    Class Adder Builder
    <svelte:fragment slot="subtitle">
      Use this to build a ClassAdder component. ClassAdder components are useful
      for reducing the size of your bundle. If you have tons of simple
      components that just need to add classes/props or set a context, using
      ClassAdder components means there's only one actual Svelte component in
      your bundle for all of these many tiny components.
    </svelte:fragment>
  </Demo>
</section>

<script lang="ts">
  import Demo from '$lib/Demo.svelte';

  import CommonLabelIcon from './_CommonLabelIcon.svelte';
  import SmuiElement from './_SmuiElement.svelte';
  import Svg from './_Svg.svelte';
  import ClassMap from './_ClassMap.svelte';
  import Dispatch from './_Dispatch.svelte';
  import ExcludeAndPrefixFilter from './_ExcludeAndPrefixFilter.svelte';
  import ForwardEventsBuilder from './_ForwardEventsBuilder.svelte';
  import UseActions from './_UseActions.svelte';
  import Announce from './_Announce.svelte';
  import ClassAdderBuilder from './_ClassAdderBuilder.svelte';
</script>

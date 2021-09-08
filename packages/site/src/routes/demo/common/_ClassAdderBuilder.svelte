<div>
  <MyClassAdder>I'm a component with an added class!</MyClassAdder>
</div>

<script>
  import MyClassAdder from './_ClassAdderBuilderComponent.js';
</script>

<style>
  * :global(.my-added-class) {
    display: flex;
    text-align: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border: 2px solid currentColor;
  }
</style>

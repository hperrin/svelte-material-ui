<LayoutGrid
  align="right"
  style="border: 1px solid var(--mdc-theme-secondary, #333);"
>
  <Cell span={1}>
    <div class="demo-cell" style="height: 120px;">Tall Cell</div>
  </Cell>
  <Cell align="top" span={1}>
    <div class="demo-cell">Align Top</div>
  </Cell>
  <Cell align="middle" span={1}>
    <div class="demo-cell">Align Middle</div>
  </Cell>
  <Cell align="bottom" span={1}>
    <div class="demo-cell">Align Bottom</div>
  </Cell>
</LayoutGrid>

<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>

<style>
  .demo-cell {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mdc-theme-secondary, #333);
    color: var(--mdc-theme-on-secondary, #fff);
  }
</style>

<LayoutGrid>
  {#each Array(2) as _unused, _i}
    <Cell span={6}>
      <div class="demo-cell">Span 6</div>
    </Cell>
  {/each}
  {#each Array(4) as _unused, _i}
    <Cell span={3}>
      <div class="demo-cell">Span 3</div>
    </Cell>
  {/each}
  {#each Array(6) as _unused, _i}
    <Cell span={2}>
      <div class="demo-cell">Span 2</div>
    </Cell>
  {/each}
  {#each Array(12) as _unused, _i}
    <Cell span={1}>
      <div class="demo-cell">Span 1</div>
    </Cell>
  {/each}
  <Cell span={7}>
    <div class="demo-cell">Span 7</div>
  </Cell>
  <Cell span={5}>
    <div class="demo-cell">Span 5</div>
  </Cell>
  <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
    <div class="demo-cell" style="height: 80px;">
      Span 6 on desktop, 4 on tablet, 2 on phone (always half)
    </div>
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

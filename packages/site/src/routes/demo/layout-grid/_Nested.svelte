<LayoutGrid>
  {#each Array(9) as _unused, i}
    <Cell>
      <InnerGrid>
        {#each Array(3) as _unused, j}
          <Cell>
            <div class="demo-cell">Cell {i + 1}, {j + 1}</div>
          </Cell>
        {/each}
      </InnerGrid>
    </Cell>
  {/each}
</LayoutGrid>

<script lang="ts">
  import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
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

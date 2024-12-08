<div class="my-component {className}" {...exclude(restProps, ['button$'])}>
  <Button class="button {button$class}" {...prefixFilter(restProps, 'button$')}>
    {@render children?.()}
  </Button>
</div>

<script lang="ts">
  import type { Snippet, ComponentProps } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import { exclude, prefixFilter } from '@smui/common/internal';
  import Button from '@smui/button';

  type OwnProps = {
    class?: string;
    button$class?: string;
    children?: Snippet;
  };
  let {
    class: className = '',
    button$class = '',
    children,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'div', keyof OwnProps> & {
      [k in keyof ComponentProps<Button> as `button\$${k}`]?: ComponentProps<Button>[k];
    } = $props();
</script>

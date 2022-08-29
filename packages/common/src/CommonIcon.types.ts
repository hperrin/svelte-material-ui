import type { ComponentProps } from 'svelte';
import type { SmuiComponent, SmuiElementTagNameMap } from './smui.types.js';
import type SmuiElement from './SmuiElement.svelte';
import type Component from './CommonIcon.svelte';

export declare class CommonIconComponentDev<
  T extends keyof SmuiElementTagNameMap = 'svg',
  C extends SmuiComponent<T> = SmuiElement<T>
> extends Component<T, C> {}

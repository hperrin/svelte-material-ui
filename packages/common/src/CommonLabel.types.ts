import type { ComponentProps } from 'svelte';
import type { SmuiComponent, SmuiElementTagNameMap } from './smui.types.js';
import type SmuiElement from './SmuiElement.svelte';
import type Component from './CommonLabel.svelte';

export declare class CommonLabelComponentDev<
  T extends keyof SmuiElementTagNameMap = 'span',
  C extends SmuiComponent<T> = SmuiElement<T>
> extends Component<T, C> {}

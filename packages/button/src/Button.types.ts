import type { ComponentProps } from 'svelte';
import type { SmuiComponent, SmuiElement } from '@smui/common';
import type Component from './Button.svelte';

export declare class ButtonComponentDev<
  T extends keyof SmuiElementTagNameMap = 'button',
  C extends SmuiComponent<T> = SmuiElement<T>
> extends Component<T, C> {}

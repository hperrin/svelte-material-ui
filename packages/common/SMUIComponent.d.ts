import { SvelteComponentDev, SvelteComponentTyped } from 'svelte/internal';

export declare class SMUIComponent extends SvelteComponentDev {
  getElement(): HTMLElement;
}

export declare class SMUIComponentTyped<
  Props extends Record<string, any> = any,
  Events extends Record<string, any> = any,
  Slots extends Record<string, any> = any
> extends SvelteComponentTyped<Props, Events, Slots> {
  getElement(): HTMLElement;
}

declare module '*.svelte' {
  export { SMUIComponent as default };
}

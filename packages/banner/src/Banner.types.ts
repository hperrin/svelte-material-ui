import type Component from './Banner.svelte';

export declare class BannerComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLDivElement>>,
    'use' | 'class' | 'style' | 'open' | 'centered' | 'fixed' | 'mobileStacked'
  > &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `content\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `textWrapper\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    {
      [k in keyof Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      > as `graphic\$${k}`]?: Partial<
        svelte.JSX.HTMLAttributes<HTMLDivElement>
      >[k];
    } &
    Component['$$prop_def'];
}

export { CloseReason } from '@material/banner';

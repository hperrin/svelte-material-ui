# Theming SMUI

## Theming with Sass

The `_smui-theme.scss` file is where you define Sass variables for your theme. You can check out the READMEs of the MDC-Web components to learn how to deeply style the components. The most important one (and probably the only one you want) is setting the [theme colors](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-theme#color-scheme). For the Material color palette, you can @use ["@material/theme/color-palette"](https://github.com/material-components/material-components-web/blob/v11.0.0/packages/mdc-theme/_color-palette.scss). You might also want to style the [border radius variables](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-shape#sass-variables).

Here is an example `_smui-theme.scss` file you can use as a starting point.

```scss
@use '@material/theme/color-palette';

$background: #fff;

@use '@material/theme/index' as theme with (
  $primary: color-palette.$purple-500,
  $secondary: color-palette.$teal-600,
  $surface: #fff,
  $background: $background,
  $error: #b00020,
);

html,
body {
  background-color: $background;
  color: if(theme.contrast-tone($background) == 'dark', #000, #fff);
}

a {
  color: color-palette.$blue-500;
}
a:visited {
  color: color-palette.$blue-800;
}
```

## Theming the Bare CSS

If you use the bare CSS, you can set a subset of the theme options with CSS variables. Note that not all of the colors in SMUI read from CSS variables, so some parts will still use the colors defined in the original Sass compile. Below is a copy of the variables from the CSS on the SMUI website. You can use this as a starting point for your own theme.

```css
/* Theme colors. */
:root {
  --mdc-theme-primary: #ff3e00;
  --mdc-theme-secondary: #676778;
  --mdc-theme-background: #fff;
  --mdc-theme-surface: #fff;
  --mdc-theme-error: #b71c1c;
  --mdc-theme-on-primary: #fff;
  --mdc-theme-on-secondary: #fff;
  --mdc-theme-on-surface: #000;
  --mdc-theme-on-error: #fff;
  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-dark: #fff;
  --mdc-theme-text-secondary-on-dark: hsla(0, 0%, 100%, 0.7);
  --mdc-theme-text-hint-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-disabled-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-icon-on-dark: hsla(0, 0%, 100%, 0.5);
}

/* Layout grid spacing. */
:root {
  --mdc-layout-grid-margin-desktop: 24px;
  --mdc-layout-grid-gutter-desktop: 24px;
  --mdc-layout-grid-column-width-desktop: 72px;
  --mdc-layout-grid-margin-tablet: 16px;
  --mdc-layout-grid-gutter-tablet: 16px;
  --mdc-layout-grid-column-width-tablet: 72px;
  --mdc-layout-grid-margin-phone: 16px;
  --mdc-layout-grid-gutter-phone: 16px;
  --mdc-layout-grid-column-width-phone: 72px;
}
```

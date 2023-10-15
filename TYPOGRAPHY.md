# Material Typography

If you'd like to style your entire app using Material's typography, you can add Sass like this to your `_smui-theme.scss` files.

```scss
// Import the mixins.
@use '@material/typography/index' as typography;

html {
  @include typography.typography('body1');
}

h1 {
  @include typography.typography('headline1');
}

h2 {
  @include typography.typography('headline2');
}

h3 {
  @include typography.typography('headline3');
}

h4 {
  @include typography.typography('headline4');
}

h5 {
  @include typography.typography('headline5');
}

h6 {
  @include typography.typography('headline6');
}

caption {
  @include typography.typography('caption');
}

code,
pre {
  font-family: 'Roboto Mono', monospace;
}

small {
  font-size: 0.9em;
}

big {
  font-size: 1.1em;
}

b,
strong {
  font-weight: bold;
}
```

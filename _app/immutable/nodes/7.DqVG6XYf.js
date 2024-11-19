import{a as e,t as n}from"../chunks/disclose-version.Bsnu83OK.js";import"../chunks/legacy.BG3nWsJQ.js";import{n as t,a3 as p,c as r,r as c}from"../chunks/runtime.SXGrDfxi.js";import{h}from"../chunks/svelte-head.C25JiT13.js";var o=n(`<h1 id="theming-smui">Theming SMUI</h1> <h2 id="theming-with-sass">Theming with Sass</h2> <p>If you’re going to theme with Sass, reading an <a href="https://sass-lang.com/guide" rel="nofollow">introduction to Sass</a> would be helpful. Hoever, you don’t need to know much about Sass to make basic themes for SMUI.</p> <p>To create a custom Sass theme, install the SMUI Theme Builder.</p> <pre class="highlight"><code class="language-sh">npm install --save-dev smui-theme</code></pre> <p>You can use it to create your theme directory from a template. Adjust to your source directory if needed.</p> <pre class="highlight"><code class="language-sh">npx smui-theme template src/theme</code></pre> <p>This creates a <code>_smui-theme.scss</code> file in <code>src/theme</code> for light mode and an alternative <code>_smui-theme.scss</code> file in <code>src/theme/dark</code> for dark mode. That is where you set the theme variables.</p> <h3 id="building-your-theme">Building Your Theme</h3> <p>In your package.json file, add this script in the “scripts” section, adjusting the source/destination files as needed.</p> <pre class="highlight"><code class="language-plaintext">"prepare": "npm run smui-theme-light &amp;&amp; npm run smui-theme-dark",
"smui-theme-light": "smui-theme compile build/smui.css -i src/theme",
"smui-theme-dark": "smui-theme compile build/smui-dark.css -i src/theme/dark",</code></pre> <p>Or if you don’t need dark mode support.</p> <pre class="highlight"><code class="language-plaintext">"prepare": "smui-theme compile build/smui.css -i src/theme",</code></pre> <p>Now run <code>npm run prepare</code> to build the CSS file(s), then add them on your page. Something like this, adjusting the paths as needed.</p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/smui.css"</span> <span class="hljs-attr">media</span>=<span class="hljs-string">"(prefers-color-scheme: light)"</span> /></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"/smui-dark.css"</span>
  <span class="hljs-attr">media</span>=<span class="hljs-string">"screen and (prefers-color-scheme: dark)"</span>
/></span></code></pre> <p>Or if you don’t need dark mode support.</p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/smui.css"</span> /></span></code></pre> <p><strong>Important: The smui-theme compiler will only include the Sass for the packages installed when it is run. If you install a new SMUI package, you should run <code>npm run prepare</code> to rebuild the CSS.</strong></p> <h3 id="theme-variables">Theme Variables</h3> <p>The most important part of theming (and probably the only one you want) is setting the <a href="https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-theme#color-scheme" rel="nofollow">theme colors</a>. For the Material color palette, you can @use <a href="https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-theme/_color-palette.scss" rel="nofollow">“@material/theme/color-palette”</a>. You might also want to style the <a href="https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-shape#sass-variables" rel="nofollow">border radius variables</a>.</p> <p>To learn how to deeply style the individual components, you can check out the READMEs of <a href="https://github.com/material-components/material-components-web/tree/v14.0.0/packages" rel="nofollow">the MDC-Web components</a>. If you need more help, check out the <a href="https://m2.material.io/develop/web/theming/theming-guide" rel="nofollow">theming guide</a> on the MDC-Web website. SMUI uses all the styles from MDC-Web, so everything regarding Sass and CSS from that guide should work with SMUI.</p> <p>Here is an example <code>_smui-theme.scss</code> file you can use as a starting point.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">'@material/theme/color-palette'</span>;

<span class="hljs-variable">$background</span>: <span class="hljs-number">#fff</span>;

<span class="hljs-keyword">@use</span> <span class="hljs-string">'@material/theme/index'</span> as theme with (
  <span class="hljs-variable">$primary</span>: color-palette.<span class="hljs-variable">$purple-500</span>,
  <span class="hljs-variable">$secondary</span>: color-palette.<span class="hljs-variable">$teal-600</span>,
  <span class="hljs-variable">$surface</span>: <span class="hljs-number">#fff</span>,
  <span class="hljs-variable">$background</span>: <span class="hljs-variable">$background</span>,
  <span class="hljs-variable">$error</span>: <span class="hljs-number">#b00020</span>
);

<span class="hljs-selector-tag">html</span>,
<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">background-color</span>: <span class="hljs-variable">$background</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">if</span>(theme.<span class="hljs-built_in">contrast-tone</span>(<span class="hljs-variable">$background</span>) == <span class="hljs-string">'dark'</span>, <span class="hljs-number">#000</span>, <span class="hljs-number">#fff</span>);
}

<span class="hljs-selector-tag">a</span> {
  <span class="hljs-attribute">color</span>: color-palette.<span class="hljs-variable">$blue-500</span>;
}
<span class="hljs-selector-tag">a</span><span class="hljs-selector-pseudo">:visited</span> {
  <span class="hljs-attribute">color</span>: color-palette.<span class="hljs-variable">$blue-800</span>;
}</code></pre> <h3 id="customizing-further">Customizing Further</h3> <p>If you’d like to customize the styles even further, you can set additional variables in other MDC or SMUI components. Some notable ones are the <a href="https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-shape#sass-variables" rel="nofollow">shape variables</a> and the <a href="https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-typography/_typography.scss#L93" rel="nofollow">typography variables</a>. You can add them to your <code>_smui-theme.scss</code> file. For example, you can remove rounded corners in SMUI by setting the shape variables.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">'@material/shape/index'</span> as shape with (
  <span class="hljs-variable">$small-component-radius</span>: <span class="hljs-number">0</span>,
  <span class="hljs-variable">$medium-component-radius</span>: <span class="hljs-number">0</span>,
  <span class="hljs-variable">$large-component-radius</span>: <span class="hljs-number">0</span>
);</code></pre> <p>Just make sure that you put that directly after the <code>@use '@material/theme/index'</code> block. All <code>@use</code> statements in a file must precede any styles in Sass. Also, remember to include it in both your light and dark theme files if you’re using both.</p> <h3 id="adding-classes-and-variables">Adding Classes and Variables</h3> <p>If you want to use MDC’s classes and variables (like <code>var(--mdc-theme-primary)</code> and <code>class="mdc-theme--primary-bg"</code>), you can add the following line somewhere in your Sass files. A great place to add it is in your <code>_smui-theme.scss</code> files.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">'@material/theme/styles'</span>;</code></pre> <h2 id="adding-material-typography">Adding Material Typography</h2> <p>You can <a href="/TYPOGRAPHY.md">add Material typography</a> as the default for your app.</p> <h2 id="theming-the-bare-css">Theming the Bare CSS</h2> <p>If you use the bare CSS (or a premade theme), you can set a subset of the theme options with CSS variables. Note that not all of the colors in SMUI read from CSS variables, so some parts will still use the colors defined in the original Sass compile. Below is a copy of the variables from the CSS on the SMUI website. You can use this as a starting point for your own theme.</p> <pre class="highlight"><code class="language-css"><span class="hljs-comment">/* Theme colors. */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--mdc-theme-primary</span>: <span class="hljs-number">#ff3e00</span>;
  <span class="hljs-attr">--mdc-theme-secondary</span>: <span class="hljs-number">#676778</span>;
  <span class="hljs-attr">--mdc-theme-background</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--mdc-theme-surface</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--mdc-theme-error</span>: <span class="hljs-number">#b71c1c</span>;
  <span class="hljs-attr">--mdc-theme-on-primary</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--mdc-theme-on-secondary</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--mdc-theme-on-surface</span>: <span class="hljs-number">#000</span>;
  <span class="hljs-attr">--mdc-theme-on-error</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--mdc-theme-text-primary-on-background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.87</span>);
  <span class="hljs-attr">--mdc-theme-text-secondary-on-background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.54</span>);
  <span class="hljs-attr">--mdc-theme-text-hint-on-background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-disabled-on-background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-icon-on-background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-primary-on-light</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.87</span>);
  <span class="hljs-attr">--mdc-theme-text-secondary-on-light</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.54</span>);
  <span class="hljs-attr">--mdc-theme-text-hint-on-light</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-disabled-on-light</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-icon-on-light</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.38</span>);
  <span class="hljs-attr">--mdc-theme-text-primary-on-dark</span>: white;
  <span class="hljs-attr">--mdc-theme-text-secondary-on-dark</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.7</span>);
  <span class="hljs-attr">--mdc-theme-text-hint-on-dark</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.5</span>);
  <span class="hljs-attr">--mdc-theme-text-disabled-on-dark</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.5</span>);
  <span class="hljs-attr">--mdc-theme-text-icon-on-dark</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">255</span>, <span class="hljs-number">0.5</span>);
}

<span class="hljs-comment">/* Layout grid spacing. */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--mdc-layout-grid-margin-desktop</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attr">--mdc-layout-grid-gutter-desktop</span>: <span class="hljs-number">24px</span>;
  <span class="hljs-attr">--mdc-layout-grid-column-width-desktop</span>: <span class="hljs-number">72px</span>;
  <span class="hljs-attr">--mdc-layout-grid-margin-tablet</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attr">--mdc-layout-grid-gutter-tablet</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attr">--mdc-layout-grid-column-width-tablet</span>: <span class="hljs-number">72px</span>;
  <span class="hljs-attr">--mdc-layout-grid-margin-phone</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attr">--mdc-layout-grid-gutter-phone</span>: <span class="hljs-number">16px</span>;
  <span class="hljs-attr">--mdc-layout-grid-column-width-phone</span>: <span class="hljs-number">72px</span>;
}</code></pre>`,1);function i(a){var s=o();t(68),e(a,s)}var m=n('<section class="markdown svelte-1xoo2bu"><!></section>');function f(a){var s=m();h(u=>{p.title="Theming - SMUI"});var l=r(s);i(l),c(s),e(a,s)}export{f as component};

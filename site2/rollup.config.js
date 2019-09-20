import path  from 'path';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');
const aliases = () => ({
  resolve: ['.svelte', '.js', '.scss', '.css'],
  entries:[
    {find:/^@smui\/([^\/]+)$/, replacement: path.resolve(__dirname, '..', 'packages', '$1', 'index.js')},
    {find:/^@smui\/([^\/]+)\/(.*)$/, replacement: path.resolve(__dirname, '..', 'packages', '$1', '$2')}
  ]
});
const postcssOptions = extract => ({
  extensions: ['.scss', '.sass'],
  extract,
  minimize: true,
  use: [
    ['sass', {
      includePaths: [
        './src/theme',
        './node_modules',
        // This is only needed because we're using a local module. :-/
        // Normally, you would not need this line.
        path.resolve(__dirname, '..', 'node_modules')
      ]
    }]
  ]
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias(aliases()),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: false,
        css: true
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),

      postcss(postcssOptions(false)),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        runtimeHelpers: true,
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias(aliases()),
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        generate: 'ssr',
        dev
      }),
      resolve({
        dedupe
      }),
      commonjs(),

      postcss(postcssOptions(true))
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn,
  }
};

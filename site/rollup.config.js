import path from 'path';
import { mdsvex } from 'mdsvex';
import slug from 'remark-slug';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),

      svelte({
        extensions: ['.svelte', '.svx', '.md'],
        preprocess: mdsvex({
          extensions: ['.svx', '.md'],
          highlight: {
            alias: { svelte: 'html' },
          },
          remarkPlugins: [slug],
        }),
        compilerOptions: {
          dev,
          hydratable: true,
        },
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': false,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),

      svelte({
        extensions: ['.svelte', '.svx', '.md'],
        preprocess: mdsvex({
          extensions: ['.svx', '.md'],
          highlight: {
            alias: { svelte: 'html' },
          },
          remarkPlugins: [slug],
        }),
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true,
        },
        emitCss: false,
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
        emitFiles: false, // already emitted by client build
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
    ),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        preventAssignment: true,
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),
      commonjs(),
      !dev && terser(),
    ],
    preserveEntrySignatures: false,
    onwarn,
  },
};

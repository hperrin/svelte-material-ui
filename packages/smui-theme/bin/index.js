const path = require('path');
const fs = require('fs');
const sass = require('sass');
const fetch = require('node-fetch');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const HttpsProxyAgent = require('https-proxy-agent');

yargs(hideBin(process.argv))
  .command(
    'compile <output>',
    'Compile SMUI styles',
    function (yargs) {
      return yargs
        .positional('output', {
          type: 'string',
          describe: 'The output file to write CSS to.',
          demandOption: true,
          requiresArg: true,
        })
        .options({
          includes: {
            alias: 'i',
            type: 'array',
            description: 'Sass include paths.',
            default: [],
            requiresArg: true,
          },
          'output-style': {
            alias: 's',
            type: 'string',
            description: 'CSS output style.',
            default: 'compressed',
            choices: ['compressed', 'expanded'],
            requiresArg: true,
          },
        });
    },
    (argv) => {
      if (!fs.existsSync(path.dirname(argv.output))) {
        console.error(
          "It looks like the output directory doesn't exist.\n",
          path.dirname(argv.output),
          '\nDid you mean to output the file into another directory?'
        );
        process.exit(1);
      }

      console.log('Compiling SMUI Styles...');

      const result = sass.renderSync({
        // _index imports "smui-theme"
        file: path.resolve(
          __dirname,
          '..',
          argv.includes.length ? '_index.scss' : '_style.scss'
        ), // require.resolve('smui-theme/' + (argv.includes.length ? '_index.scss' : '_style.scss')),
        includePaths: [
          ...argv.includes,
          // Include the node_modules directory for MDC styles.
          path.resolve(
            path.dirname(require.resolve('@material/dom/package.json')),
            '..',
            '..'
          ),
          // Include the fallback directory, with no styles, for packages
          // that aren't installed
          path.resolve(
            __dirname,
            '..', // path.dirname(require.resolve('smui-theme/package.json')),
            'fallback'
          ),
        ],
        outputStyle: argv.outputStyle,
      });

      console.log('Writing CSS to ' + argv.output + '...');
      fs.writeFileSync(argv.output, result.css);
    }
  )
  .command(
    'template <location>',
    'Create an SMUI theme template in a given directory',
    function (yargs) {
      return yargs
        .positional('location', {
          type: 'string',
          describe:
            "The output directory. If it doesn't exist, it will be created.",
          demandOption: true,
          requiresArg: true,
        })
        .options({
          'include-dark': {
            alias: 'd',
            type: 'boolean',
            description: 'Include a dark theme.',
            default: true,
          },
        });
    },
    async (argv) => {
      console.log('Creating theme files...');

      const writeTheme = async (dark) => {
        console.log(
          `Fetching latest${dark ? ' dark' : ''} theme file from SMUI site...`
        );

        const directory = dark
          ? path.resolve(argv.location, 'dark')
          : path.resolve(argv.location);

        const themeSource = await fetch(
          `https://raw.githubusercontent.com/hperrin/svelte-material-ui/master/packages/site/src/theme/${
            dark ? 'dark/' : ''
          }_smui-theme.scss`,
          {
            agent: process.env['https_proxy']
              ? new HttpsProxyAgent(process.env['https_proxy'])
              : undefined,
          }
        ).then((result) => result.text());

        if (!themeSource) {
          console.error("Couldn't get theme source.");
          process.exit(1);
        }

        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory, {
            recursive: true,
          });
        }

        const file = path.resolve(directory, '_smui-theme.scss');
        console.log('Writing template theme to ' + file + '...');
        fs.writeFileSync(file, themeSource);
      };

      await writeTheme(false);

      if (argv.includeDark) {
        await writeTheme(true);
      }
    }
  )
  .completion()
  .version()
  .help().argv;

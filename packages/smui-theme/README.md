# Svelte Material UI - Theme Builder

A helper package for compiling SMUI styles.

# Installation

```sh
npm install --save-dev smui-theme
```

# Getting Started

Try these.

```sh
npx smui-theme template src/theme
npx smui-theme compile build/smui.css -i src/theme
npx smui-theme compile build/smui-dark.css -i src/theme/dark
```

# Usage

Run `npx smui-theme `

```
smui-theme [command]

Commands:
  smui-theme compile <output>     Compile SMUI styles
  smui-theme template <location>  Create an SMUI theme template in a given
                                  directory
  smui-theme completion           generate completion script

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Compile Command

```
smui-theme compile <output>

Compile SMUI styles

Positionals:
  output  The output file to write CSS to.                   [string] [required]

Options:
      --version       Show version number                              [boolean]
      --help          Show help                                        [boolean]
  -i, --includes      Sass include paths.                  [array] [default: []]
  -s, --output-style  CSS output style.
            [string] [choices: "compressed", "expanded"] [default: "compressed"]
```

## Template Command

```
smui-theme template <location>

Create an SMUI theme template in a given directory

Positionals:
  location  The output directory. If it doesn't exist, it will be created.
                                                             [string] [required]

Options:
      --version       Show version number                              [boolean]
      --help          Show help                                        [boolean]
  -d, --include-dark  Include a dark theme.            [boolean] [default: true]
```

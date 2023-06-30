# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [7.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.13...v7.0.0-beta.14) (2023-06-30)


### Bug Fixes

* move omit generic down line to fix union type that is too complex to represent type error ([b26b1d4](https://github.com/hperrin/svelte-material-ui/commit/b26b1d471d9cc2c6e5aa6e07e3c71cd692271fdb))





# [7.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.12...v7.0.0-beta.13) (2023-06-29)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.11...v7.0.0-beta.12) (2023-06-29)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.10...v7.0.0-beta.11) (2023-06-29)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.9...v7.0.0-beta.10) (2023-06-28)


### Bug Fixes

* import ambient types from index files for ts event support ([d62e12c](https://github.com/hperrin/svelte-material-ui/commit/d62e12c212e0fd1ba24d3a4e2af0a4279dc28e5e))
* reference ambient types instead of importing them ([2d1193c](https://github.com/hperrin/svelte-material-ui/commit/2d1193cc615060c95fb6965cc10b758af9f92e55))
* suppress typescript issues with importing svelte internals ([985183c](https://github.com/hperrin/svelte-material-ui/commit/985183ce19213580be9dafd249deefcc82dc3679))





# [7.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.8...v7.0.0-beta.9) (2023-06-20)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.7...v7.0.0-beta.8) (2023-04-29)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.6...v7.0.0-beta.7) (2023-04-29)


### Bug Fixes

* don't focus autocomplete after selecting item to avoid performaing async search again ([a3dda7d](https://github.com/hperrin/svelte-material-ui/commit/a3dda7d9f03a5f923445caa3c5a948151d9f724e))





# [7.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.5...v7.0.0-beta.6) (2023-04-29)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.4...v7.0.0-beta.5) (2023-04-28)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.3...v7.0.0-beta.4) (2023-04-24)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.2...v7.0.0-beta.3) (2023-04-06)

**Note:** Version bump only for package @smui/menu-surface





# [7.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.1...v7.0.0-beta.2) (2023-04-06)


### Bug Fixes

* never confuse an exported function type with an html attr type ([d00860a](https://github.com/hperrin/svelte-material-ui/commit/d00860ac03a2c660819079bb7bb11c945d580c30)), closes [#575](https://github.com/hperrin/svelte-material-ui/issues/575)





# [7.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.0...v7.0.0-beta.1) (2023-04-04)


### Bug Fixes

* update packages and fix issues ([13050de](https://github.com/hperrin/svelte-material-ui/commit/13050deacb8a40d679db9ad92ca88c3a0b436b47))





# [7.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v6.2.0...v7.0.0-beta.0) (2022-10-12)

### Features

- migrate to common element component instead of elemental components ([8aaf611](https://github.com/hperrin/svelte-material-ui/commit/8aaf6113bb9193f3c198c5904dac19f4db609737))
- redo type system to bring types into their svelte files ([61b9395](https://github.com/hperrin/svelte-material-ui/commit/61b93954390521e2684f2d3820e8f522d69727fb))
- update to mdc-web 14, implement new features and fixes ([cca1827](https://github.com/hperrin/svelte-material-ui/commit/cca1827737efb83d637b3c26ac367ac2117bb707))

## [6.1.4](https://github.com/hperrin/svelte-material-ui/compare/v6.1.3...v6.1.4) (2022-09-27)

### Bug Fixes

- update svelte-strip for module script lang fix ([2dc89a9](https://github.com/hperrin/svelte-material-ui/commit/2dc89a953882b6319ef453803107e20a0ca1a938))

# [6.1.0](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0...v6.1.0) (2022-08-20)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.16...v6.0.0) (2022-07-23)

### Bug Fixes

- resolved "max height" typo in menu-surface ([b5f334f](https://github.com/hperrin/svelte-material-ui/commit/b5f334f47a9cbefc1a1cf6ef00f30e02dff6dc7a))
- set menu surface max height if it changes to zero after initialization ([563163a](https://github.com/hperrin/svelte-material-ui/commit/563163a45bc45d2d0c640d1f3ede32de38e2da5b))
- update sveltekit and fix package.json ([9dfb3d0](https://github.com/hperrin/svelte-material-ui/commit/9dfb3d03209d62c9a9febf49fff884df3ba96964)), closes [#425](https://github.com/hperrin/svelte-material-ui/issues/425)
- upgrade packages and fix issues with new versions ([67f45cc](https://github.com/hperrin/svelte-material-ui/commit/67f45cc6bd628bd772c8717d20c0699be08e5d0d))

# [6.0.0-beta.16](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.15...v6.0.0-beta.16) (2022-04-11)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.15](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.14...v6.0.0-beta.15) (2022-03-02)

### Bug Fixes

- error when menu is destructed while it's open ([de95905](https://github.com/hperrin/svelte-material-ui/commit/de959053e17b1ca7daa4704afa3fd81af436daa9))

# [6.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.13...v6.0.0-beta.14) (2022-02-13)

### Bug Fixes

- update to latest packages, sveltekit and fix issues ([ca21255](https://github.com/hperrin/svelte-material-ui/commit/ca2125517a399b6cf28bafa3485b7e83ac4c927b))

### Features

- update SvelteKit and move types to separate imports ([5fb1216](https://github.com/hperrin/svelte-material-ui/commit/5fb1216d1182764e688a2f20cb25c2f5d034f0e7))

# [6.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.12...v6.0.0-beta.13) (2022-01-05)

### Bug Fixes

- import everything from material correctly. replace announce function with own implementation ([7ac0383](https://github.com/hperrin/svelte-material-ui/commit/7ac0383ebe384332a7666a451caa6209a1af0da9))
- import from commonjs util file in material animation ([85aabaa](https://github.com/hperrin/svelte-material-ui/commit/85aabaa7617c702573bd53f89e2d782e6be9a6e1))

# [6.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.11...v6.0.0-beta.12) (2022-01-05)

### Bug Fixes

- correct entries in package.json files, noExternal config no longer needed ([95c56b5](https://github.com/hperrin/svelte-material-ui/commit/95c56b56b1859f8117ed9f3580a01c13d799499d)), closes [#375](https://github.com/hperrin/svelte-material-ui/issues/375)

# [6.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.10...v6.0.0-beta.11) (2021-12-29)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.9...v6.0.0-beta.10) (2021-12-28)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.8...v6.0.0-beta.9) (2021-12-15)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.7...v6.0.0-beta.8) (2021-12-14)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.6...v6.0.0-beta.7) (2021-12-14)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.5...v6.0.0-beta.6) (2021-12-11)

### Bug Fixes

- migrate autocomplete to typescript and new features, also some fixes ([0107ca6](https://github.com/hperrin/svelte-material-ui/commit/0107ca6c8a01af66a69db74626e931afd598eff1))

# [6.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.4...v6.0.0-beta.5) (2021-12-10)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.3...v6.0.0-beta.4) (2021-11-25)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.2...v6.0.0-beta.3) (2021-11-24)

### Bug Fixes

- include svelte tsconfig from common module ([2cfc838](https://github.com/hperrin/svelte-material-ui/commit/2cfc83825203da21bd5a5864df44d48099a9004e))

# [6.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.1...v6.0.0-beta.2) (2021-11-17)

**Note:** Version bump only for package @smui/menu-surface

# [6.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.0...v6.0.0-beta.1) (2021-11-17)

### Bug Fixes

- lock to last good ts minor version, add index files for repl ([d77c735](https://github.com/hperrin/svelte-material-ui/commit/d77c73513a66de0075dd17ba0092c0a44c66d498))

# [6.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v5.0.1...v6.0.0-beta.0) (2021-11-17)

### Bug Fixes

- get sass compiling for all packages ([6405961](https://github.com/hperrin/svelte-material-ui/commit/6405961324c340098f00b942ecbffe9071f0c01d))
- rm deprecation warn by updating to material 12 + breaking changes ([e3e95e1](https://github.com/hperrin/svelte-material-ui/commit/e3e95e1c3e499e5332cac6d15790505db58d268d))
- update other packages, move svelte to peerDependencies ([2c1b137](https://github.com/hperrin/svelte-material-ui/commit/2c1b1370e10503110421bd66bcb31a81e57cf182))
- use mdc-web's sass imports and include sass from dev packages ([5ccdf53](https://github.com/hperrin/svelte-material-ui/commit/5ccdf532921d884aab71661c520c33b1b06ac7bd))

### Features

- add skipRestoreFocus property to list item for menus ([58b98e0](https://github.com/hperrin/svelte-material-ui/commit/58b98e07adcc44fbe505cc0f899c5d0f17f807a2))
- new package directory structure, include stripped svelte files so no preprocess needed ([382e78d](https://github.com/hperrin/svelte-material-ui/commit/382e78dc4d9b6ddfd7832bdfd90bad0cea402b1d))
- remove styled endpoints and update readme and installation docs ([c8755d4](https://github.com/hperrin/svelte-material-ui/commit/c8755d41a24658b927089f8193d18b30df28e2a7))
- rename MDC events to SMUI events ([55effc6](https://github.com/hperrin/svelte-material-ui/commit/55effc6e92e04cb6d27964e1bb30d4c507922e23))
- upgrade mdc-web packages to v13 ([9f0457f](https://github.com/hperrin/svelte-material-ui/commit/9f0457f3bcd8c451c66392fc2a19bc60b5f1e958))

### BREAKING CHANGES

- No more styled endpoints, so the advanced styling
  method now requires that you import the Sass yourself.

## [5.0.1](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0...v5.0.1) (2021-11-16)

**Note:** Version bump only for package @smui/menu-surface

# [5.0.0](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.8...v5.0.0) (2021-11-10)

**Note:** Version bump only for package @smui/menu-surface

# [5.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.7...v5.0.0-beta.8) (2021-11-02)

**Note:** Version bump only for package @smui/menu-surface

# [5.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.6...v5.0.0-beta.7) (2021-09-28)

**Note:** Version bump only for package @smui/menu-surface

# [5.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.5...v5.0.0-beta.6) (2021-09-27)

### Bug Fixes

- lock sass to the last working minor release ([62d4895](https://github.com/hperrin/svelte-material-ui/commit/62d4895af8fe252c8ade2587845e92ced70d6d9c)), closes [#334](https://github.com/hperrin/svelte-material-ui/issues/334)

# [5.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.4...v5.0.0-beta.5) (2021-09-18)

**Note:** Version bump only for package @smui/menu-surface

# [5.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2021-09-17)

### Bug Fixes

- use index.js endpoint within elements and internal for common package imports ([cf76ed2](https://github.com/hperrin/svelte-material-ui/commit/cf76ed29ccad3c1e555f1456b22ffe91b8ca5cc2))

# [5.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.2...v5.0.0-beta.3) (2021-09-17)

### Bug Fixes

- include extensions in import paths ([3c06e33](https://github.com/hperrin/svelte-material-ui/commit/3c06e33eac7cea142af604e96ce38916755817b5))

### Features

- remove bare endpoints ([09ad6aa](https://github.com/hperrin/svelte-material-ui/commit/09ad6aa5807923900a57c6179ee248b08f1a1575))

### BREAKING CHANGES

- Bare endpoints in packages have been removed. You don't need them.

# [5.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.0...v5.0.0-beta.1) (2021-09-14)

### Bug Fixes

- correctly provide html attributes ([048a11d](https://github.com/hperrin/svelte-material-ui/commit/048a11d0d84707a90a0ccde794b7c31155b71ca9))
- some type issues and simpler ambient declarations ([44e2cea](https://github.com/hperrin/svelte-material-ui/commit/44e2cea7764733c97e629fa3d2498516cd0756b1))

# [5.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v4.2.0...v5.0.0-beta.0) (2021-09-14)

### Bug Fixes

- make non-index import paths explicit ([2821cb0](https://github.com/hperrin/svelte-material-ui/commit/2821cb02391b332692489022b788c265ce29c1bb))

### Features

- add prop types for HTML props for components ([f5c6e53](https://github.com/hperrin/svelte-material-ui/commit/f5c6e53390b4cbb2da04f543ef877cf03133fc80))
- got sveltekit working local in dev ([024b19a](https://github.com/hperrin/svelte-material-ui/commit/024b19aed05718b76b027dd2e908f4734d17c060))
- implement js builds of all ts files ([085b829](https://github.com/hperrin/svelte-material-ui/commit/085b82932f75a5c62bb4d5f709a19a8b3cbd12a4))
- migrate common and button to typescript ([cf9c6af](https://github.com/hperrin/svelte-material-ui/commit/cf9c6af17c59afc433c58245cc9444aece2195cc))
- migrate floating label, line ripple, and notched outline to typescript ([f05373e](https://github.com/hperrin/svelte-material-ui/commit/f05373ebdc97ba3d9c11059758166fd82bb9d9c8))
- migrate menu surface and menu to typescript ([b479315](https://github.com/hperrin/svelte-material-ui/commit/b479315f4eccd9b3885eab31993949c8d734b888))

### BREAKING CHANGES

- Had to rename export "default" from Button to "defaultAction".

# [4.2.0](https://github.com/hperrin/svelte-material-ui/compare/v4.1.0...v4.2.0) (2021-05-05)

**Note:** Version bump only for package @smui/menu-surface

# [4.1.0](https://github.com/hperrin/svelte-material-ui/compare/v4.0.0...v4.1.0) (2021-04-28)

### Reverts

- Revert "v4.1.0" ([54dfd48](https://github.com/hperrin/svelte-material-ui/commit/54dfd48fc0560843ccef9cb9821b12e251977c67))
- Revert "v4.1.0" ([3e683d9](https://github.com/hperrin/svelte-material-ui/commit/3e683d9166e7df9eaab2756c9ace64c4dd547758))

# [4.0.0](https://github.com/hperrin/svelte-material-ui/compare/v3.1.0...v4.0.0) (2021-04-24)

### Features

- remove style importing from index files, no more /bare ([2ab900a](https://github.com/hperrin/svelte-material-ui/commit/2ab900a4a2b9705b3844121f7a987c272171c7c5))

# [3.1.0](https://github.com/hperrin/svelte-material-ui/compare/v3.0.3...v3.1.0) (2021-04-22)

### Features

- update to MDC 11, new fullscreen dialogs ([ee962bc](https://github.com/hperrin/svelte-material-ui/commit/ee962bc9cd654423322330a7f786ce2c350e3e49))

### Reverts

- Revert "v3.1.0" ([ade5890](https://github.com/hperrin/svelte-material-ui/commit/ade589069db4f68f21815138dfc86805bac11774))

## [3.0.2](https://github.com/hperrin/svelte-material-ui/compare/v3.0.1...v3.0.2) (2021-04-21)

**Note:** Version bump only for package @smui/menu-surface

## [3.0.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0...v3.0.1) (2021-04-21)

### Features

- implement fixes and workarounds for Vite and SvelteKit ([9ed43aa](https://github.com/hperrin/svelte-material-ui/commit/9ed43aa83523877decd3c81c8c06f1219b302a76))

### Reverts

- Revert "v3.0.1" ([d6a0858](https://github.com/hperrin/svelte-material-ui/commit/d6a08583dd65bb71f68fa11ff47e130318c844e5))

# [3.0.0](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.12...v3.0.0) (2021-04-19)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-04-18)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-04-18)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2021-04-17)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2021-04-16)

### Bug Fixes

- menu surface anchor adds classes with default function ([27f5a16](https://github.com/hperrin/svelte-material-ui/commit/27f5a16701ea98b1a53d1d178ee6c41f58d54bea))

# [3.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2021-04-15)

### Features

- forward all events, and only forward when bound, and allow modifiers ([50a0db3](https://github.com/hperrin/svelte-material-ui/commit/50a0db3af14bd8042e06c193a903526abcad35e5))

# [3.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-04-15)

### Reverts

- Revert "docs: use absolute links in package readmes" ([3392c16](https://github.com/hperrin/svelte-material-ui/commit/3392c167bb145392929a970f58b8b3a1880fa8d6))

# [3.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-04-14)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-04-14)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-04-12)

### Features

- new Banner component ([566fa13](https://github.com/hperrin/svelte-material-ui/commit/566fa1374207557d38973c3a9d093676d19248e1))

# [3.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-12)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2021-04-11)

**Note:** Version bump only for package @smui/menu-surface

# [3.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.1...v3.0.0-beta.0) (2021-04-11)

### Bug Fixes

- button styling, menu events ([53d0282](https://github.com/hperrin/svelte-material-ui/commit/53d02828f9704b50e3dff9213a55815840d11098))
- class and attr removal ([b3ca6f1](https://github.com/hperrin/svelte-material-ui/commit/b3ca6f16b2adda7cead2ef2c54ce3c446eeb6179))
- fixed event bubbling ([8b40fa0](https://github.com/hperrin/svelte-material-ui/commit/8b40fa04b463ee40819eda96785efb69b01e3e3a))
- list item ripples and menus ([4010556](https://github.com/hperrin/svelte-material-ui/commit/4010556b84b634177c706f0e6cec20b0c8500743))
- more components fixes ([fbdf204](https://github.com/hperrin/svelte-material-ui/commit/fbdf204a320fa0ed9ee5ec593e6bcbf3678fae79))
- ripple activation and colors ([d584be7](https://github.com/hperrin/svelte-material-ui/commit/d584be7d284562d07e278a2dc21bb039ed6a208b))
- update all the sass imports ([172a557](https://github.com/hperrin/svelte-material-ui/commit/172a55777a506ac26bbe524ca8cab79904512f24))
- update new class internals to report hasClass properly ([52a7b2c](https://github.com/hperrin/svelte-material-ui/commit/52a7b2cf5cfbd60ee87d6b27bcb8c796e84d1275))

### Features

- updated IconButton for MDC v10 ([1a6fc5a](https://github.com/hperrin/svelte-material-ui/commit/1a6fc5a019167ff7d4d1f1c35f843e7686069e3a))
- updated Menu for MDC v10 ([ddd6262](https://github.com/hperrin/svelte-material-ui/commit/ddd6262faa7b833472c6bf8ccca6017e6e06ebbe))
- updated MenuSurface for MDC v10 ([c032c89](https://github.com/hperrin/svelte-material-ui/commit/c032c895ff6463c9cd904e6244027918cc5292e2))
- updated Select Menus for MDC v10 ([f066d20](https://github.com/hperrin/svelte-material-ui/commit/f066d20024b4b7385bb87cfb3b7231087c16ac31))
- updated TopAppBar for MDC v10 ([6cf291d](https://github.com/hperrin/svelte-material-ui/commit/6cf291df3c5833b4938b95ff26138643d3511bcb))
- upgrade upstream MDC components to v10 ([d47c59a](https://github.com/hperrin/svelte-material-ui/commit/d47c59af50bbec2b7de810261b3cb7a2ffe59180))

### BREAKING CHANGES

- Upgrading to v10 of upstream components. Their APIs will change. View the component READMEs.

# [2.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2021-03-27)

**Note:** Version bump only for package @smui/menu-surface

# [2.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-alpha.0...v2.0.0-beta.0) (2021-01-01)

**Note:** Version bump only for package @smui/menu-surface

# [2.0.0-alpha.0](https://github.com/hperrin/svelte-material-ui/compare/v1.1.0...v2.0.0-alpha.0) (2020-12-31)

### Features

- update Select to work with MDC 4 ([81a7ee9](https://github.com/hperrin/svelte-material-ui/commit/81a7ee992d968bab7e950b6ff7db2d47c7c17b79))

### BREAKING CHANGES

- Select has some breaking changes listed in the migration docs.

# [1.1.0](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0...v1.1.0) (2020-12-24)

**Note:** Version bump only for package @smui/menu-surface

# [1.0.0](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.21...v1.0.0) (2020-08-04)

**Note:** Version bump only for package @smui/menu-surface

# [1.0.0-beta.21](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2020-04-19)

### Bug Fixes

- undefined current_component in browsers not supporting import [#60](https://github.com/hperrin/svelte-material-ui/issues/60) ([708abd6](https://github.com/hperrin/svelte-material-ui/commit/708abd6dda5579c2e77e741349834deca0bd4d61))

# [1.0.0-beta.20](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2020-01-31)

### Bug Fixes

- Cannot read property 'destroy' of undefined in menuSurface ([2bd8d37](https://github.com/hperrin/svelte-material-ui/commit/2bd8d37eb572211365b7aa6163036a7fd5c21c3f))

# [1.0.0-beta.19](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2019-12-13)

### Bug Fixes

- prevent new Svelte versions from mangling MDC classes ([8a94e95](https://github.com/hperrin/svelte-material-ui/commit/8a94e95574c36595158603c83b3d79892fe4af4d)), closes [#52](https://github.com/hperrin/svelte-material-ui/issues/52)

# [1.0.0-beta.18](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2019-11-08)

### Bug Fixes

- remove hoisted menu-surface from body in onDestroy ([8e905b7](https://github.com/hperrin/svelte-material-ui/commit/8e905b7cf28b1bb5ddf8e88b478123532146e2b1))

# [1.0.0-beta.17](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2019-10-28)

### Features

- update MDC package versions to 3.2.0 ([605753d](https://github.com/hperrin/svelte-material-ui/commit/605753dd3fe121eba2654498f62f8ddd57a9e3b9))

# [1.0.0-beta.16](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2019-09-24)

**Note:** Version bump only for package @smui/menu-surface

# [1.0.0-beta.15](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2019-09-13)

**Note:** Version bump only for package @smui/menu-surface

# [1.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2019-09-07)

### Bug Fixes

- fixed the packages' sass commands ([97d64ea](https://github.com/hperrin/svelte-material-ui/commit/97d64ea))

# [1.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2019-09-06)

### Features

- add bare js and css to all components ([ebe7a6d](https://github.com/hperrin/svelte-material-ui/commit/ebe7a6d))

# [1.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2019-09-06)

### Bug Fixes

- import styles correctly ([37e6fa6](https://github.com/hperrin/svelte-material-ui/commit/37e6fa6))

# [1.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2019-09-03)

**Note:** Version bump only for package @smui/menu-surface

# [1.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2019-08-30)

**Note:** Version bump only for package @smui/menu-surface

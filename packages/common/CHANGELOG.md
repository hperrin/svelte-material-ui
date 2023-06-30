# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [7.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.13...v7.0.0-beta.14) (2023-06-30)


### Bug Fixes

* move omit generic down line to fix union type that is too complex to represent type error ([b26b1d4](https://github.com/hperrin/svelte-material-ui/commit/b26b1d471d9cc2c6e5aa6e07e3c71cd692271fdb))





# [7.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.12...v7.0.0-beta.13) (2023-06-29)


### Bug Fixes

* rework tag prop to allow svg, simplify prop types to fix ts error ([d1610c8](https://github.com/hperrin/svelte-material-ui/commit/d1610c8ebc1f8df2653770f45c43ac93ef78e4df))





# [7.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.11...v7.0.0-beta.12) (2023-06-29)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.10...v7.0.0-beta.11) (2023-06-29)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.9...v7.0.0-beta.10) (2023-06-28)


### Bug Fixes

* import ambient types from index files for ts event support ([d62e12c](https://github.com/hperrin/svelte-material-ui/commit/d62e12c212e0fd1ba24d3a4e2af0a4279dc28e5e))
* reference ambient types instead of importing them ([2d1193c](https://github.com/hperrin/svelte-material-ui/commit/2d1193cc615060c95fb6965cc10b758af9f92e55))
* remove reliance on svelte internals from forward events builder ([dea2cc9](https://github.com/hperrin/svelte-material-ui/commit/dea2cc915bfa4d691590d2fec5a0ffb78ab4d827))
* suppress typescript issues with importing svelte internals ([985183c](https://github.com/hperrin/svelte-material-ui/commit/985183ce19213580be9dafd249deefcc82dc3679))


### Features

* migration to Svelte 4 in components ([51d2411](https://github.com/hperrin/svelte-material-ui/commit/51d2411a5630ca5511ad9e79a2f333339998f939))
* use new generics definitions for better typing of components with tag prop ([4476f3a](https://github.com/hperrin/svelte-material-ui/commit/4476f3ab3b77df32b53b610c4ce2ecdc3b0fcd96))





# [7.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.8...v7.0.0-beta.9) (2023-06-20)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.7...v7.0.0-beta.8) (2023-04-29)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.6...v7.0.0-beta.7) (2023-04-29)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.5...v7.0.0-beta.6) (2023-04-29)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.4...v7.0.0-beta.5) (2023-04-28)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.3...v7.0.0-beta.4) (2023-04-24)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.2...v7.0.0-beta.3) (2023-04-06)

**Note:** Version bump only for package @smui/common





# [7.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.1...v7.0.0-beta.2) (2023-04-06)


### Bug Fixes

* exported type of ClassAdder component ([7f35915](https://github.com/hperrin/svelte-material-ui/commit/7f35915ca257ddbbcebe4f610e1f8474bb6d6429))
* never confuse an exported function type with an html attr type ([d00860a](https://github.com/hperrin/svelte-material-ui/commit/d00860ac03a2c660819079bb7bb11c945d580c30)), closes [#575](https://github.com/hperrin/svelte-material-ui/issues/575)





# [7.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v7.0.0-beta.0...v7.0.0-beta.1) (2023-04-04)


### Bug Fixes

* many type issues ([d5ade30](https://github.com/hperrin/svelte-material-ui/commit/d5ade309eebf9bc5c17826730e691077f495cda8)), closes [#527](https://github.com/hperrin/svelte-material-ui/issues/527)
* update packages and fix issues ([13050de](https://github.com/hperrin/svelte-material-ui/commit/13050deacb8a40d679db9ad92ca88c3a0b436b47))


### Features

* redo autocomplete resetTextWhenSelected option, use event cancelation instead ([78950d4](https://github.com/hperrin/svelte-material-ui/commit/78950d484fd740dc3568b0097f812cb8dd13c5da))





# [7.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v6.2.0...v7.0.0-beta.0) (2022-10-12)

### Bug Fixes

- default element in common icon ([98b1536](https://github.com/hperrin/svelte-material-ui/commit/98b1536b39bae9580982a6979d66cf2b7ccd2da8))
- turns out, svelte still doesn't report exported module members in typescript ([72702aa](https://github.com/hperrin/svelte-material-ui/commit/72702aa2da6bcc36e857ed514fa4f4308ce70c84))
- use separate svg component and fix all type errors ([9accd0b](https://github.com/hperrin/svelte-material-ui/commit/9accd0b6b57c1733dded37f95840787076aaf500))

### Features

- migrate to common element component instead of elemental components ([8aaf611](https://github.com/hperrin/svelte-material-ui/commit/8aaf6113bb9193f3c198c5904dac19f4db609737))
- new common element component with dynamic element support ([bfa69d2](https://github.com/hperrin/svelte-material-ui/commit/bfa69d2197a80086f6972779989d6598e8a9ae1b))
- new typing method gets rid of separate type files, keeps html prop autocomplete ([bf7b2a4](https://github.com/hperrin/svelte-material-ui/commit/bf7b2a44f95ac135aadc387cb70f3ac6e7b6612e))
- redo type system to bring types into their svelte files ([61b9395](https://github.com/hperrin/svelte-material-ui/commit/61b93954390521e2684f2d3820e8f522d69727fb))
- trying to get components with generic types working ([9952576](https://github.com/hperrin/svelte-material-ui/commit/99525765fa42efac0236b9a7553b1537ed08b50b))
- update to mdc-web 14, implement new features and fixes ([cca1827](https://github.com/hperrin/svelte-material-ui/commit/cca1827737efb83d637b3c26ac367ac2117bb707))

## [6.1.4](https://github.com/hperrin/svelte-material-ui/compare/v6.1.3...v6.1.4) (2022-09-27)

### Bug Fixes

- update svelte-strip for module script lang fix ([2dc89a9](https://github.com/hperrin/svelte-material-ui/commit/2dc89a953882b6319ef453803107e20a0ca1a938))

# [6.1.0](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0...v6.1.0) (2022-08-20)

**Note:** Version bump only for package @smui/common

# [6.0.0](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.16...v6.0.0) (2022-07-23)

### Bug Fixes

- update sveltekit and fix package.json ([9dfb3d0](https://github.com/hperrin/svelte-material-ui/commit/9dfb3d03209d62c9a9febf49fff884df3ba96964)), closes [#425](https://github.com/hperrin/svelte-material-ui/issues/425)
- upgrade packages and fix issues with new versions ([67f45cc](https://github.com/hperrin/svelte-material-ui/commit/67f45cc6bd628bd772c8717d20c0699be08e5d0d))

# [6.0.0-beta.16](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.15...v6.0.0-beta.16) (2022-04-11)

### Bug Fixes

- svelte check script ([9936200](https://github.com/hperrin/svelte-material-ui/commit/9936200e87b3c298979148eeb60bebadbe1096ca))

# [6.0.0-beta.15](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.14...v6.0.0-beta.15) (2022-03-02)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.13...v6.0.0-beta.14) (2022-02-13)

### Bug Fixes

- rename type attributes to lang ([88a45ff](https://github.com/hperrin/svelte-material-ui/commit/88a45ff99d6dd35e7e293f15cd344fece0ec5fee))
- update to latest packages, sveltekit and fix issues ([ca21255](https://github.com/hperrin/svelte-material-ui/commit/ca2125517a399b6cf28bafa3485b7e83ac4c927b))

### Features

- add label elemental component ([533b085](https://github.com/hperrin/svelte-material-ui/commit/533b08538d1041e7fd4b6473d244bfd719e5395e))
- update SvelteKit and move types to separate imports ([5fb1216](https://github.com/hperrin/svelte-material-ui/commit/5fb1216d1182764e688a2f20cb25c2f5d034f0e7))

# [6.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.12...v6.0.0-beta.13) (2022-01-05)

### Bug Fixes

- import everything from material correctly. replace announce function with own implementation ([7ac0383](https://github.com/hperrin/svelte-material-ui/commit/7ac0383ebe384332a7666a451caa6209a1af0da9))

# [6.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.11...v6.0.0-beta.12) (2022-01-05)

### Bug Fixes

- correct entries in package.json files, noExternal config no longer needed ([95c56b5](https://github.com/hperrin/svelte-material-ui/commit/95c56b56b1859f8117ed9f3580a01c13d799499d)), closes [#375](https://github.com/hperrin/svelte-material-ui/issues/375)

# [6.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.10...v6.0.0-beta.11) (2021-12-29)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.9...v6.0.0-beta.10) (2021-12-28)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.8...v6.0.0-beta.9) (2021-12-15)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.7...v6.0.0-beta.8) (2021-12-14)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.6...v6.0.0-beta.7) (2021-12-14)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.5...v6.0.0-beta.6) (2021-12-11)

### Bug Fixes

- remove unused args on unsubscribe ([a7f2aca](https://github.com/hperrin/svelte-material-ui/commit/a7f2aca155c62a663c4a9e784279dbd7b9c39637))

# [6.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.4...v6.0.0-beta.5) (2021-12-10)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.3...v6.0.0-beta.4) (2021-11-25)

**Note:** Version bump only for package @smui/common

# [6.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.2...v6.0.0-beta.3) (2021-11-24)

### Bug Fixes

- include svelte tsconfig from common module ([2cfc838](https://github.com/hperrin/svelte-material-ui/commit/2cfc83825203da21bd5a5864df44d48099a9004e))

# [6.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.1...v6.0.0-beta.2) (2021-11-17)

### Bug Fixes

- common doesn't have a default export ([a29127f](https://github.com/hperrin/svelte-material-ui/commit/a29127f6a93b64db03c3677275bacde6960595c3))

# [6.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v6.0.0-beta.0...v6.0.0-beta.1) (2021-11-17)

### Bug Fixes

- lock to last good ts minor version, add index files for repl ([d77c735](https://github.com/hperrin/svelte-material-ui/commit/d77c73513a66de0075dd17ba0092c0a44c66d498))

# [6.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v5.0.1...v6.0.0-beta.0) (2021-11-17)

### Bug Fixes

- get sass compiling for all packages ([6405961](https://github.com/hperrin/svelte-material-ui/commit/6405961324c340098f00b942ecbffe9071f0c01d))
- get sass compiling in dev env for site with smui-theme ([08fd30f](https://github.com/hperrin/svelte-material-ui/commit/08fd30f2d39e135c30f06eac35e997208e7fa033))
- rm deprecation warn by updating to material 12 + breaking changes ([e3e95e1](https://github.com/hperrin/svelte-material-ui/commit/e3e95e1c3e499e5332cac6d15790505db58d268d))
- update other packages, move svelte to peerDependencies ([2c1b137](https://github.com/hperrin/svelte-material-ui/commit/2c1b1370e10503110421bd66bcb31a81e57cf182))

### Features

- new package directory structure, include stripped svelte files so no preprocess needed ([382e78d](https://github.com/hperrin/svelte-material-ui/commit/382e78dc4d9b6ddfd7832bdfd90bad0cea402b1d))
- remove styled endpoints and update readme and installation docs ([c8755d4](https://github.com/hperrin/svelte-material-ui/commit/c8755d41a24658b927089f8193d18b30df28e2a7))
- rename MDC events to SMUI events ([55effc6](https://github.com/hperrin/svelte-material-ui/commit/55effc6e92e04cb6d27964e1bb30d4c507922e23))
- upgrade mdc-web packages to v13 ([9f0457f](https://github.com/hperrin/svelte-material-ui/commit/9f0457f3bcd8c451c66392fc2a19bc60b5f1e958))

### BREAKING CHANGES

- No more styled endpoints, so the advanced styling
  method now requires that you import the Sass yourself.

## [5.0.1](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0...v5.0.1) (2021-11-16)

### Bug Fixes

- classadder not loaded from explicit path ([46c5a3c](https://github.com/hperrin/svelte-material-ui/commit/46c5a3c7237c3acaf385398f6aca63b436b37d2d))

# [5.0.0](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.8...v5.0.0) (2021-11-10)

### Features

- let segmented button selection be controlled manually ([835ef80](https://github.com/hperrin/svelte-material-ui/commit/835ef80695baf3b7e05aa461bb334d1b35512601))

# [5.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.7...v5.0.0-beta.8) (2021-11-02)

**Note:** Version bump only for package @smui/common

# [5.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.6...v5.0.0-beta.7) (2021-09-28)

### Bug Fixes

- cannot access internals before initialization ([d297517](https://github.com/hperrin/svelte-material-ui/commit/d2975175b8e195a185722508f69e1abb21aca0d3)), closes [#329](https://github.com/hperrin/svelte-material-ui/issues/329)

# [5.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.5...v5.0.0-beta.6) (2021-09-27)

### Bug Fixes

- internals causing issues being outside of class adder component ([1c29076](https://github.com/hperrin/svelte-material-ui/commit/1c290761fd60ff6880c133eeccf65101f9fb79f2)), closes [#329](https://github.com/hperrin/svelte-material-ui/issues/329)
- lock sass to the last working minor release ([62d4895](https://github.com/hperrin/svelte-material-ui/commit/62d4895af8fe252c8ade2587845e92ced70d6d9c)), closes [#334](https://github.com/hperrin/svelte-material-ui/issues/334)

# [5.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.4...v5.0.0-beta.5) (2021-09-18)

### Bug Fixes

- remove smui.d file and SMUIComponent declaration class ([ef30919](https://github.com/hperrin/svelte-material-ui/commit/ef309192268ef22ddbe0ff38a0f0f5198513a6af))

# [5.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2021-09-17)

**Note:** Version bump only for package @smui/common

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

- listeners for manually forwarded events bound with modifiers were called twice ([3096ffc](https://github.com/hperrin/svelte-material-ui/commit/3096ffc184f9a77926e60abe47f53129c1b2c41a))
- some more type errors ([f4b8568](https://github.com/hperrin/svelte-material-ui/commit/f4b85687869c378f0df8b11a061c0b4cdf684d61))
- type errors after making site package strict ([7cdcad9](https://github.com/hperrin/svelte-material-ui/commit/7cdcad900ad81b648db181d186eacc7441ef97d1))

### Features

- add prop types for HTML props for components ([f5c6e53](https://github.com/hperrin/svelte-material-ui/commit/f5c6e53390b4cbb2da04f543ef877cf03133fc80))
- implement js builds of all ts files ([085b829](https://github.com/hperrin/svelte-material-ui/commit/085b82932f75a5c62bb4d5f709a19a8b3cbd12a4))
- migrate banner to typescript ([dae0f3c](https://github.com/hperrin/svelte-material-ui/commit/dae0f3cb6cdb845a071f8b8bc34c7d5468dc693f))
- migrate card to typescript ([c1a9ef2](https://github.com/hperrin/svelte-material-ui/commit/c1a9ef2477f4e26b863f0cadb33f548a7b35bf8b))
- migrate chips to typescript ([075f48a](https://github.com/hperrin/svelte-material-ui/commit/075f48af5e16ee34c38307eb15664e1389596736))
- migrate common and button to typescript ([cf9c6af](https://github.com/hperrin/svelte-material-ui/commit/cf9c6af17c59afc433c58245cc9444aece2195cc))
- migrate fab and icon button to typescript ([5e81e89](https://github.com/hperrin/svelte-material-ui/commit/5e81e89f7d7afad4bb54c6f5350f5052f0e848cb))
- migrate list, checkbox, and radio to typescript ([6b475a5](https://github.com/hperrin/svelte-material-ui/commit/6b475a502daff39ba74c8ea0b29f7930bce2e46c))
- migrate menu surface and menu to typescript ([b479315](https://github.com/hperrin/svelte-material-ui/commit/b479315f4eccd9b3885eab31993949c8d734b888))
- migrate slider to typescript ([42c8c00](https://github.com/hperrin/svelte-material-ui/commit/42c8c00e71c96c6326feda678e4886b03a1638ad))
- migrate textfield to typescript ([0010211](https://github.com/hperrin/svelte-material-ui/commit/00102118220c8329aa7fbd3b524f1d95e8cebf02))

### BREAKING CHANGES

- Renamed SMUI events from like SMUI:component:event to like SMUIComponent:event.

# [4.2.0](https://github.com/hperrin/svelte-material-ui/compare/v4.1.0...v4.2.0) (2021-05-05)

### Bug Fixes

- events with modifiers called once for every event listener on event ([4234efa](https://github.com/hperrin/svelte-material-ui/commit/4234efa678ca9e33ab2c7647b9d4e634936309e0))

### Features

- allow customizing Label component, add Em and Strong elemental components ([5dd42e2](https://github.com/hperrin/svelte-material-ui/commit/5dd42e2829ef20328cfb5b6171191117286a8c05))

# [4.1.0](https://github.com/hperrin/svelte-material-ui/compare/v4.0.0...v4.1.0) (2021-04-28)

### Bug Fixes

- warnings about unexpected slot in Img and Hr ([98a555f](https://github.com/hperrin/svelte-material-ui/commit/98a555f19273176099b8aa60b9e23028bb46e6e0))

### Features

- change event modifier syntax to allow use on all events ([1fe4f82](https://github.com/hperrin/svelte-material-ui/commit/1fe4f82ef29f88567a81a24a746ef7f82389e7dc))

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

### Features

- new easy styling method ([9c58fc9](https://github.com/hperrin/svelte-material-ui/commit/9c58fc9680c03ef15026b29a14e803a0afa39cbd))

## [3.0.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0...v3.0.1) (2021-04-21)

### Features

- implement fixes and workarounds for Vite and SvelteKit ([9ed43aa](https://github.com/hperrin/svelte-material-ui/commit/9ed43aa83523877decd3c81c8c06f1219b302a76))

### Reverts

- Revert "v3.0.1" ([d6a0858](https://github.com/hperrin/svelte-material-ui/commit/d6a08583dd65bb71f68fa11ff47e130318c844e5))

# [3.0.0](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.12...v3.0.0) (2021-04-19)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-04-18)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-04-18)

### Features

- new Data Table Column Sort feature ([c831855](https://github.com/hperrin/svelte-material-ui/commit/c8318552c3d43325027816d83eba441aec196158))
- new Data Table Pagination component ([267f31d](https://github.com/hperrin/svelte-material-ui/commit/267f31d19434bf03bec82b877dc83d52fd69283d))

# [3.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2021-04-17)

### Features

- new Segmented Button component ([4b1dc50](https://github.com/hperrin/svelte-material-ui/commit/4b1dc505f4ec88700a737b0d258e0f7151d1ee4e))

# [3.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2021-04-16)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2021-04-15)

### Features

- forward all events, and only forward when bound, and allow modifiers ([50a0db3](https://github.com/hperrin/svelte-material-ui/commit/50a0db3af14bd8042e06c193a903526abcad35e5))

# [3.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-04-15)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-04-14)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-04-14)

### Bug Fixes

- classAdderBuilder polluting ClassAdder internals ([b484114](https://github.com/hperrin/svelte-material-ui/commit/b4841149c65df6c60d7cd691722aaaa9cedde3d9))

# [3.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-04-12)

### Features

- new Banner component ([566fa13](https://github.com/hperrin/svelte-material-ui/commit/566fa1374207557d38973c3a9d093676d19248e1))

# [3.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-12)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)

**Note:** Version bump only for package @smui/common

# [3.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2021-04-11)

### Bug Fixes

- svgs in icon buttons were focusable ([f9d2678](https://github.com/hperrin/svelte-material-ui/commit/f9d2678f9103ca8599e958b294b6e8e3af0126df))

# [3.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.1...v3.0.0-beta.0) (2021-04-11)

### Bug Fixes

- fixed event bubbling ([8b40fa0](https://github.com/hperrin/svelte-material-ui/commit/8b40fa04b463ee40819eda96785efb69b01e3e3a))
- more components fixes ([fbdf204](https://github.com/hperrin/svelte-material-ui/commit/fbdf204a320fa0ed9ee5ec593e6bcbf3678fae79))
- selection dialog and stacked buttons styling ([d0987ca](https://github.com/hperrin/svelte-material-ui/commit/d0987ca45347e95bcf59ba58ab8b41bcc09665b9))

### Features

- add getElement method to all components ([f293cf3](https://github.com/hperrin/svelte-material-ui/commit/f293cf365e30fa8d291b1428f5db683625572402))
- started updating List for MDC v10 ([8bf2727](https://github.com/hperrin/svelte-material-ui/commit/8bf27271f86f59caee9092a7f4f36d2a81a73e8a))
- updated Chips for MDC v10 ([5ca1c05](https://github.com/hperrin/svelte-material-ui/commit/5ca1c05853f3a526450e1f4d3c41fbfeaeab0946))
- updated IconButton for MDC v10 ([1a6fc5a](https://github.com/hperrin/svelte-material-ui/commit/1a6fc5a019167ff7d4d1f1c35f843e7686069e3a))
- updated Image List for MDC v10 ([015db52](https://github.com/hperrin/svelte-material-ui/commit/015db527e9614fe4fc96b4541b623352ebe416be))
- updated site for SMUI 3 components ([f24c25f](https://github.com/hperrin/svelte-material-ui/commit/f24c25f7cb0b66fbec1417fd8aa7ff8c51c90fde))
- updated Snackbars and Kitchen for MDC v10 ([78974e5](https://github.com/hperrin/svelte-material-ui/commit/78974e5951dbc2c8cbd8edc0b0e77689ed2e2f17))
- updated TopAppBar for MDC v10 ([6cf291d](https://github.com/hperrin/svelte-material-ui/commit/6cf291df3c5833b4938b95ff26138643d3511bcb))
- upgrade upstream MDC components to v10 ([d47c59a](https://github.com/hperrin/svelte-material-ui/commit/d47c59af50bbec2b7de810261b3cb7a2ffe59180))

### BREAKING CHANGES

- Upgrading to v10 of upstream components. Their APIs will change. View the component READMEs.

# [2.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2021-03-27)

**Note:** Version bump only for package @smui/common

# [2.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-alpha.0...v2.0.0-beta.0) (2021-01-01)

**Note:** Version bump only for package @smui/common

# [2.0.0-alpha.0](https://github.com/hperrin/svelte-material-ui/compare/v1.1.0...v2.0.0-alpha.0) (2020-12-31)

### Bug Fixes

- fix buttons, ripples, and list item for new mdc ([9b902b5](https://github.com/hperrin/svelte-material-ui/commit/9b902b5def4bbdc0bbe34733a723ce1de1452bf9))

### Features

- update chips to work with MDC 4 ([2c28796](https://github.com/hperrin/svelte-material-ui/commit/2c2879649b72947ae0ed51fd2c2a62f6a5756dae))

### BREAKING CHANGES

- Chips has several breaking changes listed in the migration docs.

# [1.0.0](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.21...v1.0.0) (2020-08-04)

**Note:** Version bump only for package @smui/common

# [1.0.0-beta.21](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2020-04-19)

### Bug Fixes

- undefined current_component in browsers not supporting import [#60](https://github.com/hperrin/svelte-material-ui/issues/60) ([708abd6](https://github.com/hperrin/svelte-material-ui/commit/708abd6dda5579c2e77e741349834deca0bd4d61))

# [1.0.0-beta.20](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2020-01-31)

### Features

- add component option to Button to allow other elements/components ([95d4d49](https://github.com/hperrin/svelte-material-ui/commit/95d4d49026f30579a888d9e2baa59785fcbe65f5))

# [1.0.0-beta.19](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2019-12-13)

### Bug Fixes

- prevent new Svelte versions from mangling MDC classes ([8a94e95](https://github.com/hperrin/svelte-material-ui/commit/8a94e95574c36595158603c83b3d79892fe4af4d)), closes [#52](https://github.com/hperrin/svelte-material-ui/issues/52)

# [1.0.0-beta.15](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2019-09-13)

### Bug Fixes

- fixed ClassAdder components to allow SSR ([de0daa1](https://github.com/hperrin/svelte-material-ui/commit/de0daa1)), closes [#29](https://github.com/hperrin/svelte-material-ui/issues/29)

# [1.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2019-09-07)

### Bug Fixes

- fixed the packages' sass commands ([97d64ea](https://github.com/hperrin/svelte-material-ui/commit/97d64ea))

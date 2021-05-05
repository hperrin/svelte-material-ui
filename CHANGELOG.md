# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.2.0](https://github.com/hperrin/svelte-material-ui/compare/v4.1.0...v4.2.0) (2021-05-05)


### Bug Fixes

* events with modifiers called once for every event listener on event ([4234efa](https://github.com/hperrin/svelte-material-ui/commit/4234efa678ca9e33ab2c7647b9d4e634936309e0))
* textfield layout ([0ff4b00](https://github.com/hperrin/svelte-material-ui/commit/0ff4b00a884291303cc679e72d16d7e7cd11b2f2)), closes [#241](https://github.com/hperrin/svelte-material-ui/issues/241)


### Features

* allow customizing Label component, add Em and Strong elemental components ([5dd42e2](https://github.com/hperrin/svelte-material-ui/commit/5dd42e2829ef20328cfb5b6171191117286a8c05))





# [4.1.0](https://github.com/hperrin/svelte-material-ui/compare/v4.0.0...v4.1.0) (2021-04-28)


### Bug Fixes

* remove duplicate change and input event forwarding ([641acf1](https://github.com/hperrin/svelte-material-ui/commit/641acf1deeb65c636192ff35f8f83ce59a1842da)), closes [#233](https://github.com/hperrin/svelte-material-ui/issues/233)
* required causes textfield to use native validation, label stops floating when value deleted ([b13b2a0](https://github.com/hperrin/svelte-material-ui/commit/b13b2a029d607fbf1b94462c9a15ca5649b5b95d)), closes [#234](https://github.com/hperrin/svelte-material-ui/issues/234)
* slider external updates not reflected in UI ([d46b854](https://github.com/hperrin/svelte-material-ui/commit/d46b8546346cfde2136fb14063f15587a4819de0))
* textfield labels and notches show incorrect state and position ([c935423](https://github.com/hperrin/svelte-material-ui/commit/c9354235b09523ce12333fe7671392b95f62c480)), closes [#236](https://github.com/hperrin/svelte-material-ui/issues/236)
* theme builder error when the output directory doesn't exist ([36c2531](https://github.com/hperrin/svelte-material-ui/commit/36c2531c073a72a46ab6d8b0392f542f73879fcd))
* warnings about unexpected slot in Img and Hr ([98a555f](https://github.com/hperrin/svelte-material-ui/commit/98a555f19273176099b8aa60b9e23028bb46e6e0))


### Features

* change event modifier syntax to allow use on all events ([1fe4f82](https://github.com/hperrin/svelte-material-ui/commit/1fe4f82ef29f88567a81a24a746ef7f82389e7dc))
* include props for conditional icons on Textfield and Select ([2d95dc7](https://github.com/hperrin/svelte-material-ui/commit/2d95dc7305027c2580ec42403361aa5435088246)), closes [#230](https://github.com/hperrin/svelte-material-ui/issues/230)


### Reverts

* Revert "v4.1.0" ([54dfd48](https://github.com/hperrin/svelte-material-ui/commit/54dfd48fc0560843ccef9cb9821b12e251977c67))
* Revert "v4.1.0" ([3e683d9](https://github.com/hperrin/svelte-material-ui/commit/3e683d9166e7df9eaab2756c9ace64c4dd547758))





# [4.0.0](https://github.com/hperrin/svelte-material-ui/compare/v3.1.0...v4.0.0) (2021-04-24)


### Bug Fixes

* let textfield value be null ([769678c](https://github.com/hperrin/svelte-material-ui/commit/769678c4b22b0d0ce17dce252ce51dd2e23c95d4)), closes [#143](https://github.com/hperrin/svelte-material-ui/issues/143)
* textfield baseline alignment in safari ([7186a26](https://github.com/hperrin/svelte-material-ui/commit/7186a26bbb0269d60c5b1db2b36cd2a7c7eb6490)), closes [#226](https://github.com/hperrin/svelte-material-ui/issues/226)
* textfield trailing icon padding ([744cb55](https://github.com/hperrin/svelte-material-ui/commit/744cb5507ac3eabd99d600f4bdbecf72711f7bc7)), closes [#227](https://github.com/hperrin/svelte-material-ui/issues/227)


### Features

* add focus trap to banner ([79d70de](https://github.com/hperrin/svelte-material-ui/commit/79d70de634abda1d663e9d2c029623261741a8c1))
* new Theme Builder package ([a717225](https://github.com/hperrin/svelte-material-ui/commit/a717225d8f0efb2a6bc8ef6022b9cd08fa3c0f9d))
* remove style importing from index files, no more /bare ([2ab900a](https://github.com/hperrin/svelte-material-ui/commit/2ab900a4a2b9705b3844121f7a987c272171c7c5))





# [3.1.0](https://github.com/hperrin/svelte-material-ui/compare/v3.0.3...v3.1.0) (2021-04-22)


### Features

* update to MDC 11, new fullscreen dialogs ([ee962bc](https://github.com/hperrin/svelte-material-ui/commit/ee962bc9cd654423322330a7f786ce2c350e3e49))


### Reverts

* Revert "v3.1.0" ([ade5890](https://github.com/hperrin/svelte-material-ui/commit/ade589069db4f68f21815138dfc86805bac11774))





## [3.0.3](https://github.com/hperrin/svelte-material-ui/compare/v3.0.2...v3.0.3) (2021-04-22)


### Bug Fixes

* import only from Ripple index ([99ed6dc](https://github.com/hperrin/svelte-material-ui/commit/99ed6dc9d99ee9a5f7accf73400bedda04768cb6))





## [3.0.2](https://github.com/hperrin/svelte-material-ui/compare/v3.0.1...v3.0.2) (2021-04-21)


### Features

* new easy styling method ([9c58fc9](https://github.com/hperrin/svelte-material-ui/commit/9c58fc9680c03ef15026b29a14e803a0afa39cbd))





## [3.0.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0...v3.0.1) (2021-04-21)


### Features

* implement fixes and workarounds for Vite and SvelteKit ([9ed43aa](https://github.com/hperrin/svelte-material-ui/commit/9ed43aa83523877decd3c81c8c06f1219b302a76))


### Reverts

* Revert "v3.0.1" ([d6a0858](https://github.com/hperrin/svelte-material-ui/commit/d6a08583dd65bb71f68fa11ff47e130318c844e5))





# [3.0.0](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.12...v3.0.0) (2021-04-19)


### Bug Fixes

* button order when dialog auto stack buttons in false ([98e9a63](https://github.com/hperrin/svelte-material-ui/commit/98e9a63c4c568833f686118b00d66dfeacecbfb1))
* fab link text color ([f91c438](https://github.com/hperrin/svelte-material-ui/commit/f91c4384c0f51e6845aa979a496ad2161c0b473f))
* icon button pressed state wasn't setting aria attrs without toggle ([ce550f1](https://github.com/hperrin/svelte-material-ui/commit/ce550f196d1e5e9a29ef205bf067bc49a93c05fa))





# [3.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-04-18)


### Features

* allow using objects as Select options ([880a22b](https://github.com/hperrin/svelte-material-ui/commit/880a22b1f06cdba9c67352ba4d26185fb331e039))





# [3.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-04-18)


### Bug Fixes

* data table sticky header, top app bar demos on mobile, reference errors ([236f6d2](https://github.com/hperrin/svelte-material-ui/commit/236f6d293f073d0771ae42256efcd5dcff0188da))


### Features

* new Data Table Column Sort feature ([c831855](https://github.com/hperrin/svelte-material-ui/commit/c8318552c3d43325027816d83eba441aec196158))
* new Data Table Pagination component ([267f31d](https://github.com/hperrin/svelte-material-ui/commit/267f31d19434bf03bec82b877dc83d52fd69283d))
* new Data Table Progress Indicator component ([b6e5cd6](https://github.com/hperrin/svelte-material-ui/commit/b6e5cd69542adbaf2afe9f93f9091f8fc830d9ee))





# [3.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2021-04-17)


### Features

* new Segmented Button component ([4b1dc50](https://github.com/hperrin/svelte-material-ui/commit/4b1dc505f4ec88700a737b0d258e0f7151d1ee4e))





# [3.0.0-beta.9](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2021-04-16)


### Bug Fixes

* focus indicator on keyboard focus checkbox and switch ([219d146](https://github.com/hperrin/svelte-material-ui/commit/219d146ad492765ea7cdf04e92941ceb7946e1d0))
* menu surface anchor adds classes with default function ([27f5a16](https://github.com/hperrin/svelte-material-ui/commit/27f5a16701ea98b1a53d1d178ee6c41f58d54bea))
* non-interactive chip text color ([e673c93](https://github.com/hperrin/svelte-material-ui/commit/e673c934e4d8bf08f914e879059eb9b6e1645c25))
* primary action span missing from chips ([17758af](https://github.com/hperrin/svelte-material-ui/commit/17758afe5e570514b30e017472379983220095f7))
* remove more event forwarding declarations ([17165ce](https://github.com/hperrin/svelte-material-ui/commit/17165cea455446ab1fb7f450e10ec0c1d293eb27))
* remove Slider highlight color on tap in Chrome ([3ccb603](https://github.com/hperrin/svelte-material-ui/commit/3ccb60342f3ce6087ef1de6c9b3d8bb7a39bae38)), closes [#219](https://github.com/hperrin/svelte-material-ui/issues/219)
* use passive listener on tooltip window scroll ([377de62](https://github.com/hperrin/svelte-material-ui/commit/377de625763a0a87ee1af38f1f998497fe9af6a8))


### Features

* add nonInteractive chip set feature and fix chip tabindex management ([c1f223f](https://github.com/hperrin/svelte-material-ui/commit/c1f223f2d82fb9cd592f5b89c03f9c1ee9a55367))
* new Tooltip component ([6293aef](https://github.com/hperrin/svelte-material-ui/commit/6293aefc40389d01c56301331380e660bed5e086))





# [3.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2021-04-15)


### Features

* forward all events, and only forward when bound, and allow modifiers ([50a0db3](https://github.com/hperrin/svelte-material-ui/commit/50a0db3af14bd8042e06c193a903526abcad35e5))





# [3.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-04-15)


### Features

* allow disabling textarea resize ([ebb84af](https://github.com/hperrin/svelte-material-ui/commit/ebb84af646efb9698e611b8dddde9db587fd0ea1))
* new Touch Target component ([4b576b2](https://github.com/hperrin/svelte-material-ui/commit/4b576b21e3a680225123dab7f1bcdbcae04426ee))


### Reverts

* Revert "docs: use absolute links in package readmes" ([3392c16](https://github.com/hperrin/svelte-material-ui/commit/3392c167bb145392929a970f58b8b3a1880fa8d6))





# [3.0.0-beta.6](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-04-14)


### Features

* new Layout Grid component ([f253dbd](https://github.com/hperrin/svelte-material-ui/commit/f253dbdb756fcca814baf9a5a1deb5ca56ec0724))





# [3.0.0-beta.5](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-04-14)


### Bug Fixes

* classAdderBuilder polluting ClassAdder internals ([b484114](https://github.com/hperrin/svelte-material-ui/commit/b4841149c65df6c60d7cd691722aaaa9cedde3d9))
* fixed banners next to drawers were positioned wrong ([5143e11](https://github.com/hperrin/svelte-material-ui/commit/5143e1142bfb912155300705562be02e9f6a3924))


### Features

* new Circular Progress component ([7a0b797](https://github.com/hperrin/svelte-material-ui/commit/7a0b797ef9675199bd382e44c326f1a2f21a95a3))





# [3.0.0-beta.4](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-04-12)


### Bug Fixes

* outlined select menu labels ([020cb0c](https://github.com/hperrin/svelte-material-ui/commit/020cb0c7b1d6d0ca4f6858b81f3d64b6e0416652))


### Features

* new Banner component ([566fa13](https://github.com/hperrin/svelte-material-ui/commit/566fa1374207557d38973c3a9d093676d19248e1))





# [3.0.0-beta.3](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-04-12)


### Bug Fixes

* add ripple style on buttons when style prop is defined ([aa65603](https://github.com/hperrin/svelte-material-ui/commit/aa65603ee57310006eb2bc3467dc4d6a9c410e31))
* allow styles on components with ripples ([1c6b28a](https://github.com/hperrin/svelte-material-ui/commit/1c6b28ac1bb7954b4f55a57b6e8c5becfca42cea))
* don't focus tab when activated programmatically by default ([59c66b1](https://github.com/hperrin/svelte-material-ui/commit/59c66b1fcee6cce84233791d6af1a91799b415f9))
* floating label noLabel default to false ([cf06c28](https://github.com/hperrin/svelte-material-ui/commit/cf06c286c4dd476d553980930d13ad8719afaebf))
* outlined textfield labels ([07e7544](https://github.com/hperrin/svelte-material-ui/commit/07e7544a9c92ee691a9b634c71ac003512542eb6))
* reference error on button GroupItem ([41402f8](https://github.com/hperrin/svelte-material-ui/commit/41402f81a73d90d091d0577c2674e2ba98f1d5da))





# [3.0.0-beta.2](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-04-11)


### Bug Fixes

* removed a debugger statement left in the code ([966e3f2](https://github.com/hperrin/svelte-material-ui/commit/966e3f24950586db92df971e7b143fa4bbfa82e0))





# [3.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2021-04-11)


### Bug Fixes

* allow keyboard navigation to tabs when none are active ([13c1812](https://github.com/hperrin/svelte-material-ui/commit/13c1812c6488982de3d2261aba72b5b5288545c5))
* svgs in icon buttons were focusable ([f9d2678](https://github.com/hperrin/svelte-material-ui/commit/f9d2678f9103ca8599e958b294b6e8e3af0126df))





# [3.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.1...v3.0.0-beta.0) (2021-04-11)


### Bug Fixes

* button styling, menu events ([53d0282](https://github.com/hperrin/svelte-material-ui/commit/53d02828f9704b50e3dff9213a55815840d11098))
* checkbox lists ([c6df907](https://github.com/hperrin/svelte-material-ui/commit/c6df907eb8064604207173fa6ba5aed3632732c7))
* class and attr removal ([b3ca6f1](https://github.com/hperrin/svelte-material-ui/commit/b3ca6f16b2adda7cead2ef2c54ce3c446eeb6179))
* dont use a store for HelperText id ([b0c4fbd](https://github.com/hperrin/svelte-material-ui/commit/b0c4fbd3dad2783891fab4d8e2864ef2ef54ea7b))
* drawer item ripple color ([d1de7f9](https://github.com/hperrin/svelte-material-ui/commit/d1de7f9381767f2cc6b703e47c108d396787a7a1))
* drawer scrim positioning ([444ebf9](https://github.com/hperrin/svelte-material-ui/commit/444ebf9aab24d2e8ffd350720f80a2486ae82b89))
* fix some demo bugs ([f551776](https://github.com/hperrin/svelte-material-ui/commit/f551776e6121f2feb241ca20dcec691b6582eae4))
* fixed event bubbling ([8b40fa0](https://github.com/hperrin/svelte-material-ui/commit/8b40fa04b463ee40819eda96785efb69b01e3e3a))
* get element and pass events correctly ([d405de5](https://github.com/hperrin/svelte-material-ui/commit/d405de5390e713f777f9d09d9480cf6ce3ba0850))
* import ripple styles from slider ([86ed83b](https://github.com/hperrin/svelte-material-ui/commit/86ed83b59b879848bfc130ca0103c3eac9d19cbe))
* list item ripples and menus ([4010556](https://github.com/hperrin/svelte-material-ui/commit/4010556b84b634177c706f0e6cec20b0c8500743))
* list selected ripple color ([76dc500](https://github.com/hperrin/svelte-material-ui/commit/76dc5007c80a7d066b2df442725881eac5385632))
* modal drawer absolute positioning ([d180ee3](https://github.com/hperrin/svelte-material-ui/commit/d180ee3f11211ca0e1faa8d477f31531cf184b2c))
* more components fixes ([fbdf204](https://github.com/hperrin/svelte-material-ui/commit/fbdf204a320fa0ed9ee5ec593e6bcbf3678fae79))
* programmatic change on Switch ([8162ff3](https://github.com/hperrin/svelte-material-ui/commit/8162ff352a1a7258a8a1396144d9f5ea160cd4a0))
* reference error on tabs unloading ([a970335](https://github.com/hperrin/svelte-material-ui/commit/a9703350c47ec332fd8a1f4d76c5aace85774125))
* ripple activation and colors ([d584be7](https://github.com/hperrin/svelte-material-ui/commit/d584be7d284562d07e278a2dc21bb039ed6a208b))
* ripple demo and classes ([b9a2530](https://github.com/hperrin/svelte-material-ui/commit/b9a2530522c01bc1672f3ff8c39fc89d6f52bf66))
* selection dialog and stacked buttons styling ([d0987ca](https://github.com/hperrin/svelte-material-ui/commit/d0987ca45347e95bcf59ba58ab8b41bcc09665b9))
* slider input now updates value ([0b16829](https://github.com/hperrin/svelte-material-ui/commit/0b16829007c3c832c5e94569257bf2c8ca604458))
* slider value attribute getter ([656fbc3](https://github.com/hperrin/svelte-material-ui/commit/656fbc3a7c1ab1d6247f50a33fb30c5cb05dc794))
* slider value setting and range demo ([4f7869b](https://github.com/hperrin/svelte-material-ui/commit/4f7869b16ccfa1bea5f96349a48f955532af1d92))
* textfield onDestroy issues ([5d23ed0](https://github.com/hperrin/svelte-material-ui/commit/5d23ed0ee27a6758c6e3cf6238d6bd0c915c4d70))
* toggle icon buttons ([7eb48c7](https://github.com/hperrin/svelte-material-ui/commit/7eb48c7fd92c6d33cc6bf2a1c596446c19b0eeb8))
* update all the sass imports ([172a557](https://github.com/hperrin/svelte-material-ui/commit/172a55777a506ac26bbe524ca8cab79904512f24))
* update new class internals to report hasClass properly ([52a7b2c](https://github.com/hperrin/svelte-material-ui/commit/52a7b2cf5cfbd60ee87d6b27bcb8c796e84d1275))
* use new service for placeholder images ([095e00f](https://github.com/hperrin/svelte-material-ui/commit/095e00fefa3fd9d0e1f57b20434601f6cfc0264d))


### Features

* add getElement method to all components ([f293cf3](https://github.com/hperrin/svelte-material-ui/commit/f293cf365e30fa8d291b1428f5db683625572402))
* add primary color option to Switch ([a77bca9](https://github.com/hperrin/svelte-material-ui/commit/a77bca919b5132dbc451664a34691eaa68b88275))
* re-enable Button bare styles ([cf74655](https://github.com/hperrin/svelte-material-ui/commit/cf746557dc3bd132a4b2f87e9555da4d65ff6d63))
* remove FOUC on Sapper installation instructions ([988c919](https://github.com/hperrin/svelte-material-ui/commit/988c919a65306d42e4941f36189e589a7b8ca9b2))
* started updating List for MDC v10 ([8bf2727](https://github.com/hperrin/svelte-material-ui/commit/8bf27271f86f59caee9092a7f4f36d2a81a73e8a))
* update more Sass imports to use ([4061e59](https://github.com/hperrin/svelte-material-ui/commit/4061e59d462792574c9355d1e39efc0f6cb0415c))
* updated Button for MDC v10 ([ecf16e7](https://github.com/hperrin/svelte-material-ui/commit/ecf16e79b6c6926bd92de49eed9f41d574dc3732))
* updated Card for MDC v10 ([047ee65](https://github.com/hperrin/svelte-material-ui/commit/047ee6522b330e2a7360027cd41aa5046dc44847))
* updated Checkbox for MDC v10 ([9efc1b4](https://github.com/hperrin/svelte-material-ui/commit/9efc1b442fe6b9331ca33f9762c956c77b445f22))
* updated Chips for MDC v10 ([5ca1c05](https://github.com/hperrin/svelte-material-ui/commit/5ca1c05853f3a526450e1f4d3c41fbfeaeab0946))
* updated Data Tables for MDC v10 ([89cbd52](https://github.com/hperrin/svelte-material-ui/commit/89cbd52c9555a0df5d41f990fb6a985b545927ab))
* updated Dialog for MDC v10 ([2cc5c15](https://github.com/hperrin/svelte-material-ui/commit/2cc5c152dd328daa561aa2d84d96bfd169ad9cac))
* updated Drawer for MDC v10 ([25adc19](https://github.com/hperrin/svelte-material-ui/commit/25adc192538cf4bb1cf7a60383b959dd78ee1cb0))
* updated Elevation demo for MDC v10 ([3430a9f](https://github.com/hperrin/svelte-material-ui/commit/3430a9f082cb2089061760819b0f1d8bdc15aa2f))
* updated Floating Actio Button for MDC v10 ([4a85665](https://github.com/hperrin/svelte-material-ui/commit/4a8566530bd6521ec7f1bf2f5ee11568268b0c87))
* updated Floating Label for MDC v10 ([452e95a](https://github.com/hperrin/svelte-material-ui/commit/452e95ab8de2cd93a98d7c10a498437fd6430203))
* updated IconButton for MDC v10 ([1a6fc5a](https://github.com/hperrin/svelte-material-ui/commit/1a6fc5a019167ff7d4d1f1c35f843e7686069e3a))
* updated Image List for MDC v10 ([015db52](https://github.com/hperrin/svelte-material-ui/commit/015db527e9614fe4fc96b4541b623352ebe416be))
* updated Line Ripple for MDC v10 ([66b54ca](https://github.com/hperrin/svelte-material-ui/commit/66b54ca804d828192ba4a01936a706339750f7d4))
* updated Linear Progress for MDC v10 ([86c7766](https://github.com/hperrin/svelte-material-ui/commit/86c7766e9b3287ff4214a6f890b464ed4dd2c5c0))
* updated List for MDC v10 ([849e007](https://github.com/hperrin/svelte-material-ui/commit/849e007ea33ddd49f3b5e680fed6d4ffb2715aff))
* updated Menu for MDC v10 ([ddd6262](https://github.com/hperrin/svelte-material-ui/commit/ddd6262faa7b833472c6bf8ccca6017e6e06ebbe))
* updated MenuSurface for MDC v10 ([c032c89](https://github.com/hperrin/svelte-material-ui/commit/c032c895ff6463c9cd904e6244027918cc5292e2))
* updated Notched Outline for MDC v10 ([24b2699](https://github.com/hperrin/svelte-material-ui/commit/24b26997e3e2873e83d50c927e005e348a0df751))
* updated Paper for MDC v10 ([7ebfb06](https://github.com/hperrin/svelte-material-ui/commit/7ebfb061c7b4ba9f3b49a470160065e735dc5a2a))
* updated Radio and FormField for MDC v10 ([f1f95b7](https://github.com/hperrin/svelte-material-ui/commit/f1f95b7cff81237c3a3402a448d3ca87a5df039d))
* updated Ripple for MDC v10 ([ae3f23d](https://github.com/hperrin/svelte-material-ui/commit/ae3f23d45e88a1c1ee7d384a5f2829c25b9c2cf6))
* updated Select Menus for MDC v10 ([f066d20](https://github.com/hperrin/svelte-material-ui/commit/f066d20024b4b7385bb87cfb3b7231087c16ac31))
* updated site for SMUI 3 components ([f24c25f](https://github.com/hperrin/svelte-material-ui/commit/f24c25f7cb0b66fbec1417fd8aa7ff8c51c90fde))
* updated Slider for MDC v10 ([be1aab4](https://github.com/hperrin/svelte-material-ui/commit/be1aab401770e44db02549e9b6794cb46517a3f0))
* updated Snackbars and Kitchen for MDC v10 ([78974e5](https://github.com/hperrin/svelte-material-ui/commit/78974e5951dbc2c8cbd8edc0b0e77689ed2e2f17))
* updated Switch for MDC v10 ([b1b81d5](https://github.com/hperrin/svelte-material-ui/commit/b1b81d566676960f59f7e92f3760e85f1ac53b83))
* updated Tab, TabBar, TabIndicator, TabScroller for MDC v10 ([3e4bd27](https://github.com/hperrin/svelte-material-ui/commit/3e4bd271f4cfff11993c0bde6ee4264ea0dc111d))
* updated Text Field for MDC v10 ([60e10c2](https://github.com/hperrin/svelte-material-ui/commit/60e10c2d86628fb09101b90e6f5d11d236742f2f))
* updated Theme demo for MDC v10 ([81091eb](https://github.com/hperrin/svelte-material-ui/commit/81091ebe1d7a9b516eeecdeb6438d8925c584764))
* updated TopAppBar for MDC v10 ([6cf291d](https://github.com/hperrin/svelte-material-ui/commit/6cf291df3c5833b4938b95ff26138643d3511bcb))
* updated Typography for MDC v10 ([858751a](https://github.com/hperrin/svelte-material-ui/commit/858751a57d29b89e911adcfa7715e72caebdc98d))
* upgrade upstream MDC components to v10 ([d47c59a](https://github.com/hperrin/svelte-material-ui/commit/d47c59af50bbec2b7de810261b3cb7a2ffe59180))


### BREAKING CHANGES

* Upgrading to v10 of upstream components. Their APIs will change. View the component READMEs.





# [2.0.0-beta.1](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2021-03-27)


### Features

* forward blur and focus from other inputs ([6059f87](https://github.com/hperrin/svelte-material-ui/commit/6059f87cf6b0377eb1003067412856f041e8613d))





# [2.0.0-beta.0](https://github.com/hperrin/svelte-material-ui/compare/v2.0.0-alpha.0...v2.0.0-beta.0) (2021-01-01)


### Bug Fixes

* small fixes for MDC 4 ([6c0585f](https://github.com/hperrin/svelte-material-ui/commit/6c0585ffa7d861b5a632544d92f2769097a439e8))


### Features

* updated touch features for MDC 4 ([b06e851](https://github.com/hperrin/svelte-material-ui/commit/b06e851c0f8927670603e9d3f3ce4a2ce7b3e47c))





# [2.0.0-alpha.0](https://github.com/hperrin/svelte-material-ui/compare/v1.1.0...v2.0.0-alpha.0) (2020-12-31)


### Bug Fixes

* filter chip leading icon wasn't hidden correctly ([b011df9](https://github.com/hperrin/svelte-material-ui/commit/b011df92eac4956caf1ea51bedfaa7316de84ed3))
* fix buttons, ripples, and list item for new mdc ([9b902b5](https://github.com/hperrin/svelte-material-ui/commit/9b902b5def4bbdc0bbe34733a723ce1de1452bf9))
* forward events from dynamic components correctly ([5367449](https://github.com/hperrin/svelte-material-ui/commit/536744953b6f935b4ab1de75828308a90c238e83))


### Features

* update chips to work with MDC 4 ([2c28796](https://github.com/hperrin/svelte-material-ui/commit/2c2879649b72947ae0ed51fd2c2a62f6a5756dae))
* update Select to work with MDC 4 ([81a7ee9](https://github.com/hperrin/svelte-material-ui/commit/81a7ee992d968bab7e950b6ff7db2d47c7c17b79))
* updated form field related features for MDC 4 ([4894cfb](https://github.com/hperrin/svelte-material-ui/commit/4894cfb08da0a703e86a086d0bfdce76ae98d88c))


### BREAKING CHANGES

* Select has some breaking changes listed in the migration docs.
* Chips has several breaking changes listed in the migration docs.





# [1.1.0](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0...v1.1.0) (2020-12-24)


### Features

* make tab an anchor if href prop is present ([d9f800b](https://github.com/hperrin/svelte-material-ui/commit/d9f800b5311cb3d25047bd25305a2b2a6deaecc8))





# [1.0.0](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.21...v1.0.0) (2020-08-04)

**Note:** Version bump only for package svelte-material-ui





# [1.0.0-beta.21](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.20...v1.0.0-beta.21) (2020-04-19)


### Bug Fixes

* undefined current_component in browsers not supporting import [#60](https://github.com/hperrin/svelte-material-ui/issues/60) ([708abd6](https://github.com/hperrin/svelte-material-ui/commit/708abd6dda5579c2e77e741349834deca0bd4d61))





# [1.0.0-beta.20](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.19...v1.0.0-beta.20) (2020-01-31)


### Bug Fixes

* Cannot read property 'destroy' of undefined in menuSurface ([2bd8d37](https://github.com/hperrin/svelte-material-ui/commit/2bd8d37eb572211365b7aa6163036a7fd5c21c3f))
* fix button group styling in Safari/iOS ([eb52cc6](https://github.com/hperrin/svelte-material-ui/commit/eb52cc6b81011d004b5ee2d52851ca35e510a578))
* fix Svelte warning about unused class export ([baac41b](https://github.com/hperrin/svelte-material-ui/commit/baac41bc4d1893325a23a51ab23c79997ba54fe3))


### Features

* add component option to Button to allow other elements/components ([95d4d49](https://github.com/hperrin/svelte-material-ui/commit/95d4d49026f30579a888d9e2baa59785fcbe65f5))
* reduce Ripple arguments and add class forwarding option ([550ac93](https://github.com/hperrin/svelte-material-ui/commit/550ac93cc6d4dfa18eee70f6c1db55f1971cd8fc))





# [1.0.0-beta.19](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.18...v1.0.0-beta.19) (2019-12-13)


### Bug Fixes

* prevent new Svelte versions from mangling MDC classes ([8a94e95](https://github.com/hperrin/svelte-material-ui/commit/8a94e95574c36595158603c83b3d79892fe4af4d)), closes [#52](https://github.com/hperrin/svelte-material-ui/issues/52)
* stop empty attrs on elements ([084bc39](https://github.com/hperrin/svelte-material-ui/commit/084bc391e0f3e20decd1ac305aeb6a5c78c84810))


### Features

* add shape props for button to create rounded buttons ([a94cf69](https://github.com/hperrin/svelte-material-ui/commit/a94cf696d44691f5e9806b94bd1ab63db6fecd85))
* add shape props for button to create rounded buttons ([7fb3b8b](https://github.com/hperrin/svelte-material-ui/commit/7fb3b8bb1ac8f89115edba1087d297e011854910))





# [1.0.0-beta.18](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.17...v1.0.0-beta.18) (2019-11-08)


### Bug Fixes

* layout components when dialog is opened ([fee2755](https://github.com/hperrin/svelte-material-ui/commit/fee27554ee07605184c5846f7d49e0f845609618)), closes [#35](https://github.com/hperrin/svelte-material-ui/issues/35)
* remove hoisted menu-surface from body in onDestroy ([8e905b7](https://github.com/hperrin/svelte-material-ui/commit/8e905b7cf28b1bb5ddf8e88b478123532146e2b1))
* working on fixing dialog. wip ([601d4fd](https://github.com/hperrin/svelte-material-ui/commit/601d4fdc037943b58ff48bd1a05200af597b401f))





# [1.0.0-beta.17](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.16...v1.0.0-beta.17) (2019-10-28)


### Bug Fixes

* fixed initial value state of Select component ([4afdfc2](https://github.com/hperrin/svelte-material-ui/commit/4afdfc2fcb760c7acf9a486882078f2698944ec7))
* handle blank number input as NaN ([939543f](https://github.com/hperrin/svelte-material-ui/commit/939543f2a824deac29e77a912cb26cbe0dd0f2fb))


### Features

* add three line lists (modifying MintyMods code) ([5894c23](https://github.com/hperrin/svelte-material-ui/commit/5894c23f0ac18286e54ce5e80a33da2c8d1480fc))
* update MDC package versions to 3.2.0 ([605753d](https://github.com/hperrin/svelte-material-ui/commit/605753dd3fe121eba2654498f62f8ddd57a9e3b9))





# [1.0.0-beta.16](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.15...v1.0.0-beta.16) (2019-09-24)

**Note:** Version bump only for package svelte-material-ui





# [1.0.0-beta.15](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.14...v1.0.0-beta.15) (2019-09-13)


### Bug Fixes

* fixed ClassAdder components to allow SSR ([de0daa1](https://github.com/hperrin/svelte-material-ui/commit/de0daa1)), closes [#29](https://github.com/hperrin/svelte-material-ui/issues/29)
* forgot the dialog excludes ([78e6ca9](https://github.com/hperrin/svelte-material-ui/commit/78e6ca9))
* let dialog buttons be links, even though it's not MDC compliant ([e504cd7](https://github.com/hperrin/svelte-material-ui/commit/e504cd7))
* prefer direct for prop over context on floating label ([9184532](https://github.com/hperrin/svelte-material-ui/commit/9184532))





# [1.0.0-beta.14](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.13...v1.0.0-beta.14) (2019-09-07)


### Bug Fixes

* fixed more sass commands ([1c81e01](https://github.com/hperrin/svelte-material-ui/commit/1c81e01))
* fixed the packages' sass commands ([97d64ea](https://github.com/hperrin/svelte-material-ui/commit/97d64ea))





# [1.0.0-beta.13](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2019-09-06)


### Features

* add bare js and css to all components ([ebe7a6d](https://github.com/hperrin/svelte-material-ui/commit/ebe7a6d))





# [1.0.0-beta.12](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2019-09-06)


### Bug Fixes

* properly import Ripple and its styles ([9588c8b](https://github.com/hperrin/svelte-material-ui/commit/9588c8b))





# [1.0.0-beta.11](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2019-09-06)


### Bug Fixes

* allow for prop on wrapped floating label ([b69049c](https://github.com/hperrin/svelte-material-ui/commit/b69049c))
* import styles correctly ([37e6fa6](https://github.com/hperrin/svelte-material-ui/commit/37e6fa6))


### Features

* provide bare js and css (button only for test) for use in REPL ([1b9a268](https://github.com/hperrin/svelte-material-ui/commit/1b9a268))





# [1.0.0-beta.10](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2019-09-03)


### Bug Fixes

* dependencies between packages ([a883601](https://github.com/hperrin/svelte-material-ui/commit/a883601))





# [1.0.0-beta.8](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2019-08-30)

**Note:** Version bump only for package svelte-material-ui





# [1.0.0-beta.7](https://github.com/hperrin/svelte-material-ui/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2019-08-29)



# 1.0.0-beta.6 (2019-08-27)

**Note:** Version bump only for package svelte-material-ui

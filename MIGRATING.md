# 1 -> 2

SMUI 2 migrated to upstream MDC 4.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#400-2019-11-02-1

- Chips
  - Text component is now required.
  - Now use their own Text and Icon components. The common ones will not work.
  - Icon no longer requires `trailing` prop. That is the default.
  - Checkmark component is no longer required. It is added automatically.
- Menu and Menu Surface
  - hoistMenuToBody function removed.
- Select
  - `enchanced` prop is removed. All selects are enhanced now.
  - `selected` prop on Option is no longer required and probably should not be used.
  - You now need to pass a class into `anchor$class` and `menu$class` with a width value set.

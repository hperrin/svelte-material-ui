#! /bin/bash

for dir in packages/*; do
  if [ "$dir" != "packages/common" ] && [ "$dir" != "packages/site" ] && [ "$dir" != "packages/smui-theme" ] && [ "$dir" != "packages/svelte-material-ui" ]; then
    cd "$dir"
    echo ""
    echo "# Running in: $dir"
    $@
    cd ../..
  fi
done

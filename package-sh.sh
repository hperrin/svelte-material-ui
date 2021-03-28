#! /bin/bash

for dir in packages/*; do
  if [ "$dir" != "packages/common" ]; then
    cd "$dir"
    echo ""
    echo "# Running in: $dir"
    $@
    cd ../..
  fi
done

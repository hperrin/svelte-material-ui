#! /bin/bash

for dir in packages/*; do
  if [ "$dir" != "packages/common" ]; then
    cd "$dir"
    $@
    cd ../..
  fi
done

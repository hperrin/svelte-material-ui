#! /bin/bash

for dir in packages/*; do
  cd "$dir"
  echo ""
  echo "# Setting up: $dir"
  sudo npm link
  cd ../..
done

for dir in packages/*; do
  cd "$dir"
  echo ""
  PACKAGE=`basename $(pwd)`
  echo "# Linking: $PACKAGE"
  cd ../../site
  npm link @smui/$PACKAGE
  cd ..
done

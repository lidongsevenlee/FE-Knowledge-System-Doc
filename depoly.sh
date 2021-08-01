#!/usr/bin/env sh
set -e

cd dist

git init
git add -A
git commit -m 'depoly'

git push -f git@github.com:MiceLiD/micelid.github.io.git master
cd ..
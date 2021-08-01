#!/usr/bin/env sh
set -e

npm run docs:build

cd dist

git init
git add -A
git commit -m 'depoly'
git branch -M main
git remote add origin git@github.com:MiceLiD/micelid.github.io.git
git push -u -f origin main
cd ..
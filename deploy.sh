#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:rendoh/fingertip-bubbles.git main:gh-pages
cd -

#!/usr/bin/env sh

pnpm --filter "@nobook/*" run build
git add .
git commit -m "m"
git push
git pull
lerna publish
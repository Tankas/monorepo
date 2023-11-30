#!/usr/bin/env sh

git pull
git add .
git commit -m "m"
lerna version --force-git-tag

# git push

# lerna version --no-git-tag-version
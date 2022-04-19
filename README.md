# Issue Test Repo

This repo helps to demonstrate the massive node warning issue when bundling `.d.ts` files with `rollup-plugin-dts` while `ttypescript` is imported

## Repository User Guide:
1. `npx rollup -c rollup.config-with-issue.js` shows the warnings.

2. `npx rollup -c rollup.config-non-issue.js` does not give any warning

3. `node --trace-warnings ./script.js` shows the warning trace

## Steps to reproduce:
1. Follow the readme of `rollup-plugin-dts` setup

2. install `ttypescript`

3. import `ttypescript` into the rollup config.

Thats it. it will throw huge amount of errors. If used with multi entry to bundle all `d.ts` files in a dir, it produces even more warnings

### Issue:
When `rollup-plugin-dts` gives warnings when `ttypescript` is imported. These warnings increases with each file its trying to bundle

### Expected behaviour
dts should not produce warning when `ttypescript` is imported.
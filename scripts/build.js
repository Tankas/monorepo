#!/usr/bin/env node


const { execSync } = require('child_process');
const { checkVersion } = require('./check-version')


function build(packages) {
  for (let item of packages) {
    console.log(item.name, '--build')
    try {
      execSync(`pnpm --filter ${item.name} run build`)
    } catch (err) {
      console.log(err);
      process.exit();
    }
  }
  console.log('success')
}


(function init() {
  // 针对version变化的包，执行build
  checkVersion('packages', (packages) => {
    build(packages);
  })
  // 
  checkVersion('components', (packages) => {
    build(packages);
  })
})()

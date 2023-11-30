#!/usr/bin/env node
const { spawnSync } = require('child_process');

const { checkVersion } = require('./check-version')


const publish = (packages) => {
  for (let item of packages) {
    const { name, version, packageFolderName } = item;
    const where = spawnSync('npm', ['config', 'get', 'registry']);
    console.log('所在仓库地址');
    console.log(where.stdout.toString().trim())

    console.log(`publish ${name} --- ${version} in -- ${packageFolderName}`)
    spawnSync('pnpm', [
      'publish',
      '--no-git-checks',
      '--registry=http://repo.noteach.com.cn/'
    ], {
      stdio: 'inherit',
      cwd: packageFolderName,
    });
  }
}

function init() {

  checkVersion('packages', (packages) => {
    publish(packages);
  })

  checkVersion('components', (packages) => {
    publish(packages);
  })
}

init();
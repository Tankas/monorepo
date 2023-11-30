/*
 * @Author: tanka 
 * @Date: 2023-05-05 15:42:49
 * @LastEditors: tanka 
 * @LastEditTime: 2023-05-05 16:35:39
 * @FilePath: /nb-base-components/scripts/check-version.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { existsSync, readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const { spawnSync, execSync } = require('child_process');


function checkVersion(folder, callback) {
  const ret = [];
  if (existsSync(folder)) {
    const packages = readdirSync(folder);
    for (let packageFolderName of packages) {
      const packageInfoPath = join(folder, packageFolderName, 'package.json');
      if (existsSync(packageInfoPath)) {
        const packageInfo = JSON.parse(readFileSync(packageInfoPath, { encoding: 'utf-8' }));
        const { name, version } = packageInfo;
        // 当前版本不存在，说明有变动
        if (!checkVersionExists(name, version)) {
          ret.push({
            name,
            version,
            packageFolderName: `${folder}/${packageFolderName}/`
          })
        }
      }
    }
  }
  callback(ret)
}

function checkVersionExists(packageName, version) {
  let exit
  try {
    const output = execSync(`npm view ${packageName} versions`).toString();
    exit = output.indexOf(version) !== -1
  } catch (err) {
    console.log(err)
    exit = false
  }
  return exit
}

module.exports.checkVersion = checkVersion;
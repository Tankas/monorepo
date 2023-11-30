/*
 * @Author: tanka 
 * @Date: 2023-11-30 10:37:23
 * @LastEditors: tanka 
 * @LastEditTime: 2023-11-30 10:37:30
 * @FilePath: /monorepo/.dumirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'components/' },
    ],
  },
});
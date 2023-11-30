/*
 * @Author: tanka 
 * @Date: 2023-11-30 10:36:16
 * @LastEditors: tanka 
 * @LastEditTime: 2023-11-30 10:46:57
 * @FilePath: /monorepo/.stroybook-build/main.js
 * @Description: 
 */
export default {
  stories: ['../packages/**/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true,
  }
};
/*
 * @Author: tanka 
 * @Date: 2023-06-12 10:43:51
 * @LastEditors: tanka 
 * @LastEditTime: 2023-06-12 15:01:04
 * @FilePath: /nb-base-components/packages/nb-button/stories/index.stories.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NbButton from "../lib";




export default {
  component: NbButton,
};


export const Primary = {
  render: () => <NbButton primary label="Button" />,
};
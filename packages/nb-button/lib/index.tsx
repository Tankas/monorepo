/*
 * @Author: tanka 
 * @Date: 2023-03-07 10:55:14
 * @LastEditors: tanka 
 * @LastEditTime: 2023-10-25 18:25:05
 * @FilePath: /nb-base-components/packages/nb-button/lib/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
const dayjs = require('dayjs')


const NbButton = () => {

    const click = () => {
        console.log('1233')
    }

    useEffect(() => {
        const date = dayjs().format()
        console.log(date)
    }, [])

    return (
        <div>
            <button onClick={click} >地瓜不要再吃了123</button>
        </div>
    )
}

export default NbButton;

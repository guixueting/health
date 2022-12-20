/*
 * @Author: Ethan Fang
 * @Date: 2022-01-12 14:17:46
 * @Description: LayoutPageFixed
 */
import React, { useEffect, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import BottomButtonContainer from '../bottomButtonContainer/BottomButtonContainer'

export default ({
  hideBottom = false,
  bottomFixedElement,
  children,
  ...htmlProps
}: any) => {
  // 获取系统信息
  const systemInfo: any = Taro.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  // navBarHeight高度
  let _navBarHeight = ((menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight) || 0;
  const [height, setHeight] = useState<string>('100vh')

  useEffect(() => {
    setHeight(window.innerHeight - _navBarHeight + 'px')
  }, [])

  return (
    <View
      {...htmlProps}
      className={classNames('layout-page-fixed', htmlProps.className)}
      style={{ ...htmlProps.style, }}
    >
      {/* 中间内容部分 */}
      <View
        className={`layout-page-fixed-content ${hideBottom ? 'display-none' : ''
          }`}
        style={{ overflowY: 'auto', marginTop: `${_navBarHeight}px` }}
      >
        {children}
      </View>

      {/* 底部Tab部分 */}
      {!hideBottom && <View
        className={`layout-page-fixed-bottom ${hideBottom ? 'display-none' : ''
          }`}
      >
        {bottomFixedElement ?? <BottomButtonContainer />}
      </View>}
    </View>
  )
}

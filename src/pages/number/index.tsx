/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import React from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import Taro, { useDidShow } from '@tarojs/taro';
import Swiper1 from '../../assets/images/swiper1.png'
import Layout from '../../components/layout';
const Index = () => {
  // 获取系统信息
  const systemInfo: any = Taro.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  // navBarHeight高度
  let _navBarHeight = ((menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight) || 0;
  // navBarHeight宽度
  let _navBarWidth = (menuButtonInfo.right - menuButtonInfo.width);


  return (
    <View className='index'>
      <Layout>
        分析
      </Layout>
    </View>
  )

}

export default Index

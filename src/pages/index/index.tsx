/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import React, { useState } from 'react'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import Taro, { useDidShow } from '@tarojs/taro';
import Swiper1 from '../../assets/images/swiper1.png'
import Layout from '../../components/layout';
import { list, lists } from './mock';
import { AtGrid, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import Modal from '../../components/Modal';
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
  const [modal, setModal] = useState<any>({ isOpened: false })

  return (
    <View className='index'>
      <View className="nav-bar bgff" style={{ height: `${_navBarHeight}px` }}>
        <View className="nav-bar-content" style={{ height: `${menuButtonInfo.height}px`, top: `${menuButtonInfo.top}px`, width: `${_navBarWidth}px` }}>
          <View >
            <Text style={{ marginLeft: menuButtonInfo.width / 3 }} className='title'>{'早上好，张先生'}</Text>
          </View>
          <View className='message'>
            <Text className='iconfont  icon-xiaoxi'></Text>
            <Text className='num fcff'>{99}</Text>
          </View>
        </View>
      </View>
      {/* 内容 */}
      <View >
        <Layout>
          <Swiper
            className='index-swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <Image src={Swiper1} mode='widthFix'></Image>
            </SwiperItem>
            <SwiperItem>
              <Image src={Swiper1} mode='widthFix'></Image>
            </SwiperItem>
          </Swiper>
          {/* 列表 */}
          <View className='list'>
            {
              list.map((item, index) => {
                return <View className='item' key={index}>
                  <Image src={require('../../assets/images/打卡.png')}></Image>
                  <View>{item.name}</View>
                </View>
              })
            }
          </View>
          {/* Gird */}
          <View className='index-gird'>
            <AtGrid
              columnNum={4}
              data={lists}
              onClick={(item, index) => index === 1 && setModal({ ...modal, isOpened: true, title: item.value })}
            />
          </View>
        </Layout>
      </View>
      <Modal
        showCancelBtn={false}
        isOpened={modal.isOpened}
        title={modal.title}
      >
        <View className='model-gird'>
          <AtGrid
            hasBorder={false}
            columnNum={4}
            data={lists}
            onClick={(item, index) => index === 1 && setModal({ ...modal, isOpened: true, title: item.value })}
          />
        </View>
      </Modal>
    </View>
  )

}

export default Index

/*
 * @Author: Ethan Fang
 * @Date: 2022-02-11 20:07:12
 * @Description: bottomButton
 */
import { View, Text } from '@tarojs/components';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import React from 'react'
import { AtIcon } from 'taro-ui';
import './bottom-button-container.scss'

function BottomButtonContainer(props: {
  children?: any;
  className?: string;
  titleElement?: any;
}) {

  return (
    <View className={`bottom-button-container df ${props.className}`}>
      <View className='left df aic'>
        <View onClick={() => Taro.navigateTo({ url: '/pages/index/index' })}>
          <View className={`df fdc aic ${getCurrentInstance().router?.path === '/pages/index/index' ? 'fc4b' : ''}`}>
            <AtIcon size={24} value={'shopping-bag'}></AtIcon>
            <Text className='pt5'>工作</Text>
          </View>
        </View>
        <View onClick={() => Taro.navigateTo({ url: '/pages/help/index' })}>
          <View className={`df fdc aic ${getCurrentInstance().router?.path === '/pages/help/index' ? 'fc4b' : ''}`}>
            <AtIcon size={24} value={'message'}></AtIcon>
            <Text className='pt5'>助手</Text>
          </View>
        </View>
      </View>
      <View className='middle'>
        <View
          onClick={() => Taro.navigateTo({ url: '/pages/use/index' })}
          className='middle-outter' style={{ overflow: 'hidden' }}>
          <View className='middle-inner'>
            <Text className='add'>+</Text>
          </View>

        </View>
        <View className='use' >常用</View>
      </View>
      <View className='right df'>
        <View onClick={() => Taro.navigateTo({ url: '/pages/number/index' })}>
          <View className={`df fdc aic ${getCurrentInstance().router?.path === '/pages/number/index' ? 'fc4b' : ''}`}>
            <AtIcon size={24} value={'analytics'}></AtIcon>
            <Text className='pt5'>分析</Text>
          </View>
        </View>
        <View onClick={() => Taro.navigateTo({ url: '/pages/user/index' })}>
          <View className={`df fdc aic ${getCurrentInstance().router?.path === '/pages/user/index' ? 'fc4b' : ''}`}>
            <AtIcon size={24} value={'user'}></AtIcon>
            <Text className='pt5'>我的</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BottomButtonContainer

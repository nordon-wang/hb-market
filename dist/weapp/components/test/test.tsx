import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './test.less'

interface IProps {}
interface IState {}

export default class Timer extends Component<IProps, IState> {

  render () {
    return (
      <View className='timer'>
        <Text>'aaaa'</Text>
      </View>
    )
  }
}

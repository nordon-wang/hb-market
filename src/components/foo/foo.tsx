import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './foo.less'

interface IProps {}
interface IState {}

export default class Foo extends Component<IProps, IState> {

  render () {
    return (
      <View className='foo'>
        <Text>Foo 组件测试</Text>
      </View>
    )
  }
}

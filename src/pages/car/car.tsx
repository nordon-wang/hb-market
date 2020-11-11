import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import  Foo from "../../components/foo/foo";

import './car.less'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'car'
  }

  componentWillMount () { }

  componentWillReact () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToIndx = () => {
    console.log('go to index');
    // Navigator
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render () {
    return (
      <View>
        <Foo />
        <Button 
          plain type='primary'
          onClick={this.goToIndx}>go to index</Button>
      </View>
    )
  }
}

export default Index  as ComponentType

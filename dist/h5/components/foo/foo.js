import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
import './foo.less';
export default class Foo extends Component {
  render() {
    return <View className="foo">
        <Text>Foo 组件测试</Text>
      </View>;
  }
}
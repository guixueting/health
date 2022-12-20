/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import { Component, PropsWithChildren } from 'react'
import './app.scss'
import "./assets/icon-font/iconfont.css";


class App extends Component<PropsWithChildren> {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App

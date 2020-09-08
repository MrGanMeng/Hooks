import React, { Component, PureComponent } from 'react';

class PlanForm extends PureComponent {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log('constructor');
  }

  // nextprops为更新后的参数
  // 此方法无权访问组件实例
  static getDerivedStateFromProps(nextProps: any, nextState: any) {
    console.log('getDrivedStateFromProps', nextProps, nextState);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate', nextProps, nextState);
  //   return false;
  // }

  // didmount只执行一次
  componentDidMount() {
    console.log('componentDidMount');
  }

  // preProps为更新前的数据
  componentDidUpdate(preProps: any, preState: any) {
    console.log('componentDidUpdate', preProps, preState);
  }

  // 清除副作用
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 捕获前端异常
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    console.log('render');
    return <div>planForm</div>;
  }
}
export default PlanForm;

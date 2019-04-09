import { _render } from './render';

/**
 * 
 * @param {组件类} component 
 * @param {传进来参数} props 
 * 
 * 设置钩子
 */
function setComponentProps(component, props) {
  if (!component.base && component.componentWillMount) {
    component.componentWillMount();
  } else if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }
  component.props = props;
  _renderComponent(component);
}

function createComponent(component, props) {
  return new component(props);
}

/**
 * 
 * @param {组件类} component 
 * 
 * 渲染组件
 */
function _renderComponent(component) {
  let base; // base的存在可以设置一些钩子
  base = _render(component.render()); // component.render() 返回的是 vnode
  component.base = base;
  base._component = component; // 将组件挂载到base下
}

export {
  createComponent,
  setComponentProps,
}

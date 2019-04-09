import { createComponent, setComponentProps } from './createComponent';

/**
 * 
 * @param {虚拟节点 tag attrs children} vnode 
 * @param {挂载的节点} container 
 */
function render(vnode, container) {
  container.appendChild(_render(vnode));
}

export function _render(vnode) {
  const tag = vnode.tag;
  if (typeof vnode === 'string' ) {
    const textNode = document.createTextNode(vnode);
    return textNode;
  }

  let dom;

  if (typeof tag === 'function') {
    //渲染组件
    const component = createComponent(tag, vnode.attrs);
    setComponentProps(component);
    return component.base;
  }

  dom = document.createElement(tag);
  setAttrs(vnode.attrs, dom);
  if (vnode.children && vnode.children.length) {
    vnode.children.forEach(child => {
      const childEle = _render(child);
      dom.appendChild(childEle);
      setAttrs(child.attrs, childEle);
    });
  }
  return dom;
}
/**
 * 
 * @param {attr属性} attrs 
 * @param {需要添加attr属性的节点} ele 
 */
function setAttrs(attrs, ele) {
  if (!attrs) {
    return;
  }
  Object.keys(attrs).forEach((key) => {
    ele.setAttribute(key, attrs[key]);
  });
}

export default render;

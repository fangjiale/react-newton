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

function setAttrs(attrs, ele) {
  if (!attrs) {
    return;
  }
  Object.keys(attrs).forEach((key) => {
    ele.setAttribute(key, attrs[key]);
  });
}

export default render;
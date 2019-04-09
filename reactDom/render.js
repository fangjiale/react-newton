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

  if (vnode.children && vnode.children.length) {
    vnode.children.forEach(child => {
      dom.appendChild(_render(child));
    });
  }
  return dom;
}

export default render;

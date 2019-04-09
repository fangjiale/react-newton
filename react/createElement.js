/**
 * 
 * @param {标签名} tag 
 * @param {属性名} attrs 
 * @param  {...any 后面节点，可能是字符串，可能是React.createElement()的节点} children 
 */
export default function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  }
}

class Component{
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  setState(change) {
    Object.assign(this.state, change);
    this.render(); // state 变化 重新渲染
  }
}

export default Component;


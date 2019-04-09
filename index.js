import React, { Component } from './react';
import ReactDom from './reactDom';

class Welcome extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <div> welcome </div>;
  }
}

ReactDom.render(<Welcome />, document.getElementById('root'));
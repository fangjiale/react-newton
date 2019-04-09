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

class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <div> <Welcome /> <Welcome /> <Welcome /> </div>;
  }
}

ReactDom.render(<App />, document.getElementById('root'));
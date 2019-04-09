import React, { Component } from './react';
import ReactDom from './reactDom';

class Welcome extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{ this.props && this.props.welcomeText || 'welcome' }</div>;
  }
}

class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <div><Welcome class="blue" welcomeText="hello" /><Welcome /></div>;
  }
}

ReactDom.render(<App />, document.getElementById('root'));
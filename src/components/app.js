import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* this is where we pass our components that will live inside of the header */}
        {this.props.children}
      </div>
    );
  }
}

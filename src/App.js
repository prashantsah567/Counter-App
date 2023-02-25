import React, { Component } from 'react';
import './index.css'
import Counter from './Counter'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      mount: true
    }
  }
  mountCounter = () => this.setState({mount: true})
  unmountCounter = () => this.setState({mount: false})
  
  render(){
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
        {this.state.mount ? <Counter />:null}
      </div>
    );
  }
}


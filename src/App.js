import React, { Component } from 'react';
import './index.css'
import Counter from './Counter'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      mount: true,
      ignoreProp: 0
    }
  }
  mountCounter = () => this.setState({mount: true})
  unmountCounter = () => this.setState({mount: false})
  ignoreProp = () => this.setState({ignoreProp: Math.random()})
  
  render(){
    return (
      <div className="App">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp}/>:null}
      </div>
    );
  }
}


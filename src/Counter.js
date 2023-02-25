import React,{Component} from "react"
import './index.css'

export default class Counter extends Component{
    constructor(props){
        console.log('Constructor');
        super(props);
        this.state={
            counter:0
        }
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    componentDidMount(){
        console.log('Component Did Mount');
        console.log('---------------------');
    }
    
    render(){
        return(
            <div className="counter">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <br/>
                Counter: {this.state.counter}
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did update")
        console.log('---------------------');
    }
    
    componentWillUnmount(){
        console.log('Component will Unmount')
        console.log('---------------------');
    }
}
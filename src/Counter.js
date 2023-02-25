import React,{Component} from "react"
import './index.css'

// const ErrorComponent = () => <div>{props.ignore}</div>

export default class Counter extends Component{
    constructor(props){
        console.log('Constructor');
        super(props);
        this.state={
            counter:0,
            initializing: true
        }
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    componentDidMount(){
        console.log('Component Did Mount');
        setTimeout(() => {
            this.setState({initializing: false})
        }, 500)
        console.log('---------------------');
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp){
                console.log('Should component update - DO NOT RENDER')
                return false;
            }
        console.log('Should Component update - RENDER')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Get Snapshot Before update')
        return null
    }
    
    render(){
        console.log('Render')

        if(this.state.initializing){
            return <div>Initializing...</div>
        }
        return(
            <div className="counter">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <br/>
                Counter: {this.state.counter}
                {/* <ErrorComponent /> */}
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
    
    componentDidCatch(error, info){
        console.log('Component did catch')
        this.setState({error, info})
    }
}
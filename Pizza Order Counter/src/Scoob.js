import React from "react";
import scoob from './scoob.jpg';

const Counter = {
    backgroundColor:"black",
    fontSize:"80px",
    borderRadius:"25px",
    height: "100px"
}

const Button = {
    backgroundColor:"White",
    fontSize:"20px",
    borderRadius:"10px",
    height:"50px",
    width:"250px"
}

class Scoob extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    sub(){
        this.setState({
            count:this.state.count + 1
        })
    }

    unsub(){
        this.setState({
            count:this.state.count - 1
        })
    }

    render(){
        return <div>
            <img src={scoob} height="200px"/>
            <h1>Pizza Order Counter</h1>
            <h1 style={Counter}>{this.state.count}</h1>
            <button style={Button} onClick={() => this.sub()}>Take Order</button>
            <br />
            <br />
            <button style={Button} onClick={() => this.unsub()}>Cancel Order</button>
        </div>
    }
}

export default Scoob;
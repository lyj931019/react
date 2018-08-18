import React, { Component } from 'react';

class Clock extends Component {

    timer = null;
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.tick();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export  default Clock;
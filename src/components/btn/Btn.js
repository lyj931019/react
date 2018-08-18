import React, { Component } from 'react';

class Btn extends Component {


    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
    }

    handleClick = () =>{
        console.log(123);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <div>
               <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        );
    }
}

export  default Btn;
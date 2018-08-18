import React,{Component} from 'react';
import './todo-item.css';

export default class TodoItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            index:props.index
        }
    }

    handleDel = ()=>{
        console.log(this.props.index);
        this.props.onDelItem(this.props.index);
    }

    render(){
        const item = this.props.item;
        return (
            <div className="item">
                <span>{item}</span>
                <span className="btn" onClick={this.handleDel}>X</span>
            </div>
        )
    }
}
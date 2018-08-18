import React, {Component} from 'react';
import TodoItem from '../todo-item/todo-item';
import './todo-list.css'

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            addStr: ''
        }
    }

    handleAdd = () => {
        if (this.state.addStr.length > 0) {
            let list = this.state.list;
            list.push(this.state.addStr);
            this.setState({list, addStr: ''});
        }
    }

    hanleDel = (i) => {
        let list = this.state.list;
        list.splice(i, 1);
        this.setState({list});
    }
    handleChange = (e) => {
        this.setState({addStr: e.target.value})
    }

    render() {
        // const list = this.state.list;
        return (
            <div className="list-container">
                <div className='list'>
                    {this.state.list.map((item, index) =>
                        <TodoItem item={item} index={index} key={index.toString()} onDelItem={this.hanleDel}/>
                    )}
                </div>
                <div className='add'>
                    <input type="text" value={this.state.addStr} onChange={this.handleChange}/>
                    <span onClick={this.handleAdd} className='button'>Add</span>
                </div>
            </div>
        )
    }
}
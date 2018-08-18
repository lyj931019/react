import React,{Component} from 'react';

export default class FromTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            txt:'',
            select:'',
            options:[
                'xp',
                'dp',
                'rem',
                'em'
            ]
        };
    }

    handleChange=(event)=>{
        this.setState({name:event.target.value});
    }

    handleChangeTxt=(event)=>{
        this.setState({txt:event.target.value});
    }
    handleSelect=(event)=>{
        this.setState({select:event.target.value});
    }
    render(){
        return (
            <div>
                <h1 >{this.state.name}</h1>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <h1>{this.state.txt}</h1>
                <textarea name="" id="" cols="30" rows="10" value={this.state.txt} onChange={this.handleChangeTxt}/>
                <h1>{this.state.select}</h1>
                <select  value={this.state.select} onChange={this.handleSelect}>
                    {this.state.options.map((str)=>
                        <option value={str} key={str}>{str}</option>
                    )}
                </select>
            </div>
        );
    }
}
import React ,{Component} from 'react';


export default class ListTest extends Component{
    list = [];
    constructor(props){
        super(props);
        for(let i=0;i<30;i++){
            this.list.push(i)
        }
        console.log(this);
    }

    render(){
        return (
           this.list.map((num)=>{
               if(num%2===0){
                   return <button key={num.toString()}>{num}</button>
               }else{
                   // return <div key={num.toString()}>NaN</div>
                   return ''
               }
            })
        );
    }
}
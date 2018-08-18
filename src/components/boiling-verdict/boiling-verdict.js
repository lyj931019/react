import React, {Component} from 'react';

export default class BoilingVerdict extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if (this.props.celsius >= 100) {
            return  <h3>The water would boil.</h3>;
        }else{
            return <h3>The water would not boil.</h3>;
        }
    }
}
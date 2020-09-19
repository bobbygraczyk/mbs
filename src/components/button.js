import React from 'react';
import Icons from '../components/icons';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.label = 'Button';
        this.icon = '';
    }
    render() {
        return(
            <button className="drop-shadow" id={this.props.id}><Icons name={this.props.icon} />{this.props.label}</button>
        );
    }
}

export default Button;
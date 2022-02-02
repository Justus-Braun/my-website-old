import React from "react";
import './button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }
    
    render() {
        return <p className="button" style={{
            backgroundColor: this.props.backgroundColor
        }}>{this.props.label}</p>;
    }
}

export default Button;
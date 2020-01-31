import React, { Component } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

export default class SigninInputText extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TextInput placeholder={this.props.placeholder} />
        );
    }
}

SigninInputText.propTypes={placeholder:PropTypes.string.isRequired}
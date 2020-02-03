import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Colors from '../ultilities/colors'

export default class ForgetPasswordButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity 
            onPress={this.props.onPress}>
                    <Text style={{ fontSize: 16, color: Colors.grey, fontWeight: 'bold' }}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

ForgetPasswordButton.propTypes = { text: PropTypes.string.isRequired, style:PropTypes.style, onPress:PropTypes.func }
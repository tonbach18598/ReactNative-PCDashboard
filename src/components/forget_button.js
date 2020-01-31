import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";

export default class ForgetPasswordButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[{width:Dimensions.get('window').width/2,height:50, borderRadius:30,backgroundColor:'green'},this.props.style]}
            onPress={this.props.onPress}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

SigninButton.propTypes = { text: PropTypes.string.isRequired, style:PropTypes.style.isRequired, onPress:PropTypes.func.isRequired }
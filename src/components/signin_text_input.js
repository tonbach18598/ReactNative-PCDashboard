import React, { Component } from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

export default class SigninTextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.51,
                shadowRadius: 13.16,
                elevation: 20,
            }}
                placeholder={this.props.placeholder} />
        );
    }
}

SigninTextInput.propTypes = { placeholder: PropTypes.string.isRequired }
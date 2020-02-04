import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";
import Colors from '../ultilities/colors'

export default class SigninButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={{
                    width: Dimensions.get('window').width / 1.2, height: 50, borderRadius: 30, shadowColor: Colors.shadow,
                    shadowOffset: { width: 0, height: 2, },
                    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
                }}
                onPress={this.props.onPress}>
                <LinearGradient
                    style={{ opatity: 0.9, borderRadius: 30, alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{this.props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

SigninButton.propTypes = { text: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired }
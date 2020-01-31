import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";

export default class SigninButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[{width:Dimensions.get('window').width/2,height:50, borderRadius:30,backgroundColor:'green'},this.props.style]}>
                <LinearGradient
                    style={{borderRadius:30,alignItems:'center', paddingTop:10,paddingBottom:10, paddingRight:20, paddingLeft:20}}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{this.props.text}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

SigninButton.propTypes = { text: PropTypes.string.isRequired, style:PropTypes.style.isRequired, onPress:PropTypes.onPress.isRequired }
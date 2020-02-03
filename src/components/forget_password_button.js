import React, { Component } from "react";
import { Text, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Colors from '../ultilities/colors'

export default class ForgetPasswordButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{flexDirection:'row'}, this.props.style]}>
                <View style={{flex:1}}/>
            <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={{ fontSize: 16, color: Colors.grey, fontWeight: 'bold', alignSelf:'flex-end', flexWrap:'wrap'}}>{this.props.text}</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

ForgetPasswordButton.propTypes = { text: PropTypes.string.isRequired, onPress:PropTypes.func.isRequired, style:PropTypes.style }
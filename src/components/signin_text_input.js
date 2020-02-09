import React, { Component } from 'react';
import { TextInput, Dimensions, View, Platform, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../ultilities/colors';
import {Icon} from 'react-native-elements'

export default class SigninTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[{
                backgroundColor:Colors.white, borderRadius:30, shadowColor: Colors.shadow,
                shadowOffset: {width: 0,height: 5,},
                shadowOpacity: 0.34,shadowRadius: 6.27, elevation: 10, width: Dimensions.get('window').width/1.2, flexDirection:'row', justifyContent:'center', alignItems:'center'},
                this.props.style]}>
                <View style={{marginLeft:20, marginRight:20}}>
                    <Icon
                        name={this.props.icon}
                        color={Colors.lightBlue}/>
                </View>
                <TextInput
                    style={{flex:1, ...Platform.select({android:{marginTop:5, marginBottom:5},ios:{marginTop:20, marginBottom:20}})}}
                    placeholder={this.props.placeholder}
                    selectionColor={Colors.black} />
            </View>
        );
    }
}

SigninTextInput.propTypes = {
    icon:PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    style:ViewPropTypes.style
}
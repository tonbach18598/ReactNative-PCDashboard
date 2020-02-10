import React, { Component } from 'react';
import { TextInput, Dimensions, View, Platform, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../ultilities/colors';
import {Icon} from 'react-native-elements'

export default class UpdateInformationTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[{
                backgroundColor:Colors.white, borderRadius:20, borderWidth:2, borderColor:this.props.primaryColor,
                 width: Dimensions.get('window').width/1.2, flexDirection:'row', justifyContent:'center', alignItems:'center'},
                this.props.style]}>
                <View style={{marginLeft:20, marginRight:20}}>
                    <Icon
                        name={this.props.icon}
                        color={this.props.primaryColor}/>
                </View>
                <TextInput
                    style={{flex:1, ...Platform.select({ios:{marginTop:15, marginBottom:15}})}}
                    placeholder={this.props.placeholder}
                    selectionColor={Colors.orange}
                    editable={this.props.editable} />
            </View>
        );
    }
}

UpdateInformationTextInput.propTypes = {
    icon:PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    primaryColor: PropTypes.string.isRequired,
    style:ViewPropTypes.style
}
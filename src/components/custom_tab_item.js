import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import PropTypes from 'prop-types'

export default class CustomTabItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flexDirection:'column'}}>
                <Icon
                    name={this.props.icon}
                    color={this.props.color}/>
                <Text style={{fontSize:12, color:this.props.color}}>{this.props.title}</Text>
            </View>
        )
    }
}

CustomTabItem.propTypes = { icon:PropTypes.string.isRequired, title: PropTypes.string.isRequired, color:PropTypes.string.isRequired}
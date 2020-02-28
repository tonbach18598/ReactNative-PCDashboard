import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Values from '../ultilities/values'
import Routes from '../ultilities/routes'

export default class ContactScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <CustomHeader title={Values.PHYSICS_COMPUTER_SCIENCE.toUpperCase()} left='menu' onPressLeft={()=>{this.props.navigation.openDrawer()}}/>
                <View style={{flex:1,flexDirection:'column', margin:5}}>
                <View style={{flex:1}}>
                        <TouchableOpacity
                        onPress={()=>{  this.props.navigation.navigate(Routes.userRoute, {classId:'3Y',title:Values.THIRD_YEAR_LIST})}}
                        style={{flex:1, borderTopLeftRadius:Dimensions.get('window').height/8.8, borderBottomRightRadius:Dimensions.get('window').height/8.8}}>
                            <LinearGradient
                                style={{ flex:1, borderTopLeftRadius: Dimensions.get('window').height/8,borderBottomRightRadius:Dimensions.get('window').height/8, alignItems: 'center', paddingTop: 10, paddingBottom: 10, height: 50, justifyContent: 'center' }}
                                start={{ x: 1.0, y: 0.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40']}>
                                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{Values.THIRD_YEAR_LIST.toUpperCase()}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:5}}/>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                        onPress={()=>{  this.props.navigation.navigate(Routes.userRoute, {classId:'4Y', title:Values.FOURTH_YEAR_LIST})}}
                        style={{flex:1, borderTopRightRadius:Dimensions.get('window').height/8.8, borderBottomLeftRadius:Dimensions.get('window').height/8.8}}>
                            <LinearGradient
                                style={{ flex:1, borderTopRightRadius: Dimensions.get('window').height/8,borderBottomLeftRadius: Dimensions.get('window').height/8, alignItems: 'center', paddingTop: 10, paddingBottom: 10, height: 50, justifyContent: 'center' }}
                                start={{ x: 1.0, y: 0.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#4caf50', '#8bc34a', '#b2ff59', '#69f0ae']}>
                                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{Values.FOURTH_YEAR_LIST.toUpperCase()}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:5}}/>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                        onPress={()=>{  this.props.navigation.navigate(Routes.userRoute,{classId:'GV',title:Values.TEACHER_LIST})}}
                        style={{flex:1,borderTopLeftRadius:Dimensions.get('window').height/8.8,borderBottomRightRadius:Dimensions.get('window').height/8.8}}>
                            <LinearGradient
                                style={{ flex:1, borderTopLeftRadius: Dimensions.get('window').height/8,borderBottomRightRadius:Dimensions.get('window').height/8, alignItems: 'center', paddingTop: 10, paddingBottom: 10, height: 50, justifyContent: 'center' }}
                                start={{ x: 1.0, y: 0.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#448aff', '#2196f3', '#03a9f4', '#40c4ff']}>
                                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{Values.TEACHER_LIST.toUpperCase()}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
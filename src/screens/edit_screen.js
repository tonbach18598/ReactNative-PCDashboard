import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Values from '../ultilities/values'
import CustomHeader from '../components/custom_header'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../ultilities/colors'
import { Button, Icon, Avatar } from 'react-native-elements'

export default class EditScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader
                    title={Values.EDIT_POST.toUpperCase()}
                    left={'arrow-back'}
                    onPressLeft={() => { this.props.navigation.goBack() }}
                    right={'edit'}
                    onPressRight={() => { }} />
                    
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Avatar
                                    rounded
                                    size='medium'
                                />
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.blue }}>Bùi Ngô Tôn Bách</Text>
                                <Text style={{ fontSize: 12, color: Colors.grey, marginTop: 5 }}>Thành viên của K16</Text>
                            </View>
                        </View>
                        <TextInput
                            multiline
                            style={{ fontSize: 20, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, ...Platform.select({ ios: { marginTop: 15, marginBottom: 15 } }) }}
                            selectionColor={Colors.orange}
                            placeholder={Values.YOUR_THINKING} />
                    </View>
                </ScrollView>

                <TouchableOpacity>
                    <LinearGradient
                        style={{ width: Dimensions.get('window').width }}
                        start={{ x: 1.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ flex: 5, marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
                                <Text style={{ fontSize: 16, color: Colors.white }}>{Values.ADD_IMAGE}</Text>
                            </View>
                            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                <Button icon={<Icon name='image' color={Colors.white} size={30} />} type="clear" onPress={() => { }} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}
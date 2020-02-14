import React from 'react';
import { TextInput, Dimensions, View, Platform } from 'react-native';
import Colors from '../ultilities/colors';
import { Icon } from 'react-native-elements'

const SigninTextInput = ({ icon, placeholder, style }) => (
    <View style={[{
        backgroundColor: Colors.white, borderRadius: 30, shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 5, },
        shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, width: Dimensions.get('window').width / 1.2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
        style]}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Icon
                name={icon}
                color={Colors.lightBlue} />
        </View>
        <TextInput
            style={{ flex: 1, ...Platform.select({ android: { marginTop: 5, marginBottom: 5 }, ios: { marginTop: 20, marginBottom: 20 } }) }}
            placeholder={placeholder}
            selectionColor={Colors.orange} />
    </View>
)

export default SigninTextInput
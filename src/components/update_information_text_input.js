import React from 'react';
import { TextInput, Dimensions, View, Platform } from 'react-native';
import Colors from '../ultilities/colors';
import { Icon } from 'react-native-elements'

const UpdateInformationTextInput = ({ icon, placeholder, editable, color, style, secureText, value, onChangeText }) => (
    <View style={[{
        backgroundColor: Colors.white, borderRadius: 20, borderWidth: 2, borderColor: color,
        width: Dimensions.get('window').width / 1.2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    style]}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Icon
                name={icon}
                color={color} />
        </View>
        <TextInput
            secureTextEntry={secureText}
            value={value}
            style={{ flex: 1, ...Platform.select({ ios: { marginTop: 15, marginBottom: 15 } }) }}
            placeholder={placeholder}
            selectionColor={Colors.orange}
            editable={editable}
            onChangeText={onChangeText} />
    </View>
)

export default UpdateInformationTextInput
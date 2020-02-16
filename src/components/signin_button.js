import React from "react";
import { Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../ultilities/colors'


const SigninButton = ({ title, onPress }) => (
    <TouchableOpacity
        style={{
            width: Dimensions.get('window').width / 1.2, height: 50, borderRadius: 30, 
            ...Platform.select({
                ios: {
                    shadowColor: Colors.grey,
                    shadowOffset: { height: 1, width: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 10
                },
                android: {
                    elevation: 10
                }
            })
        }}
        onPress={onPress}>
        <LinearGradient
            style={{ opatity: 0.9, borderRadius: 30, alignItems: 'center', paddingTop: 10, paddingBottom: 10, height: 50, justifyContent: 'center' }}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={['#ff5722', '#ff6e40', '#ff9800', '#ffab40', '#40c4ff', '#03a9f4', '#2196f3', '#448aff']}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
)

export default SigninButton
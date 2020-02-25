import DefaultPreference from 'react-native-default-preference'
import { Platform } from 'react-native'

export default class Preferences {
    
    static async saveToken(token) {
        if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage')
        await DefaultPreference.set('token', token)
    }

    static async loadToken() {
        if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage')
        let token = await DefaultPreference.get('token')
        return token
    }

    static async clearAll() {
        if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage')
        await DefaultPreference.clearAll()
    }

    static async saveSelf(self) {
        if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage')
        await DefaultPreference.set('selfId', self.userId)
        await DefaultPreference.set('selfName', self.name)
        await DefaultPreference.set('selfAvatar', self.avatar)
        await DefaultPreference.set('selfClassId', self.classId)
        await DefaultPreference.set('selfEmail', self.email)
        await DefaultPreference.set('selfPhone', self.phone)
    }

    static async loadSelf() {
        if (Platform.OS === 'android') DefaultPreference.setName('NativeStorage')
        let selfId = await DefaultPreference.get('selfId')
        let selfName = await DefaultPreference.get('selfName')
        let selfAvatar = await DefaultPreference.get('selfAvatar')
        let selfClassId = await DefaultPreference.get('selfClassId')
        let selfEmail = await DefaultPreference.get('selfEmail')
        let selfPhone = await DefaultPreference.get('selfPhone')
        return {
            'userId': selfId,
            'name': selfName,
            'avatar': selfAvatar,
            'classId': selfClassId,
            'email': selfEmail,
            'phone': selfPhone
        }
    }
}
import { READ_SELF } from './type'
import Preferences from '../../ultilities/preferences'

export const loadSelf = () => {
    return async (dispatch) => {
        let self = await Preferences.loadSelf()
        dispatch(saveSelf(self))
    }
}

export const saveSelf = (self) => {
    return {
        type: READ_SELF,
        self
    }
}
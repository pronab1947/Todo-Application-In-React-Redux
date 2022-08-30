import { STATUSCHANGED, COLORCHANGED } from './filterActionType';

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
};

export const colorChanged = (colors, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            colors,
            changeType
        }
    }
}
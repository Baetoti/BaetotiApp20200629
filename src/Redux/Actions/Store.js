import { SETITEM } from '../Types';
export const setItems = payload => {
    return {
        type: SETITEM,
        payload: payload
    }
};
import { SETLANGUAGE } from '../Types';
export const setLanguage = payload => {
    return {
        type: SETLANGUAGE,
        payload: payload
    }
};
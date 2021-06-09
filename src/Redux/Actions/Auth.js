import { LOGIN, LOGOUT,SETBUYER,SETPROVIDER,SETDRIVER ,DRIVERLOGIN,PROVIDERLOGIN} from '../Types';
export const login = payload => {
    return {
        type: LOGIN,
        payload: payload
    }
};
export const logout = () => {
    return {
        type: LOGOUT,
        payload: null
    }
};
export const setBuyer = () => {
    return {
        type: SETBUYER,
        payload: null
    }
};
export const setProvider = () => {
    return {
        type: SETPROVIDER,
        payload: null
    }
};
export const setDriver = () => {
    return {
        type: SETDRIVER,
        payload: null
    }
};
export const driverLogin = (data) => {
    return {
        type: DRIVERLOGIN,
        payload: data
    }
};
export const providerLogin = (data) => {
    return {
        type: PROVIDERLOGIN,
        payload: data
    }
};
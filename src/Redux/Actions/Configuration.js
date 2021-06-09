import { SETCURRENCY, SETDISTANCEUNIT, SETRADIUS,PROFILECOMPLETE ,SETSTORECREATED,
    SETPROVIDERSFILTER,ORDERSTATUS} from '../Types';
export const setCurrency = payload => {
    return {
        type: SETCURRENCY,
        payload: payload
    }
};
export const setDistance = payload => {
    return {
        type: SETDISTANCEUNIT,
        payload: payload
    }
};
export const setRadiusInMeters = payload => {
    return {
        type: SETRADIUS,
        payload: payload
    }
};
export const setProfileComplete = payload => {
    return {
        type: PROFILECOMPLETE,
        payload: payload
    }
};
export const setStoreCreated = payload => {
    return {
        type: SETSTORECREATED,
        payload: payload
    }
};
export const setProvidersFilter = payload => {
    return {
        type: SETPROVIDERSFILTER,
        payload: payload
    }
};
export const setOrderStatus = payload => {
    return {
        type: ORDERSTATUS,
        payload: payload
    }
};
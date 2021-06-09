import { SETCURRENCY, SETDISTANCEUNIT, SETRADIUS,PROFILECOMPLETE,SETSTORECREATED,
    SETPROVIDERSFILTER,ORDERSTATUS } from '../Types';

const intialState = {
    currencyOptions: ['SAR', 'USD'],
    selectedCurrency: 'SAR',
    distanceUnitOptions: ["Km", "Miles"],
    selectedDistanceUnit: "Km",
    selectedRadiusInMeters: 5000,
    sartoDollar: 0.27,
    toFixed: 2,
    isProfileCompleted:false, //to makesure complete profile and not show more than once
    isStoreCreated:false,
    showProviders: "all",
    orderStatus:0
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SETCURRENCY: {
            return {
                ...state,
                selectedCurrency: action.payload
            }
        }
        case SETDISTANCEUNIT: {
            return {
                ...state,
                selectedDistanceUnit: action.payload
            }
        }
        case SETRADIUS: {
            return {
                ...state,
                selectedRadiusInMeters: action.payload
            }
        }
        case PROFILECOMPLETE: {
            return {
                ...state,
                isProfileCompleted: true
            }
        }
        case SETSTORECREATED: {
            return {
                ...state,
                isStoreCreated: true
            }
        }
        case SETPROVIDERSFILTER: {
            return {
                ...state,
                showProviders: action.payload
            }
        }
        case ORDERSTATUS:{
            return {
                ...state,
                orderStatus:action.payload
            }
        }
        default:
            return state
    }
}
export default reducer;
import { LOGIN, LOGOUT,SETBUYER,SETPROVIDER,SETDRIVER ,DRIVERLOGIN,PROVIDERLOGIN} from '../Types';
const intialState = {
    user: null,
    isLogin: false,
    driverDetail: null,
    appMode:'buyer',
    providerDetail:null
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: action.payload,
                isLogin: false,
                driverDetail:null
            }
        }
        case SETBUYER: {
            return {
                ...state,
                appMode:'buyer'
            }
        }
        case SETPROVIDER: {
            return {
                ...state,
                appMode:'provider'
            }
        }
        case SETDRIVER: {
            return {
                ...state,
                appMode:'driver'
            }
        }
        case DRIVERLOGIN: {
            return {
                ...state,
                driverDetail:action.payload
            }
        }
        case PROVIDERLOGIN: {
            return {
                ...state,
                providerDetail:action.payload
            }
        }
        default:
            return state

    }
}
export default reducer;
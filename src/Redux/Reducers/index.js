import Auth from './Auth';
import Language from './Language'
import Store from './Store'
import Configuration from './Configuration';
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    Language: Language,
    Store: Store,
    Configuration: Configuration
});

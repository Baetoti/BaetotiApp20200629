import { SETLANGUAGE } from '../Types';
import englishLanguageJson from '../../Rtl/en.json';
import arabicLanguageJson from '../../Rtl/ar.json';

const intialState = {
    languageJson: englishLanguageJson,
    selectdLanguage:'en'
}
const reducer = (state = intialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case SETLANGUAGE: {
            return {
                ...state,
                languageJson: action.payload.language == 'en' ?
                    englishLanguageJson : arabicLanguageJson,
                    selectdLanguage:action.payload.language
            }
        }
        default:
            return state
    }
}
export default reducer;
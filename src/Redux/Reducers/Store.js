import { SETITEM } from '../Types';
import DummyItems from '../../DummyData/Provider.MyPost'
const intialState = {
    items: DummyItems
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case SETITEM: {
            return {
                ...state,
                items: action.payload,
            }
        }
        default:
            return state

    }
}
export default reducer;
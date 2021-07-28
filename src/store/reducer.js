import store from '.';
import * as actionType from '../component/actions';

const initialState = {
    age: 0,
    count: 0
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case actionType.INCREMENT_COUNT_RECEIVED: {
            state.age = action.value;
            return { ...state };
        }
        default:
            return state

    }

};

export default reducer;
import {
    AUTHOR_DETAILS,
    SET_AUTHORS

} from "../constants/actions";

const stateInit = {
    authors : [],
    details : {},
    author : '',
    name: '',
    bio: '',
    shopName: '',
    books: [],
   // active : false
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_AUTHORS:

            return {
                ...state,
                authors : state.authors.concat(action.payload)
            }

        case AUTHOR_DETAILS:
            let details = action.payload
            return {
                ...state,
                details : details,
               // active: true
            }

        default:
            return state;
    }
}

export default reducer;

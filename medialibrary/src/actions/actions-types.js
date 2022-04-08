import {
    SET_AUTHOR,
    FETCH_AUTHORS,
    AUTHOR_DETAILS,
    ADD_BOOK,
    ADD_AUTHOR
} from "../constants/actions";

export const set_author = (payload) => {
    return {
        type: SET_AUTHOR, payload
    };
}

export const fetch_authors = (payload) => {
    return {
        type: FETCH_AUTHORS, payload
    }
}
export const author_details = (payload) => {
    return {
        type: AUTHOR_DETAILS, payload
    };
}

export const add_book = (payload) => {

    return {
        type:ADD_BOOK, payload
    }
}

export const add_author = (payload) => {

    return {
        type: ADD_AUTHOR, payload
    };
}

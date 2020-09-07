import {
    SET_AUTHORS,
    AUTHOR_DETAILS
} from '../constants/actions';

export const set_authors = payload => {
    return {
        type: SET_AUTHORS, payload
    };
}

export const author_details = payload => {
    return {
        type: AUTHOR_DETAILS, payload
    };
}
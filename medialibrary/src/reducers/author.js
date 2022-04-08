import {
    SET_AUTHOR,
    FETCH_AUTHORS,
    AUTHOR_DETAILS,
    ADD_BOOK,
    ADD_AUTHOR,
} from "../constants/actions";


const initialState = {
    authors: [],
    author: '',
    name: '',
    bio: '',
    shop_name: '',
    books: [],
    book: '',
    details: '',
    active: false,
    message: ''
}

const reducer = (state = initialState, action = {}) => {
    let books, authors, author;

    switch (action.type) {

        case SET_AUTHOR:
            let {name, value} = action.payload
            return {
                ...state,
                [name]: value
            }

        case FETCH_AUTHORS:
            authors = action.payload;
            return {
                ...state,
                authors
            }
        case AUTHOR_DETAILS:
            author = action.payload
            return {
                ...state,
                details: author,
                active: true
            }
        case ADD_BOOK:
            books = state.books;
            books = books.concat(state.book);

            return {
                ...state,
                books,

            }

        case ADD_AUTHOR:
            const {name: auth, bio, shop, books: boks} = state
            const infos = {
                id: Math.random().toString(36).substr(2, 9),
                name: auth, bio: bio, shop_name: shop, books: boks
            }
            authors = state.authors
            authors = authors.concat({infos});
            const fetchAuthor = async () => {
                const author =  {infos};


                const options = {
                    method: 'POST',
                    body: JSON.stringify(author), // format chaîne de caractères (objet => chaîne de caractères )
                    headers: {"Content-Type": "application/json"}
                }
                const response = await fetch("http://localhost:3000/add", options);
                const info = await response.json(); // le serveur vous retourne un message que l'on souhaite récupérer en JSON
                console.log(info);
            }
            fetchAuthor()
            return {
                ...state, authors, author: '', name: '', bio: '', shop_name: '', book: '', books: [],
            }


        default:
            return state;
    }
}
export default reducer;

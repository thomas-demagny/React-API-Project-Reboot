import React from "react";
import {Typography, CssBaseline, Grid, Container, Card, CardContent} from "@material-ui/core";
import {useStyles} from "../cssStyles/authorStyle";
import {useDispatch, useSelector} from "react-redux";
import {add_author, add_book, set_author} from "../actions/actions-types";



export default function Author() {

    const handleChange = event => {
        const {value, name} = event.target;
        if (value !== '')
            dispatch(set_author({value, name: name}));
    }

    const {name, bio,book, books} = useSelector(state => state);
    const dispatch = useDispatch();

    const classes = useStyles();
    return (
        <>
            <p><label>Name</label>
                <input type="text" name='name' value={name} required onChange={handleChange}/>
            </p>
            <p>
                <label>Bio</label>
                <input type="text" name='bio' value={bio} required onChange={handleChange}/>
            </p>
            <p>
                <label>Store</label>
                <select name="shop_name" onChange={handleChange}>
                    <option value="shop">----------</option>
                    <option value="fnac">Fnac</option>
                    <option value="eyrolles">Eyrolles</option>
                    <option value="gibert">Gibert Jeune</option>

                </select>
            </p>
            <p>
                <label>Books</label>

                <input type="text" name='book' value={book} onChange={handleChange}/>
                <button onClick={() => dispatch(add_book())}>Add a book</button>
                {books.map((i) => <li>{i}</li>)}

            </p>
            <button onClick={() => dispatch(add_author())}>add author</button>
        </>
    );


}

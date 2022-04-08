import React, {useEffect} from "react";
import {Container, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {author_details, fetch_authors, set_author} from "../actions/actions-types";

export default function Home() {

    const {authors, details, active} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(
        () => {

            const fetchAuthor = async () => {
                const results = await fetch("http://localhost:3000/authors");
                const data = await results.json();
                dispatch(fetch_authors(data));
            }
            fetchAuthor();
        }, []
    );

    return (
        <>
            <Container maxWidth="sm">
                <h2>Author's List</h2>
                {authors.map((auth) => (
                    <div>
                        {auth.name}
                        <div>
                            <Button variant="outlined" size="small" color="primary"
                                    onClick={() => dispatch(author_details(auth))}>Detail</Button>
                            <Button variant="contained" size="small" color="secondary">
                                Delete
                            </Button>
                        </div>

                    </div>
                ))}

                {active ? (
                    <div>
                        <h2>Details</h2>
                        <p>
                            <ul>
                                <li>ID : {details.id}</li>
                                <li>BIO : {details.bio}</li>
                                <li>SHOP : {details.shop_name}</li>
                                <li>
                                    BOOKS :
                                    <ul>
                                        {details.books.map((detail) => (
                                            <li>{detail}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </div>
                        ) : null}
            </Container>
        </>
        )
}



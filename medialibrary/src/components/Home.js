import React, {useEffect, useReducer, useState} from "react";
import {Container, Button, CardActionArea} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {author_details, set_authors} from "../actions/actions-types";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import author from "../reducers/author";



function Home() {

    const { authors, details, active} = useState((state) => state);
    const dispatch = useDispatch();
    useEffect(
        () => {

            const fetchAuthor = async () => {
                const results = await fetch("http://localhost:3000/authors");
                const data = await results.json();
                dispatch(set_authors(data));
            }
            fetchAuthor();
        },[dispatch]
    );

    return(
<>
        <Container  maxWidth="sm">
            <h2>Author's List</h2>
            {authors.map((author) => (
                <div>
                    {author.name}
                    <div>
                        <Button variant="outlined" size="small" color="primary" onClick={() => dispatch(author_details(author))}>Detail</Button>
                        <Button variant="contained" size="small" color="secondary">
                            Delete
                        </Button>
                    </div>
                    {author.bio}{" "}{author.shop_name}
                </div>
            ))}

                { /* {active ? ( <p>{details.shop_name}</p>):null}*/}




        </Container>

</>
    )
}
export default Home;






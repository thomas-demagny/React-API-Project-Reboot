import React, {useEffect} from "react";
import {Container, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {author_details, set_authors} from "../actions/actions-types";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";



function Home() {

    const { authors, details} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(
        () => {

            const fetchAuthor = async () => {
                const results = await fetch("http://localhost:3000/authors");
                const data = await results.json();
                dispatch(set_authors(data));
            }
            fetchAuthor();
        },[]
    );



    return(

        <Container  maxWidth="sm">
        <h2>Author's List</h2>
            {authors.map((author) => (
                <Card>
                    {author.name}{""}
                    <CardContent>
                    <Button variant="outlined" size="small" color="primary" onClick={() => dispatch(author_details(author))}>Detail</Button>
                    <Button variant="contained" size="small" color="secondary">
                        Delete
                    </Button>
                </CardContent>
                </Card>
            ))}
        </Container>
    )
}
export default Home;




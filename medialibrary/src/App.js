import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Author from "./components/Author";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import {Container} from "@material-ui/core";

export default function App() {

    return (
        <Router>
            <Container className={"App"}>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/author" component={Author}/>
                    <Route
                        path="/"
                        component={() =>
                            <p>Oups cette page n'existe pas</p>}
                    />
                </Switch>
            </Container>
            <Footer/>
        </Router>
    );
}

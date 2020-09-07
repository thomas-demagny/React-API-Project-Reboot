import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Author from './components/Author';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

  return (

        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/author" component={Author}/>
            <Route
                path="/"
                component={() =>
                    <p>Oups cette page n'existe pas</p>}
            />
          </Switch>
        </Router>

  );
}

export default App;
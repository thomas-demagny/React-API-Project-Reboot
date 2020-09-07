import React from "react";
import { NavLink } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";


function NavBar(){

    return (
        <Container>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Authors
                    </Typography>
                </Toolbar>
                <NavLink to="/">
                    <button>
                        Home
                    </button>
                </NavLink>
                <NavLink to="/author">
                    <button>
                        Add Author
                    </button>
                </NavLink>
          </AppBar>
        </Container>
    )

}

export default NavBar;




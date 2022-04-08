import React from "react";
import {NavLink} from "react-router-dom";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "../cssStyles/authorStyle";

export default function NavBar() {
    const classes = useStyles()
    return (
        <Container>
            <AppBar className={classes.navBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Authors
                    </Typography>
                </Toolbar>
                <NavLink to="/">
                    <button>
                        <HomeIcon className={classes.icon}/>
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

import React from "react";
import {Link} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";

export default function Footer() {
    return (
        <>
            <footer>
                <Breadcrumbs>
                    <Link to="/">
                        <p>
                            Home
                        </p>
                    </Link>
                    <Link to="/author">
                        <p>
                            Add Author
                        </p>
                    </Link>
                </Breadcrumbs>
            </footer>
        </>
    )
}

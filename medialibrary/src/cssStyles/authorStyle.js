import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";

export const useStyles = makeStyles((own) => ({
    navBar: {
        backgroundColor: "#003C50",
        position: "relative"
    },
    icon: {
        marginRight: own.spacing(2),
    },
    heroContent: {
        backgroundColor: own.palette.background.paper,
        padding: own.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: own.spacing(4),
    },
    cardGrid: {
        paddingTop: own.spacing(8),
        paddingBottom: own.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },

}));

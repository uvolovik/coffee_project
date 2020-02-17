import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";
import Header from "./components/framework/Header";

import Content from './components/Content/Content'

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: theme.spacing(0, 0.5),
        ...theme.mixins.toolbar
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header

            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Content/>
            </main>
        </div>
    );
}

export default App;

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";
import Header from "./components/framework/Header";
import PermanentDrawer from "./components/framework/PermanentDrawer";
import TemporaryDrawer from "./components/framework/TemporaryDrawer";

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
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [pinned, setPinned] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerPin = () => {
        setMobileOpen(false);
        setPinned(true);
    };

    const handleUnPin = () => {
        setPinned(false);
        setMobileOpen(true);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                handleDrawerToggle={handleDrawerToggle}
                handleUnPin={handleUnPin}
                pinned={pinned}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Content/>
            </main>
        </div>
    );
}

export default App;

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";
import Header from "./components/framework/Header";
import PermanentDrawer from "./components/framework/PermanentDrawer";
import TemporaryDrawer from "./components/framework/TemporaryDrawer";

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
            <Hidden smUp implementation="css">
                {" "}
                {/*mobile*/}
                <nav aria-label="mailbox folders">
                    <TemporaryDrawer
                        handleDrawerPin={handleDrawerPin}
                        handleDrawerToggle={handleDrawerToggle}
                        mobileOpen={mobileOpen}
                    />
                    {pinned && (
                        <PermanentDrawer
                            pinned={pinned}
                            handleDrawerPin={handleDrawerPin}
                        />
                    )}
                </nav>
            </Hidden>
            <Hidden xsDown implementation="css">
                {" "}
                {/*desktop*/}
                <PermanentDrawer
                    pinned={pinned}
                    handleDrawerPin={handleDrawerPin}
                />
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className="mainContent">
                    <div className="user-info">
                        <div className="user-avatar">
                            <Avatar>U</Avatar>
                        </div>
                        <div className="user__name-email">
                            <span>User Name</span>
                            <small>email@gmail.com</small>
                        </div>
                        <div className="user__skype-location">
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

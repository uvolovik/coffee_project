import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
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
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est
                    ultricies integer quis. Cursus euismod quis viverra nibh
                    cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa
                    tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                    At augue eget arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    );
}

export default App;

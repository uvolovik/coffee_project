import React from "react";
import "../../App.scss";
import Header from "../../components/Header/Header";

import { Grid, Paper } from "@material-ui/core";

import UserInfo from "../../components/UserInfo/UserInfo";
import Instruction from "../../components/Instruction/Instruction";

import useStyles from "./Home_scss";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbarPlaceholder} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              {" "}
              <UserInfo />
            </Paper>
            <Paper className={`${classes.paper} ${classes.calendar}`}>
              CALENDAR
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Instruction />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Home;

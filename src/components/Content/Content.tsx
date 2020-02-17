import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./Content.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    }
  })
);

const Content = () => {
  const classes = useStyles();
  const INSTRUCTIONS = [
    {
      title: "HOW TO CLEAN A FILTER COFFEE MACHINE",
      description:
        "You’ll need to clean all the removable parts after each use: often they’ll be dishwasher-proof, or you can wash them up. Wipe the hot plate with a soft damp cloth when it’s cooled down, too. You should also wipe down the outside with a soft, damp cloth. Check the instructions to find out if the machine has a cleaning cycle and what this needs – a vinegar solution followed by cycles with clean water may be recommended, for instance. Otherwise, follow the descaling process (see below) recommended in the manual to keep the inside of a filter coffee machine in good shape. "
    },
    {
      title: "HOW TO DESCALE A COFFEE MACHINE",
      description:
        "Removing the limescale from a coffee maker – in other words descaling it – is important to stop it getting blocked or leaking. More sophisticated machines might warn you when this task is due, but whether the machine has an indicator or not, it does need descaling regularly. The more you use the machine, and the harder the water where you live, the more frequently it will need descaling.If your machine were to stop working completely, or become noisy, or fail to make coffees as well as it did before, this is the first job to tackle, too."
    }
  ];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
          <div className="user-info">
            <div className="user-avatar">
              <Avatar>U</Avatar>
            </div>
            <div className="user__name-email">
              <span>User Name</span>
              <small>email@gmail.com</small>
            </div>
            <div className="user__skype-location">
              <span>Skype: skypelogin </span>
              <small>919-24</small>
            </div>
          </div>
        </Paper>
        <Paper className={`calendar ${classes.paper}`}>CALENDAR</Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <h1 className="instruction__main-title">Instruction</h1>
          {INSTRUCTIONS.map(item => (
            <div className="instruction__item">
              <h3 className="instruction__title">{item.title}</h3>
              <p className="instruction__desc">{item.description}</p>
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Content;

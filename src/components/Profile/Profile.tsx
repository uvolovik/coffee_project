import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Paper,
  FormControl,
  Input,
  InputLabel,
  //   FormHelper,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
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
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2)
    },

    formControl: {
      margin: "10px 0"
    },
    formRadio: {
      flexDirection: "row"
    },
    time: {
      width: "250px",
      marginRight: "20px"
    }
  })
);

const Profile = () => {
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  interface IForm {
      name: string,
      email: string,
      skype: string,
      location: string,
      milk : boolean,
      start: string,
      end: string,
  }

  const [values, setValues] = useState<IForm>({
    name: "",
    email: "",
    skype: "",
    location: "",
    milk: true,
    start: "09:00",
    end: "18:00"
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        color: '#fff',
        <div className={classes.toolbar} />
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <form className={classes.form} noValidate autoComplete="off">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="component-simple">Full Name</InputLabel>
                  <Input
                    id="component-simple"
                    value={values.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                  {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="component-simple">Email</InputLabel>
                  <Input
                    type="email"
                    id="component-simple"
                    value={values.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                  {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="component-simple">Skype</InputLabel>
                  <Input
                    id="component-simple"
                    value={values.skype}
                    name="skype"
                    onChange={handleInputChange}
                  />
                  {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="component-simple">Location</InputLabel>
                  <Input
                    id="component-simple"
                    value={values.location}
                    name="location"
                    onChange={handleInputChange}
                  />
                  {/* <FormHelperText id="component-error-text">Error</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formControl}>
                  <FormLabel component="legend">
                    Do you use milk with coffee?
                  </FormLabel>
                  <RadioGroup
                    className={classes.formRadio}
                    value={values.milk}
                    name="milk"
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <div>
                  <FormControl className={classes.formControl}>
                    <TextField
                      className={classes.time}
                      id="time"
                      label="Start of work day"
                      type="time"
                      defaultValue="09:00"
                      value={values.start}
                      name="start"
                      onChange={handleInputChange}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 60 * 15
                      }}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      className={classes.time}
                      id="time"
                      label="End of work day"
                      type="time"
                      defaultValue="18:00"
                      name="end"
                      value={values.end}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 60 * 15
                      }}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Profile;

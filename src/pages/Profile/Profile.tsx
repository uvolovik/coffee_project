import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header/Header";

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
  FormControlLabel,
  Button
} from "@material-ui/core";

import useStyles from "./Profile_scss";

const Profile = () => {
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  interface Form {
    name: string;
    email: string;
    skype: string;
    location: string;
    milk: boolean;
    start: string;
    end: string;
    [index: string]: string | boolean;
  }

  interface Input {
    id: string;
    name: string;
    label: string;
  }

  const [values, setValues] = useState<Form>({
    name: "",
    email: "",
    skype: "",
    location: "",
    milk: true,
    start: "09:00",
    end: "18:00"
  });

  const INPUTS = [
    {
      id: "profile-name",
      name: "name",
      label: "Full Name"
    },
    {
      id: "profile-email",
      name: "email",
      label: "Email"
    },
    {
      id: "profile-skype",
      name: "skype",
      label: "Skype"
    },
    {
      id: "profile-location",
      name: "location",
      label: "Location"
    }
  ];

  const TextFields = [
    {
      label: "Start of work day",
      name: "start"
    },
    {
      label: "End of work day",
      name: "end"
    }
  ];

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbarPlaceholder} />
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <form className={classes.form} noValidate autoComplete="off">
                {INPUTS.map((item: Input) => (
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                    <Input
                      id={item.id}
                      value={values[item.name]}
                      name={item.name}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                ))}
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
                  {TextFields.map(item => (
                    <FormControl className={classes.formControl}>
                      <TextField
                        className={classes.time}
                        label={item.label}
                        type="time"
                        value={values[item.name]}
                        name={item.name}
                        onChange={handleInputChange}
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{
                          step: 60 * 15
                        }}
                      />
                    </FormControl>
                  ))}
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.profileSubmitBtn}
                  aria-label="Update Info"
                >
                  Update Info
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Profile;

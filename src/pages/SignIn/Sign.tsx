import React from "react";
import {
  Avatar,
  Button,
  Input,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  FormControl,
  InputLabel
} from "@material-ui/core";

import FreeBreakfast from "@material-ui/icons/FreeBreakfast";

import useStyles from "./Sign_scss";

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FreeBreakfast />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl className={classes.input}>
            <InputLabel htmlFor="component-email">Email</InputLabel>
            <Input id="component-email" name="email" type="email" />
          </FormControl>
          <FormControl className={classes.input}>
            <InputLabel htmlFor="component-password">Password</InputLabel>
            <Input id="component-password" name="password" type="password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            aria-label="Sign In"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

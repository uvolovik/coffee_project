import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto"
  },

  form: {
    width: "100%"
  },

  container: {
    height: "100vh",
    display: "flex"
  },

  input: {
    width: "100%",
    margin: "5px 0",
  }
}));

export default useStyles;

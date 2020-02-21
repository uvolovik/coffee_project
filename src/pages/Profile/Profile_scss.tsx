import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
    toolbarPlaceholder: {
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
    },
    profileSubmitBtn :{
        width: "250px",
        display: 'block',
        margin: '40px auto 0'       
    }
  })
);

export default useStyles;
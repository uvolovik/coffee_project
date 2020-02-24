import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "100px"
    },

    toolbarPlaceholder: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(0, 0.5),
      ...theme.mixins.toolbar
    },

    mainContent: {
      width: "calc(100% - 350px)"
    },

    instruction: {
      width: "350px",
      height: "100%",
      borderLeft: "1px solid #dcdcdc"
    },

    instructionMailTitle: {
      margin: 0,
      paddingTop: "20px",
      paddingBottom: "20px",
      textAlign: "center"
    },

    instructionTitle: {
      paddingTop: "20px",
      paddingBottom: "20px",
      borderBottom: "1px solid #dcdcdc"
    },

    calendar: {
      marginTop: "24px"
    }
  })
);

export default useStyles;

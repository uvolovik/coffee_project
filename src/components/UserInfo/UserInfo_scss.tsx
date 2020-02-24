import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userInfo: {
      padding: "10px",
      paddingBottom: "20px",
      display: "flex"
    },

    userFirstBox: {
      display: "block",
      marginRight: "10px",
      marginLeft: "10px"
    },

    userSecondBox: {
      textAlign: "right",
      marginRight: "10px",
      marginLeft: "10px"
    },

    userSpan: {
      display: "block"
    }
  })
);

export default useStyles;

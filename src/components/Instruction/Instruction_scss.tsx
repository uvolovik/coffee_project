import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    }
  })
);

export default useStyles;

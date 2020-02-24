import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: { zIndex: { drawer: number } }) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  pinnedIcon: {
    transform: "rotate(-45deg)",

    "&:hover, &:focus": {
      transform: "rotate(0deg)"
    }
  },
  headerToolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },

  logoutButton: {
    textDecoration: "none"
  }
}));

export default useStyles;

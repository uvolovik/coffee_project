import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
type HeaderProps = {
  handleDrawerToggle: () => void;
  handleUnPin: () => void;
  pinned: boolean;
};

const useStyles = makeStyles((theme: { zIndex: { drawer: number; }; }) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  pinnedIcon: {
    transform: "rotate(-45deg)",

    "&:hover, &:focus": {
      transform: "rotate(0deg)"
    }
  }
}));

interface Link {
  url: string;
  description?: string;
  id?: number;
  [index: string]: any;
}

interface TranslatedLink extends Link {
  language: string;
}

function filterByTerm(input: Array<Link>, searchTerm: string, lookupKey: string = "url") {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex);
  });
}

let obj1 = { url: "string1" };

const obj2: Link = { url: "string2" };
obj1= obj2;
const obj3: Link = { url: "string3" };

const arrOfLinks = [obj1, obj2, obj3];

const term: string = "java";

filterByTerm(arrOfLinks, term, 'url');

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Hidden smUp implementation="css">
          {props.pinned ? (
            <IconButton
              edge="start"
              size="medium"
              aria-label="drawer-close"
              color="inherit"
              onClick={props.handleUnPin}
            >
              <Icon
                className={clsx("fa fa-thumb-tack", {
                  [classes.pinnedIcon]: true
                })}
              />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Hidden>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

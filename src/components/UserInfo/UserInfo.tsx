import React from "react";
import { Avatar } from "@material-ui/core";

import useStyles from "./UserInfo_scss";

const UserInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.userInfo}>
      <div className="user-avatar">
        <Avatar>U</Avatar>
      </div>
      <div className={classes.userFirstBox}>
        <span className={classes.userSpan}>User Name</span>
        <small>email@gmail.com</small>
      </div>
      <div className={classes.userSecondBox}>
        <span className={classes.userSpan}>Skype: skypelogin </span>
        <small>919-24</small>
      </div>
    </div>
  );
};

export default UserInfo;

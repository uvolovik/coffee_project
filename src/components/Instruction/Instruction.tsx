import React from "react";

import useStyles from "./Instruction_scss";

const UserInfo = () => {
  const classes = useStyles();
  const INSTRUCTIONS = [
    {
      title: "HOW TO CLEAN A FILTER COFFEE MACHINE",
      description:
        "You’ll need to clean all the removable parts after each use: often they’ll be dishwasher-proof, or you can wash them up. Wipe the hot plate with a soft damp cloth when it’s cooled down, too. You should also wipe down the outside with a soft, damp cloth. Check the instructions to find out if the machine has a cleaning cycle and what this needs – a vinegar solution followed by cycles with clean water may be recommended, for instance. Otherwise, follow the descaling process (see below) recommended in the manual to keep the inside of a filter coffee machine in good shape. "
    },
    {
      title: "HOW TO DESCALE A COFFEE MACHINE",
      description:
        "Removing the limescale from a coffee maker – in other words descaling it – is important to stop it getting blocked or leaking. More sophisticated machines might warn you when this task is due, but whether the machine has an indicator or not, it does need descaling regularly. The more you use the machine, and the harder the water where you live, the more frequently it will need descaling.If your machine were to stop working completely, or become noisy, or fail to make coffees as well as it did before, this is the first job to tackle, too."
    }
  ];

  return (
    <>
      <h1 className={classes.instructionMailTitle}>Instruction</h1>
      {INSTRUCTIONS.map(item => (
        <div className="instruction__item">
          <h3 className={classes.instructionTitle}>{item.title}</h3>
          <p className="instruction__desc">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default UserInfo;

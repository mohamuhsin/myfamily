import React from "react";
import Card from "./Card";
import classes from "./FamilyList.module.css";

const FamilyList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.familys.map((family) => (
          <li>
            {family.name} ({family.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FamilyList;

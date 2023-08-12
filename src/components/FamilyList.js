import React from "react";
import Card from "./Card";
import classes from "./FamilyList.module.css";

const FamilyList = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.users}>
        <ul>
          {props.familys.map((family) => (
            <li key={family.id}>
              {family.name} ({family.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default FamilyList;

import React from "react";
import Card from "./Card";

const FamilyList = (props) => {
  return (
    <Card>
      <ul>
        {props.familys.map((family) => (
          <li>
            {family.name} ({family.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FamilyList;

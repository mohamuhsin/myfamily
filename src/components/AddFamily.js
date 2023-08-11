import React from "react";
import Card from "./Card";
import classes from "./AddFamily.module.css";
import Button from "./Button";

const AddFamily = () => {
  const addFamilyHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form onSubmit={addFamilyHandler}>
          <label htmlFor="names">Names</label>
          <input type="text" id="names" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
          <Button type="submit">Add Family</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddFamily;

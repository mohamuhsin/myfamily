import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddFamily.module.css";
import Button from "./Button";

const AddFamily = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addFamilyHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (enteredAge < 1) {
      return;
    }

    setEnteredName("");
    setEnteredAge("");
    props.onAddFamily(enteredName, enteredAge);
  };

  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form onSubmit={addFamilyHandler}>
          <label htmlFor="names">Names</label>
          <input
            type="text"
            id="names"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add Family</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddFamily;

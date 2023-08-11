import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddFamily.module.css";
import Button from "./Button";

const AddFamily = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addFamilyHandler = (event) => {
    event.preventDefault();

    setEnteredName("");
    setEnteredAge("");
    console.log(enteredName, enteredAge);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
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

import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddFamily.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddFamily = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addFamilyHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid value for Name and Age (non-empty values)",
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please check the age should be > 0",
      });
      return;
    }

    setEnteredName("");
    setEnteredAge("");
    props.onAddFamily(enteredName, enteredAge);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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

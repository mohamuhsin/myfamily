import React, { useState, useRef } from "react";
import Card from "./Card";
import classes from "./AddFamily.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddFamily = (props) => {
  const [error, setError] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const errorHandler = () => {
    setError(null);
  };

  const addFamilyHandler = (event) => {
    event.preventDefault();
    const enteredFName = nameInputRef.current.value;
    const enteredFAge = ageInputRef.current.value;

    if (enteredFName.trim().length === 0 || enteredFAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid value for Name and Age (non-empty values)",
      });
      return;
    }

    if (enteredFAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please check the age should be > 0",
      });
      return;
    }

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    props.onAddFamily(enteredFName, enteredFAge);
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
          <input type="text" id="names" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add Family</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddFamily;

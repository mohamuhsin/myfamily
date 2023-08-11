import React from "react";

const AddFamily = () => {
  const addFamilyHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={addFamilyHandler}>
        <label htmlFor="names">Names</label>
        <input type="text" id="names" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <button type="submit">Add Family</button>
      </form>
    </React.Fragment>
  );
};

export default AddFamily;

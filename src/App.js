import React, { useState } from "react";
import AddFamily from "./components/AddFamily";
import FamilyList from "./components/FamilyList";

function App() {
  const [familyList, setFamilyList] = useState([]);

  const addFamilyHandler = (fName, fAge) => {
    setFamilyList((prevFamilyList) => {
      return [
        ...prevFamilyList,
        { name: fName, age: fAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddFamily onAddFamily={addFamilyHandler} />
      <FamilyList familys={familyList} />
    </React.Fragment>
  );
}

export default App;

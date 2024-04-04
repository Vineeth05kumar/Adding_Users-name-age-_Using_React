import AddUser from "./components/Users/AddUser";
import DisplayUser from "./components/Users/DisplayUser";
import React, { useState } from "react";

export default function App() {
  const [details, setDetails] = useState([]);

  const catchSaveDetails = (uName, uAge, uCollage) => {
    setDetails((pervUserDetails) => {
      return [
        ...pervUserDetails,
        { name: uName, age: uAge, collage:uCollage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onSaveDetails={catchSaveDetails} />
      <DisplayUser users={details} />
    </div>
  );
}

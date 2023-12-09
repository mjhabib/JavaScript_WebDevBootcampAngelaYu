import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateName(event) {
    const { value, name } = event.target; // name="fName" / "lName" / "email"

    setFullName((prevValue) => {
      // Warning: I can not define events here, instead I can define them outside and pass them here just like so.
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateName}
          value={fullName.lName}
        />
        <input
          name="email"
          placeholder="email"
          onChange={updateName}
          value={fullName.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

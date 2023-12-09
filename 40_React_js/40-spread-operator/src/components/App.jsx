import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateName(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
        return {
            // Spread Operator
            ...prevValue,
            [name]: value
            // 'name' must inclosed by '[]' otherwise it's gonna create another key called 'name'
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

// Spread Operator
var array1 = [1, 2 , 3]
// eslint-disable-next-line no-unused-vars
var array2 = ['one', 'two', 'three', ...array1] // 'one', 'two', 'three', 1, 2, 3

// The same concept is true when we're using objects too.
// If we don't insert '...' syntax, we're gonna get a nested array/object

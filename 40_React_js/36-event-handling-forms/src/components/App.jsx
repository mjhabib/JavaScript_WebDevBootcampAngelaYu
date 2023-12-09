import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");
  const [headingColor, setColor] = useState("white");
  const [headingName, setName] = useState("");
  const [inputName, setInput] = useState("");
  const [head2Name, set2Name] = useState("");

  //   function handleClick() {
  //     setHeading("Submitted");
  //   }

  //   function handleMouseOver() {
  //     setColor("gray");
  //   }

  //   function handleMouseOut() {
  //     setColor("white");
  //   }

  //   function handleChange(event) {
  // console.log(event.target.value);
  // console.log(event.target.type);
  // console.log(event.target.placeholder);
  //     setName(event.target.value)
  //   }

  return (
    <div className="container">
      <h1> {headingText + " " + headingName} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={(event) => setName(event.target.value)}
        value={headingName} // Controlled component, to tell this element about the changes that come from outside (i.e useState)
      />
      <button
        style={{ backgroundColor: headingColor }}
        onClick={() => setHeading("Thank you")}
        onMouseOver={() => setColor("gray")}
        onMouseOut={() => setColor("white")}
      >
        Submit
      </button>

      <br />
      <br />
      <h2>Your name is: {head2Name}</h2>
      <input
        type="text"
        placeholder="your name"
        value={inputName}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => set2Name(inputName)}>
        Submit your name 'onClick'
      </button>
      <br />
      <br />

      {/* This is another way to handle our submission, using "form" but since it's gonna refresh the page during "get/post" request, we can prevent its default behavior */}
      <form
        onSubmit={(event) => {
          set2Name(inputName);
          event.preventDefault();
        }}
      >
        <h2>Your name is: {head2Name}</h2>
        <input
          type="text"
          placeholder="your name"
          value={inputName}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Submit your name 'onSubmit'</button>
      </form>
    </div>
  );

  //   function handleSubmit(event) {
  //     set2Name(inputName);
  //     event.preventDefault();
  //   }
}

export default App;

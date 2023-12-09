import React, {useState} from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function addText() {
    props.allItems((prevValues) => [...prevValues, inputText]);

    setInputText("");
  }

  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addText() : null)}
      />
      <button onClick={addText}>
        <span>Add</span>
      </button>
    </div>
  );
}

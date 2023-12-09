import React from "react";

export default function TodoItem(props) {
  //   const [hasLine, setLine] = React.useState("");

  return (
    <div
    //   style={{ textDecoration: hasLine }}
    //   onClick={() => hasLine === "" ? setLine("line-through") : setLine("")}
    >
      <li onClick={() => props.delete(props.id)}>{props.text}</li>
    </div>
  );
}

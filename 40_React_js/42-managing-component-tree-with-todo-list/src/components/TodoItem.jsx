import React from "react";

export default function TodoItem(props) {
  // const [hasLine, setLine] = React.useState(false);

  // function handleClick() {
  // setLine((prevValue) => {
  //   return !prevValue;
  // });
  // }

  return (
    <div onClick={() => props.delete(props.id)}>
      {/* This way I can pass the id 'on-Click' not 'on-Render' */}

      <li
      // style={{textDecoration : hasLine ? "line-through" : null}}
      // onClick={handleClick}
      >
        {props.text}
      </li>
    </div>
  );
}

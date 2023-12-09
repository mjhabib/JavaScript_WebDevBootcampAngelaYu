import React from "react";

export default function Detail(props) {
  return (
    <div>
      <p className="info">{props.tel}</p>
      <p className="info">{props.mail}</p>
    </div>
  );
}

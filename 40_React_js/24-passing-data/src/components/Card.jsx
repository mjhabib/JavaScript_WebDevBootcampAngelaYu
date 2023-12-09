import React from "react";
import Avatar from './Avatar'
import Detail from './Detail'

export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail tel={props.tel} mail={props.mail}/>
      </div>
    </div>
  );
}

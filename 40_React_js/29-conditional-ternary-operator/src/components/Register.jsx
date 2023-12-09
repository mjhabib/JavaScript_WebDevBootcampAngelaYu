import React from "react";
import Input from "./Input";

export default function Register() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password" />
      <button type="submit">Register</button>
    </form>
  );
}

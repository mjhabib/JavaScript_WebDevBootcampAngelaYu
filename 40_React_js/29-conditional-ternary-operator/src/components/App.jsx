import React from "react";
import Login from "./Login";
import Register from "./Register";

var isRegistered = false;


// Old way
// var isLoggedIn = false;
// function loginCondition() {
//     if (isLoggedIn){
//        return <h1>Hello</h1>
//     } else {
//         return <Login />
//     }
// }

export default function App() {
  return (
    <div className="container">
      {/* Old way */}
      {/* {loginCondition()} */}

      {/* New way, also known as "the ternary operator". since we can't use statements (actions) like "if" here, we need to turn it into an expression.  */}
      {isRegistered ? <Login /> : <Register />}
      {/* condition ? exprIfTrue : exprIfFalse */}
      {/* also last expression can be set to "null" if I wish */}

      {/* Another syntax: CONDITION && EXPRESSION */}
      {/* Meaning if only the condition is true, run the expression */}
      {/* EX: {isLoggedIn && <h1>Hello</h1>} */}

    </div>
  );
}

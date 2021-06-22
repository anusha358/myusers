import React from "react";
import "./userinput.css";

const userInput = (props) => {
  return (
    <div className="user-input">
      Please Enter your name:{" "}
      <input
        id="input-field"
        value={props.value}
        onChange={props.change}
      ></input>
    </div>
  );
};

export default userInput;

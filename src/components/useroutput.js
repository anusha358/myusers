import React from "react";
import "./userinput.css";

const userOutput = (props) => {
  return (
    <div className="user-input">
      <p id="p1"> hi {props.name}</p>
      <p id="p2">
        your name means Sed porttitor lectus nibh. Curabitur non nulla sit amet
      </p>
    </div>
  );
};

export default userOutput;

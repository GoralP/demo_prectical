import React, { useState } from "react";

const ReverseString = () => {
  const [reverseString, setReverseString] = useState("");
  const [print, setPrint] = useState("");
  let value = "";

  const hendleChange = (e) => {
    value = e.target.value;
    console.log(value);
    let valueBackwards = value.split("").reverse().join("");
    setReverseString(valueBackwards);
  };

  const printPyramid = (n = 10) => {
    let printLine = "";
    console.log(printLine);
    for (let i = 0; i < n; i++) {
      printLine = "";
      const space = Math.floor((n - (i + 1)) / 2);
      for (let s = 0; s < space; s++) {
        printLine += " ";
        console.log(printLine);
      }
      for (let j = 0; j < i + 1; j++) {
        printLine += "1";
      }
      console.log(printLine);
      setPrint(printLine);
    }
  };

  return (
    <div className="App">
      <form className="mainString">
        <label> Your string..</label>
        <input className="input" onChange={hendleChange} />
        <input className="input" onChange={hendleChange} />
      </form>
      <div className="reverse">
        <p className="reservedString"> Your reversed string.. </p>
        <p>{reverseString}</p>
      </div>

      <button onClick={() => printPyramid()}>clickMe</button>
    </div>
  );
};

export default ReverseString;

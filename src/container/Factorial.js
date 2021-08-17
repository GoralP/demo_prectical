import React, { useState, useMemo } from "react";

const Factoriall = () => {
  const [number, SetNumber] = useState(1);

  const factorial = useMemo(() => Factorial(number), [number]);

  const AsignarNumero = (e) => {
    // console.log(e.target.value);
    SetNumber(Number(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={AsignarNumero} />
      {factorial}
    </div>
  );
};

function Factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    console.log(factorial);
  }
  return factorial;
}

export default Factoriall;

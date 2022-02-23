import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const text = isOn ? "ON" : "OFF";
  const color = isOn ? "red" : "white";

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button onClick={handleClick} style={{ background: color }}>
      {text}
    </button>
  );
}

export default Toggle;

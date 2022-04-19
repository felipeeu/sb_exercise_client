import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};
export { Input };

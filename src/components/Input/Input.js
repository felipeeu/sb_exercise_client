import React from "react";
import { inputValueState } from "../../state/atoms";
import { useRecoilState } from "recoil";
import "./Input.css";

const Input = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState);

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

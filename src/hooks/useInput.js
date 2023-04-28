import { useState } from "react";

const useInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const inputTouched = () => {
    setIsTouched(true);
  };

  const resetValues = () => {
    setInputValue("");
    setIsTouched(false);
  };

  const inputIsValid = validate(inputValue);
  const inputIsInvalid = isTouched && !inputIsValid;

  return {
    inputValue,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    inputTouched,
    resetValues,
  };
};

export default useInput;

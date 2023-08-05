// for using this custom hook use this sample
// const [value, toggleValue] = useToggle(false)
// use direct toggleValue for change value by clicking => true become false or false become true
// use toggleValue in fuction and set value by yourself => () => toggleValue(true || false)

import { useState } from "react";

const useToggle = (defaulValue) => {
  const [value, setValue] = useState(defaulValue);
  const toggleValue = (value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, toggleValue];
};

export default useToggle;

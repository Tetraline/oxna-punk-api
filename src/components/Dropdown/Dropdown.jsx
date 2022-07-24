import { useState } from "react";
import "./Dropdown.scss";
const Dropdown = ({ description, options, handleSelection, multiple }) => {
  const [showOptions, setShowOptions] = useState("false");
  const handleTogglePress = () => setShowOptions(!showOptions);
  const handleOptionPress = (event) => {
    if (!multiple) {
      document.querySelectorAll("button").forEach((element) => {
        element.classList.remove("active");
      });
    }
    event.target.classList.toggle("active");
  };

  //  const stateArray = [];
  //  options.forEach((option) => {
  //    stateArray.push(useState("false"));
  //  });

  const optionsJSX = options.map((element, index) => (
    <button key={index} onClick={handleOptionPress}>
      {element}
    </button>
  ));

  return (
    <>
      <button onClick={handleTogglePress}>{description}</button>
      {showOptions && optionsJSX}
    </>
  );
};

export default Dropdown;

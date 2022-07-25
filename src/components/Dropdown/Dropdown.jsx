import { useState } from "react";
import "./Dropdown.scss";
const Dropdown = ({ description, options, handleSelection, multiple }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleTogglePress = () => setShowOptions(!showOptions);
  const handleOptionPress = (event) => {
    const filterKey = event.target.getAttribute("filterkey");
    const filterValue = event.target.getAttribute("filtervalue");
    handleSelection.handleSelection([filterKey, filterValue]);
    if (event.target.classList.value === "active") {
      event.target.classList.remove("active");
      return;
    }

    if (!multiple) {
      document.querySelectorAll("button").forEach((element) => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  };

  //  const stateArray = [];
  //  options.forEach((option) => {
  //    stateArray.push(useState("false"));
  //  });

  const optionsJSX = options.map(([description, key, value]) => (
    <button
      className="dropdown__child"
      key={value}
      filterkey={key}
      filtervalue={value}
      onClick={handleOptionPress}
    >
      {description}
    </button>
  ));

  return (
    <div className="dropdown">
      <br />
      <button className="dropdown__parent" onClick={handleTogglePress}>
        {description}
      </button>
      {showOptions && optionsJSX}
    </div>
  );
};

export default Dropdown;

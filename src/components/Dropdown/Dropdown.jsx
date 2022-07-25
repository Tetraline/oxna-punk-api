import { useState } from "react";
import "./Dropdown.scss";
const Dropdown = ({
  description,
  options,
  handleSelection,
  selectedOption,
  multiple,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleTogglePress = () => setShowOptions(!showOptions);
  const handleOptionPress = (event) => {
    const filterKey = event.target.getAttribute("filterkey");
    const filterValue = event.target.getAttribute("filtervalue");
    handleSelection([filterKey, filterValue]);

    //if (event.target.classList.value === "active") {
    //  event.target.classList.remove("active");
    //  return;
    //}

    //if (!multiple) {
    //  document.querySelectorAll("button").forEach((element) => {
    //    if (
    //      element.getAttribute("filterkey") ===
    //      event.target.getAttribute("filterKey")
    //    ) {
    //      element.classList.remove("active");
    //    }
    //  });
    //  event.target.classList.add("active");
    //}
  };

  const optionsJSX = options.map(([description, key, value]) => {
    let buttonClass = "dropdown__child";
    if (selectedOption === value) {
      buttonClass += " active";
    }
    return (
      <button
        className={buttonClass}
        key={value}
        filterkey={key}
        filtervalue={value}
        onClick={handleOptionPress}
      >
        {description}
      </button>
    );
  });

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

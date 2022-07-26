import "./FilterMenu.scss";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import cross from "../../assets/images/cross.png";
import generateFilterString from "./generateFilterString.jsx";

const FilterMenu = ({ handleSelection, selectedOptions }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleTogglePress = () => setShowMenu(!showMenu);
  const filtersJSX = generateFilterString(selectedOptions);
  return (
    <>
      <button onClick={handleTogglePress}>Filter</button>
      {showMenu && (
        <div className="filter-dropdowns">
          <img
            onClick={handleTogglePress}
            className="filter-dropdowns__cross"
            src={cross}
            alt="Exit"
          />
          <Dropdown
            description="What alcohol content?"
            options={[
              ["High (>6%)", "abv", "high"],
              ["Low (<6%)", "abv", "low"],
              ["Zero", "abv", "zero"],
            ]}
            handleSelection={handleSelection}
            selectedOption={selectedOptions.abv}
          />
          <Dropdown
            description="From which range?"
            options={[
              ["Classic (Before 2010)", "year", "b2010"],
              ["New (After 2010)", "year", "a2010"],
            ]}
            handleSelection={handleSelection}
            selectedOption={selectedOptions.year}
          />
          <Dropdown
            description="How Acidic?"
            options={[
              ["Acidic (ph<4)", "ph", "low"],
              ["Non-Acidic (ph>4)", "ph", "high"],
            ]}
            handleSelection={handleSelection}
            selectedOption={selectedOptions.ph}
          />
        </div>
      )}
      <p className="filter-menu__verbose-filters">{filtersJSX}</p>
    </>
  );
};

export default FilterMenu;

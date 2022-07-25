import "./FilterMenu.scss";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const FilterMenu = (handleSelection) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleTogglePress = () => setShowMenu(!showMenu);

  return (
    <>
      <button onClick={handleTogglePress}>Filter</button>
      {showMenu && (
        <>
          <Dropdown
            description="What alcohol content?"
            options={[
              ["High (>6%)", "abv", "high"],
              ["Low (<6%)", "abv", "low"],
              ["Zero", "abv", "zero"],
            ]}
            handleSelection={handleSelection}
            exclusive={true}
          />
          <Dropdown
            description="From which range?"
            options={[
              ["Classic (Before 2010)", "year", "b2010"],
              ["New (After 2010)", "year", "a2010"],
            ]}
            handleSelection={handleSelection}
            exclusive={true}
          />
          <Dropdown
            description="How Acidic?"
            options={[
              ["Acidic (ph<7)", "ph", "low"],
              ["Non-Acidic (ph>7)", "ph", "high"],
            ]}
            handleSelection={handleSelection}
            exclusive={true}
          />
        </>
      )}
    </>
  );
};

export default FilterMenu;

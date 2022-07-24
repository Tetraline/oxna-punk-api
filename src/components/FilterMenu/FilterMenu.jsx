import "./FilterMenu.scss";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const FilterMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleTogglePress = () => setShowMenu(!showMenu);

  return (
    <>
      <button onClick={handleTogglePress}>Filter</button>
      {showMenu && (
        <Dropdown
          description="What alcohol content?"
          options={["Low", "High"]}
          handleSelection={console.log("ok")}
          exclusive={true}
        />
      )}
    </>
  );
};

export default FilterMenu;

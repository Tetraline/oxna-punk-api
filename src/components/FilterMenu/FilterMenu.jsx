import "./FilterMenu.scss";
import { useState } from "react";

const FilterMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleTogglePress = () => setShowMenu(!showMenu);

  return (
    <>
      <button onClick={handleTogglePress}>Filter</button>
      {showMenu && (
        <select name="abv">
          <option value="Any">Any</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      )}
    </>
  );
};

export default FilterMenu;

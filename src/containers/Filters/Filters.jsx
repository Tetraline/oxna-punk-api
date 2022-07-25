import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { useState } from "react";

const Filters = ({ data, setCardsToRender }) => {
  const [abv, setAbv] = useState("all");
  const [year, setYear] = useState("all");
  const [ph, setPh] = useState("all");
  const searchByName = (event) => {
    const searchString = event.target.value.toUpperCase();
    setCardsToRender(
      data.filter((element) =>
        element.name.toUpperCase().includes(searchString)
      )
    );
  };

  const handleSelection = ([key, value]) => {
    switch (key) {
      case "abv":
        setAbv(value);
        break;

      case "year":
        setYear(value);
        break;

      case "ph":
        setPh(value);
        break;
      default:
        console.error("Unknown Filter Value");
        break;
    }
  };

  return (
    <section className="filters">
      <SearchBox placeholderText="search by name" handleInput={searchByName} />
      <br />
      <FilterMenu handleSelection={handleSelection} />
      <br />
      <h2>
        {abv} {year} {ph}
      </h2>
    </section>
  );
};

export default Filters;

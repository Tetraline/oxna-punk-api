import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { useState } from "react";

const Filters = ({ data, setCardsToRender }) => {
  const [abv, setAbv] = useState("all");
  const [year, setYear] = useState("all");
  const [ph, setPh] = useState("all");
  const [searchString, setSearchString] = useState("");

  const filter = () => {
    console.log("filtering now!");
    console.log(`${abv} ${year} ${ph} ${searchString}`);
    let filteredData = [...data];
    if (searchString) {
      filteredData = filteredData.filter((element) =>
        element.name.toUpperCase().includes(searchString.toUpperCase())
      );
    }
    switch (abv) {
      case "high":
        filteredData = filteredData.filter((element) => element.abv > 6);
        break;

      case "low":
        filteredData = filteredData.filter(
          (element) => element.abv <= 6 && element.abv > 1
        );
        break;

      case "zero":
        filteredData = filteredData.filter((element) => element.abv <= 1);
        break;

      default:
        break;
    }

    switch (year) {
      case "b2010":
        filteredData = filteredData.filter(
          (element) => element.first_brewed.split("/")[1] < 2010
        );
        break;

      case "a2010":
        filteredData = filteredData.filter(
          (element) => element.first_brewed.split("/")[1] >= 2010
        );
        break;

      default:
        break;
    }

    switch (ph) {
      case "low":
        filteredData = filteredData.filter((element) => element.ph < 4);
        break;

      case "high":
        filteredData = filteredData.filter((element) => element.ph >= 4);
        break;

      default:
        break;
    }
    setCardsToRender(filteredData);
  };

  const handleSearchInput = (event) => {
    setSearchString(event.target.value);
    filter();
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
    filter();
  };

  return (
    <section className="filters">
      <SearchBox
        placeholderText="search by name"
        handleInput={handleSearchInput}
      />
      <br />
      <FilterMenu handleSelection={handleSelection} />
      <br />
      <h2>
        {abv} {year} {ph} {searchString}
      </h2>
    </section>
  );
};

export default Filters;

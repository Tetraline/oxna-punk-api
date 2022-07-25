import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { useState, useEffect, useCallback } from "react";

const Filters = ({ data, setCardsToRender }) => {
  const [abv, setAbv] = useState("all");
  const [year, setYear] = useState("all");
  const [ph, setPh] = useState("all");
  const [searchString, setSearchString] = useState("");

  const filter = useCallback(() => {
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
  }, [data, abv, year, ph, searchString, setCardsToRender]);

  useEffect(() => filter(), [abv, year, ph, searchString, filter]);
  const handleSearchInput = (event) => {
    setSearchString(event.target.value);
  };

  const handleSelection = ([key, value]) => {
    switch (key) {
      case "abv":
        abv === value ? setAbv("all") : setAbv(value);
        break;

      case "year":
        year === value ? setYear("all") : setYear(value);
        break;

      case "ph":
        ph === value ? setPh("all") : setPh(value);
        break;
      default:
        console.error("Unknown Filter Value");
        break;
    }
  };

  return (
    <section className="filters">
      <SearchBox
        placeholderText="search by name"
        handleInput={handleSearchInput}
      />
      <br />
      <FilterMenu
        handleSelection={handleSelection}
        selectedOptions={{ abv: abv, year: year, ph: ph }}
      />
    </section>
  );
};

export default Filters;

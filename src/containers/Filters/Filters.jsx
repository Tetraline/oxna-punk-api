import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { useState, useEffect } from "react";

const Filters = ({ setCardsToRender }) => {
  const [abv, setAbv] = useState("all");
  const [year, setYear] = useState("all");
  const [ph, setPh] = useState("all");
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const [numResults, setNumResults] = useState(0);

  const getData = async (p) => {
    const params = Object.entries(p)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `https://api.punkapi.com/v2/beers?${params}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  const filter = async (
    abv,
    year,
    ph,
    searchString,
    page,
    setCardsToRender,
    getData,
    setNumResults
  ) => {
    const p = {}; // p object stores api parameters
    if (searchString) {
      p.beer_name = searchString;
    }
    switch (abv) {
      case "high":
        p.abv_gt = 6;
        break;
      case "low":
        p.abv_gt = 1;
        p.abv_lt = 6.01;
        break;
      case "zero":
        p.abv_lt = 1.01;
        break;
      default:
        break;
    }
    switch (year) {
      case "b2010":
        p.brewed_before = "02-2010";
        break;
      case "a2010":
        p.brewed_after = "01-2010";
        break;
      default:
        break;
    }
    p.per_page = 80;
    let data = [];
    if (ph === "all") {
      p.page = page;
      data = await getData(p);
    } else {
      p.page = 1;
      let response = await getData(p);
      data = [];
      while (response.length > 0) {
        data = data.concat(response);
        p.page += 1;
        response = await getData(p);
      }
      console.log(data.length);
      switch (ph) {
        case "low":
          data = data.filter((element) => element.ph < 4);
          break;
        case "high":
          data = data.filter((element) => element.ph >= 4);
          break;
        default:
          break;
      }
    }

    setNumResults(data.length);
    setCardsToRender(data);
  };

  useEffect(() => {
    filter(
      abv,
      year,
      ph,
      searchString,
      page,
      setCardsToRender,
      getData,
      setNumResults
    );
  }, [abv, year, ph, searchString, page, setCardsToRender]);

  const handleSearchInput = (event) => {
    setSearchString(event.target.value);
    setPage(1);
  };

  const handleSelection = ([key, value]) => {
    setPage(1);
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
      {numResults === 80 ? (
        <p>Many results. 80 shown. Page {page}.</p>
      ) : (
        <p>{`${numResults} results`}</p>
      )}

      {page === 1 ? (
        <button disabled>Prev Page</button>
      ) : (
        <button onClick={() => setPage(page - 1)}>Prev Page</button>
      )}

      {numResults === 80 ? (
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      ) : (
        <button disabled>Next Page</button>
      )}
    </section>
  );
};

export default Filters;

import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

const Filters = ({ data }) => {
  // This will probably eventually have a function prop that renders the cards
  console.log(data);
  const searchByName = (event) => {
    const searchString = event.target.value;
    return data.filter((element) => element.name.includes(searchString));
  };
  console.log(searchByName("Buzz"));

  return (
    <section className="filters">
      <SearchBox placeholderText="search by name" handleInput={searchByName} />
      <FilterMenu />
    </section>
  );
};

export default Filters;

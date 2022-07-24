import "./Filters.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

const Filters = ({ data, setCardsToRender }) => {
  const searchByName = (event) => {
    const searchString = event.target.value.toUpperCase();
    setCardsToRender(
      data.filter((element) =>
        element.name.toUpperCase().includes(searchString)
      )
    );
  };

  return (
    <section className="filters">
      <SearchBox placeholderText="search by name" handleInput={searchByName} />
      <FilterMenu />
    </section>
  );
};

export default Filters;

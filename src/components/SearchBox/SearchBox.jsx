import "./SearchBox.scss";
const SearchBox = ({ placeholderText, handleInput }) => {
  return (
    <input
      className="search-box"
      type="text"
      placeholder={placeholderText}
      onInput={handleInput}
    />
  );
};

export default SearchBox;

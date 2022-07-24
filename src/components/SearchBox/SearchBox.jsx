const SearchBox = ({ placeholderText, handleInput }) => {
  return (
    <input type="text" placeholder={placeholderText} onInput={handleInput} />
  );
};

export default SearchBox;

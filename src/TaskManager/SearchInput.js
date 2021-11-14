import "../Sass/styles.css";

const SearchInput = () => {
  return (
    <form className="form">
      <label htmlFor="search" className="form__label form__searchLabel">
        <input
          type=" text"
          id="search"
          name="search"
          placeholder="search..."
          className="form__searchInput"
        />
      </label>
    </form>
  );
};

export default SearchInput;

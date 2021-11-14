import "../Sass/styles.css";

const SearchInput = ({ tasksArray, searchTerm, setSearchTerm, searchTask }) => {
  return (
    <form className="form">
      <label htmlFor="search" className="form__label form__searchLabel">
        <input
          type=" text"
          id="search"
          name="search"
          placeholder="search..."
          className="form__searchInput"
          value={searchTerm}
          onChange={searchTask}
        />
      </label>
    </form>
  );
};

export default SearchInput;

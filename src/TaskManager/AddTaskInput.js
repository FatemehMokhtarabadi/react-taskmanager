import "../Sass/styles.css";

const AddTask = () => {
  return (
    <form className="form">
      <label htmlFor="task" className="form__label">
        <input
          type=" text"
          id="task"
          name="task"
          placeholder="new task..."
          className="form__input"
        />
      </label>
      <button type="submit" className="form__btn" id="addBtn">
        Add
      </button>
    </form>
  );
};

export default AddTask;

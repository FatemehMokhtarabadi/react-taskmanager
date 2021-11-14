import "../Sass/styles.css";

const AddTask = ({ newTask, setNewTask, addNewTask }) => {
  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <form className="form" onSubmit={addNewTask}>
      <label htmlFor="task" className="form__label">
        <input
          type=" text"
          id="task"
          name="task"
          placeholder="new task..."
          className="form__input"
          value={newTask}
          onChange={handleInput}
        />
      </label>
      <button type="submit" className="form__btn" id="addBtn">
        Add
      </button>
    </form>
  );
};

export default AddTask;

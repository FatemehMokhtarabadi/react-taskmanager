import React from "react";
import trash from "../Assets/trash.svg";
import "../Sass/styles.css";

const TaskItem = ({
  title,
  taskStatus,
  startTask,
  completeTask,
  deleteTask,
  taskId,
}) => {
  return (
    <div className="cards__card">
      <p className="cards__title">
        {" "}
        {taskStatus} ⏳ {title}{" "}
      </p>
      <div className="cards__buttons">
        <button
          className="cards__btn start-btn"
          onClick={() => startTask(taskId)}
        >
          start
        </button>
        <button
          className="cards__btn finish-btn"
          onClick={() => completeTask(taskId)}
        >
          done
        </button>
        <button
          className="cards__btn delete"
          onClick={() => deleteTask(taskId)}
        >
          <img className="icon-btn cards__icon" src={trash} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

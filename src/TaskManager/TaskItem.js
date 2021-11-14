import React from "react";
import trash from "../Assets/trash.svg";
import "../Sass/styles.css";

const TaskItem = ({ title }) => {
  return (
    <div className="cards__card">
      <p className="cards__title">{title}</p>
      <div className="cards__buttons">
        <button className="cards__btn start-btn">start</button>
        <button className="cards__btn finish-btn">done</button>
        <button className="cards__btn delete">
          <img className="icon-btn cards__icon" src={trash} alt="" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

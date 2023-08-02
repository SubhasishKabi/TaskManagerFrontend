import React from "react";
import { useDispatch } from "react-redux";
import { taskComplete, editTask, removeTask } from "../redux/actions/actions";
import { useState } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditin] = useState(false);
  const [text, setText] = useState(task.data);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditin((prev) => !prev);
    dispatch(editTask(task._id, text));
  };
  return (
    <li
      className="task"
      onClick={() => dispatch(taskComplete(task._id))}
      style={{
        textDecoration: task.done ? "line-through" : "",
        color: task.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{task.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-task"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span className="icon" onClick={() => dispatch(removeTask(task._id))}>
        <i className="fas fa-trash" />
      </span>
      <span className="icon" onClick={() => setEditin((prev) => !prev)}>
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Task;

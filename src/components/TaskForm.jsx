import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTask } from "../redux/actions/actions";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new task..."
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TaskForm;

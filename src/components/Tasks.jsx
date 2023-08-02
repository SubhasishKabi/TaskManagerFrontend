import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTasks, removeTask } from "../redux/actions/actions";
import Task from "./Task";
import Tabs from "./Tabs";

import { ALL_TASKS, DONE_TASKS, ACTIVE_TASKS } from "../redux/actions/type";

const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const tasks = useSelector((state) => state.tasks.tasks);
  // console.log(tasks);
  const currentTab = useSelector((state) => state.currentTab.currentTab);
  // console.log(currentTab)
  // console.log(tasks);

  const getTasksConditional = () => {
    if (currentTab === ALL_TASKS) {
      return tasks;
    } else if (currentTab === ACTIVE_TASKS) {
      return tasks.filter((task) => !task.done);
    } else if (currentTab === DONE_TASKS) {
      return tasks.filter((task) => task.done);
    }
  };

  const removeDoneTasks = () => {
    tasks.forEach(({ done, _id }) => {
      if (done) {
        dispatch(removeTask(_id));
      }
    });
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />

        {tasks.some((todo) => todo.done) ? (
          <button onClick={removeDoneTasks} className="button clear">
            Remove Done TASKS
          </button>
        ) : null}
      </div>
      <ul>
        {getTasksConditional().map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </ul>
    </article>
  );
};

export default Tasks;

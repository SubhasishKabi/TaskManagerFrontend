import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    getAllTasks: (state, action) => {
      // return action.payload;
      state.tasks = action.payload;
    },
    toggleTask: (state, action) => {
      // console.log(action.payload)
      state.tasks = state.tasks.map((task) =>
        task._id === action.payload._id ? { ...task, done: !task.done } : task
      );
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task._id === action.payload._id
          ? { ...task, data: action.payload.data }
          : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task._id !== action.payload._id
      );
    },
  },
});

export const { addNewTask, getAllTasks, toggleTask, updateTask, deleteTask } =
  taskSlice.actions;

export default taskSlice;

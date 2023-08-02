import axios from "axios";
import {
  addNewTask,
  getAllTasks,
  toggleTask,
  updateTask,
  deleteTask,
} from "../taskSlice";
import { toggleTab } from "../tabSlice";

const API_URL = "http://localhost:8000";

export const addTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/tasks`, { data });
    dispatch(addNewTask(res.data));
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks`);
    // console.log(res.data)
    dispatch(getAllTasks(res.data));
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const taskComplete = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/tasks/${id}`);
    // console.log(res.data)
    // dispatch({ type: TOGGLE_TODO , payload: res.data });
    dispatch(toggleTask(res.data));
  } catch (error) {
    console.log(error);
    // console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const editTask = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/tasks/${id}`, { data });

    dispatch(updateTask(res.data));
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/tasks/${id}`);

    dispatch(deleteTask(res.data));
  } catch (error) {
    console.log("Error while calling deleteTodo API ", error.message);
  }
};

export const changeTab = (tab) => async (dispatch) => {
  dispatch(toggleTab(tab));
};

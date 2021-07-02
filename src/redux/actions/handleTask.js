import * as types from "../actionTypes/handleTask";

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: { task },
});

export const viewTask = () => ({
  type: types.VIEW_TASK,
});

export const deleteTask = (i) => ({
  type: types.DELETE_TASK,
  payload: { i },
});

export const modifyTask = (i) => ({
  type: types.MODIFY_TASK,
  payload: { i },
});

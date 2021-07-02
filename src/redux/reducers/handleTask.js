import initialState from "../store/initialState";
import * as types from "../actionTypes/handleTask";

const handleTask = (state = initialState.handleTask, { type, payload }) => {
  switch (type) {
    case types.ADD_TASK:
      state.tasks.unshift(payload.task);
      return { ...state };
    case types.VIEW_TASK:
      return state;
    case types.MODIFY_TASK:
      const temp = state.tasks[payload.i].completed;
      state.tasks[payload.i].completed = !temp;
      return { ...state };
    case types.DELETE_TASK:
      state.tasks.splice(payload.i, 1);
      return { ...state };
    default:
      return state;
  }
};

export default handleTask;

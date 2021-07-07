import { useState } from "react";
import { useDispatch } from "react-redux";
import "./index.scss";
import TextField from "../TextField/";
import { Button, Icon } from "semantic-ui-react";
import { addTask } from "../../redux/actions/handleTask";

const AddTask = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState(1);

  const handleTaskChange = ({ target: { value } }: any) => {
    setNewTask(value);
  };

  const selectedPriority = ({ target: { value } }: any) => {
    setPriority(Number(value));
  };

  const priorities = [
    {
      text: "Priority #1",
      value: 1,
    },
    {
      text: "Priority  #2",
      value: 2,
    },
    {
      text: "Priority  #3",
      value: 3,
    },
  ];

  const addTaskToList = () => {
    if (newTask === null || newTask === undefined || newTask.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    dispatch(
      addTask({
        task: newTask,
        dateAdded: new Date().toUTCString(),
        completed: false,
        priority,
      })
    );
  };

  const showErrorMessage = () => {
    if (error) {
      return (
        <div className="add_task_input_container__error_container">
          <Icon
            name="warning"
            size="large"
            className="add_task_input_container__error_container__icon"
          />
          <p>You can't add empty goals to the list.</p>
        </div>
      );
    }
  };

  return (
    <div className="add_task_input_container">
      {showErrorMessage()}
      <div className="add_task_input_container__input_container">
        <span className="add_task_input_container__input_container__add_task_field">
          <TextField
            type="text"
            labelText="Enter a new task."
            name="task"
            formId="addTaskFieldInput"
            onChange={handleTaskChange}
            value={newTask}
          />
        </span>
        <select
          className="add_task_input_container__input_container__priorities"
          onChange={selectedPriority}
        >
          {priorities.map((m) => (
            <option key={m.value} value={m.value}>
              {m.text}
            </option>
          ))}
        </select>
        <Button
          className="add_task_input_container__input_container__add_task_button"
          color="green"
          onClick={() => addTaskToList()}
        >
          + ADD
        </Button>
      </div>
    </div>
  );
};

export default AddTask;

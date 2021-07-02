import { InitialState } from "../../redux/store/initialState";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Icon } from "semantic-ui-react";
import { deleteTask, modifyTask } from "../../redux/actions/handleTask";
import grey from "../assets/grey.svg";
import red from "../assets/red.svg";
import blue from "../assets/blue.svg";
import green from "../assets/green.svg";

const ViewTask = () => {
  const dispatch = useDispatch();

  const taskState = useSelector((state: InitialState) => state.handleTask);

  // useEffect(() => {
  //   dispatch(viewTask());
  // }, []);

  const crossTask = (i: number) => {
    dispatch(modifyTask(i));
  };

  const removeTask = (i: number) => {
    dispatch(deleteTask(i));
  };

  const status = (value: boolean, type: number) => {
    // 1 for task
    // 2 for task time elapsed
    // 3 for icon
    if (value && type === 1) return "cross";
    else if (value && type === 2) return "time-elapsed-blur";
    else if (value && type === 3) return "icon-blur";
  };

  const setColor = (priority: number, completed: boolean) => {
    if (completed) return grey;
    else {
      if (priority === 1) return red;
      else if (priority === 2) return blue;
      else if (priority === 3) return green;
    }
  };

  // const getMinutesElapsed = (t: string): string => {
  //   let timeAdded: Date = new Date(t);
  //   let currentTime: Date = new Date();
  //   let secondsElapsed: any = Number(currentTime) - Number(timeAdded);
  //   let minutes = 0;
  //   if (secondsElapsed < 60) {
  //     return "less than a minute ago";
  //   }
  //   while (secondsElapsed - 60) {
  //     minutes++;
  //   }
  //   return `${minutes} ago`;
  // };

  const showTasks = () => {
    if (taskState.tasks.length === 0) {
      return <p>No tasks to show</p>;
    }
    return taskState.tasks.map((t: any, i: number) => (
      <div
        className="view_container__view_task_container__task_container"
        onClick={() => crossTask(i)}
        key={i}
      >
        <img
          className="view_container__view_task_container__task_priority"
          alt="priority icon"
          src={setColor(t.priority, t.completed)}
        />
        <div className="view_container__view_task_container__task_details_container">
          <p
            className={`view_container__view_task_container__task_details_container__task ${status(
              t.completed,
              1
            )}`}
          >
            {t.task}
          </p>
          <p
            className={`view_container__view_task_container__task_details_container__time-elapsed ${status(
              t.completed,
              2
            )}`}
          >
            {t.dateAdded}
          </p>
        </div>
        <span onClick={() => removeTask(i)}>
          <Icon
            name="close"
            size="large"
            className={`view_container__view_task_container__icon ${status(
              t.completed,
              3
            )}`}
          />
        </span>
      </div>
    ));
  };

  return (
    <div className="view_container">
      <div className="view_container__view_task_container">{showTasks()}</div>
      <p className="view_container_bottom_info__total_tasks">
        Total Tasks : <span>{taskState.tasks.length}</span>
      </p>
    </div>
  );
};

export default ViewTask;

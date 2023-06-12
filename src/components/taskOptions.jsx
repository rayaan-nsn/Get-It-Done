import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TaskOptions({ index, task, tasksList, setTasksList }) {
  const handleDelete = (index) => {
    const newTasks = [...tasksList];
    newTasks.splice(index, 1);
    setTasksList(newTasks);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasksList(updatedTasks);
  };

  const getStatusText = (status) => {
    return status ? "Completed" : "Incomplete";
  };

  return (
    <li
      key={index}
      className="d-flex align-items-center w-100 p-2"
      style={{ border: "1px solid black", margin: "10px auto" }}
    >
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => toggleTaskStatus(index)}
        className="form-check-input"
        style={{ height: "25px", width: "25px" }}
      />
      <div className="ms-3">
        <h5 className="m-0">{task.task}</h5>
        <p className="m-0">{task.note}</p>
      </div>
      <p className="m-0">{getStatusText(task.status)}</p>
      <button onClick={() => handleDelete(index)} className="btn btn-danger ms-auto">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
}

TaskOptions.propTypes = {
  index: PropTypes.number,
  task: PropTypes.object,
  tasksList: PropTypes.array,
  setTasksList: PropTypes.func,
};

export default TaskOptions;
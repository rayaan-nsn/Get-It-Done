import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { format } from "date-fns";

function TaskOptions({ index, task, tasksList, setTasksList }) {
    const handleImportantChange = () => {
        const newTasks = [...tasksList];
        newTasks[index].important = !newTasks[index].important;
        setTasksList(newTasks);
    };

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

    const formattedDate = task.date
        ? format(task.date, "dd/MM/yyyy")
        : "No Date";


    return (
        <li
            key={index}
            className="d-flex align-items-center w-100 p-2 justify-content-between"
            style={{ border: "1px solid black", margin: "10px auto" }}
        >
            <div className="ms-3">
                <h4 className="m-0">{task.task}</h4>
                <h6 className="m-0">{task.note}</h6>
                <p className={"m-0 pt-3"}>
                    <FontAwesomeIcon icon={faCalendarAlt} /> <span>{formattedDate}</span>
                </p>
            </div>

            <div className={"d-flex align-items-center"}>
                <button
                    onClick={() => toggleTaskStatus(index)}
                    className={"bg-transparent border-0"}
                >
                    {tasksList[index].status ? (
                        <span className={"bg-success border-0 rounded-5 p-2 ps-3 pe-3"}>
              Completed
            </span>
                    ) : (
                        <span className={"bg-warning border-0 rounded-5 p-2 ps-3 pe-3"}>
              Incomplete
            </span>
                    )}
                </button>

                <button
                    onClick={handleImportantChange}
                    className={"border-0 bg-transparent m-2 fs-3"}
                >
                    {tasksList[index].important ? (
                        <span className={"text-danger"}>&#9733;</span>
                    ) : (
                        <span>&#9734;</span>
                    )}
                </button>
                <button
                    onClick={() => handleDelete(index)}
                    className="btn ms-auto text-black-50 fs-5"
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
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

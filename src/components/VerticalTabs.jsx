import { useEffect, useState } from 'react';
import TaskOptions from "./taskOptions.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";
import { FaGithub } from "react-icons/fa";

const VerticalTabs = ({ tasksList, setTasksList }) => {
    const [activeTab, setActiveTab] = useState('All Tasks');
    const currentDate = new Date();

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDeleteAll = () => {
        setTasksList([]);
    }

    useEffect(() => {
        // Set the default tab as active when the component mounts
        setActiveTab('All Tasks');
    }, []);

    return (
        <div className="d-flex" style={{ height: "100dvh" }}>
            <div className="nav flex-column nav-pills bg-body-secondary text-center " id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ width: "20%" }}>
                <h2 className="m-4">TO-DO LIST</h2>
                <button type="button" className="btn btn-warning w-75 m-auto mt-3 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon icon={faPlus} />&nbsp; Add Task
                </button>

                <button className={`nav-link${activeTab === 'All Tasks' ? ' active border-0 border-end border-5 border-info bg-dark-subtle text-black' : ''} rounded-0 p-2 fs-5`}
                        onClick={() => openTab('All Tasks')}>All Tasks
                </button>
                <button className={`nav-link${activeTab === 'Pending' ? ' active border-0 border-end border-5 border-info bg-dark-subtle text-black' : ''} rounded-0 p-2 fs-5`}
                        onClick={() => openTab('Pending')}>Pending
                </button>
                <button className={`nav-link${activeTab === 'Completed' ? ' active border-0 border-end border-5 border-info bg-dark-subtle text-black' : ''} rounded-0 p-2 fs-5`}
                        onClick={() => openTab('Completed')}>Completed
                </button>
                <button className={`nav-link${activeTab === 'Important' ? ' active border-0 border-end border-5 border-info bg-dark-subtle text-black' : ''} rounded-0 p-2 fs-5`}
                        onClick={() => openTab('Important')}>Important
                </button>

                <button onClick={handleDeleteAll} className={"btn btn-outline-danger border-2 m-auto w-50 bottom-0"}>Delete All</button>
            </div>

            <div className="tab-body overflow-scroll " style={{ width: "80%" }}>
                <nav className={"w-100 d-flex justify-content-between align-items-center border-bottom border-2 mb-4"}>
                    <h1 className={"m-2"}>&nbsp;</h1>
                    <h5 className={"m-2 "}>{format(currentDate, "dd MMM yyyy")}</h5>
                    <FaGithub className={"fs-3 m-2 me-4"}/>
                </nav>
                {activeTab === 'All Tasks' && (
                    <div className="w-75 m-auto">
                        <ul className={"ps-5 pe-5"}>
                            {tasksList.map((task, index) => (
                                <TaskOptions
                                    key={index}
                                    task={task}
                                    index={index}
                                    tasksList={tasksList}
                                    setTasksList={setTasksList}
                                />
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'Pending' && (
                    <div className="w-75 m-auto">
                        <ul className={"ps-5 pe-5"}>
                            {tasksList.map((task, index) => {
                                if (task.status === false) {
                                    return (
                                        <TaskOptions
                                            key={index}
                                            task={task}
                                            index={index}
                                            tasksList={tasksList}
                                            setTasksList={setTasksList}
                                        />
                                    );
                                } else {
                                    return null; // Return null if the task status is not true
                                }
                            })}
                        </ul>
                    </div>
                )}

                {activeTab === 'Completed' && (
                    <div className="w-75 m-auto">
                        <ul>
                            {tasksList.map((task, index) => {
                                if (task.status === true) {
                                    return (
                                        <TaskOptions
                                            key={index}
                                            task={task}
                                            index={index}
                                            tasksList={tasksList}
                                            setTasksList={setTasksList}
                                        />
                                    );
                                } else {
                                    return null; // Return null if the task status is not true
                                }
                            })}
                        </ul>
                    </div>
                )}

                {activeTab === 'Important' && (
                    <div className="w-75 m-auto">
                        <ul className={"ps-5 pe-5"}>
                            {tasksList.map((task, index) => {
                                if (task.important === true) {
                                    return (
                                        <TaskOptions
                                            key={index}
                                            task={task}
                                            index={index}
                                            tasksList={tasksList}
                                            setTasksList={setTasksList}
                                        />
                                    );
                                } else {
                                    return null; // Return null if the task status is not true
                                }
                            })}
                        </ul>
                    </div>
                )}
                <div className="w-75 m-auto opacity-50 " data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    <div className={"ps-5 pe-5"} >
                        <div className={"m-auto d-flex"} style={{border: "1px dashed black", height:"15vh"}}>
                            <span className={"m-auto"}>Add a Task</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;
import {useEffect, useState} from 'react';
import TaskOptions from "./taskOptions.jsx";
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const VerticalTabs = ({tasksList, setTasksList}) => {
    const [activeTab, setActiveTab] = useState('All ToDo');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        // Set the default tab as active when the component mounts
        document.getElementById('defaultOpen').click();
    }, []);

    return (
        <div className="d-flex " style={{height:"100dvh"}}>
            <div className="nav flex-column nav-pills bg-body-secondary text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{width:"20%"}}>
                <h2 className={"m-4"}>TO-DO LIST</h2>
                <button type="button" className="btn btn-warning m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   <FontAwesomeIcon icon={faPlus} /> &nbsp; Add Task
              </button>


                <button className={`${activeTab === 'All ToDo' ? ' active' : ''} rounded-0 border-0 border-end border-5 border-info bg-info-subtle p-2`}
                        onClick={() => openTab('All ToDo')} id="defaultOpen">All ToDo
                </button>
                <button className={`nav-link${activeTab === 'Pending' ? ' active' : ''} rounded-0`}
                        onClick={() => openTab('Pending')}>Pending
                </button>
                <button className={`nav-link${activeTab === 'Completed' ? ' active' : ''} rounded-0`}
                        onClick={() => openTab('Completed')}>Completed
                </button>
            </div>
            <div className="tab-content w-50">
                {/* eslint-disable-next-line react/prop-types */}
                 <h4>All Tasks ({tasksList.length})</h4>

                <div className={`tab-pane fade${activeTab === 'All ToDo' ? ' show active' : ''}`} id="All ToDo"
                     role="tabpanel">
                    <ul>
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
                <div className={`tab-pane fade${activeTab === 'Pending' ? ' show active' : ''}`} id="Pending"
                     role="tabpanel">
                    <ul>
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
                <div className={`tab-pane fade${activeTab === 'Completed' ? ' show active' : ''}`} id="Completed"
                     role="tabpanel">
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
            </div>
        </div>
    );
};

export default VerticalTabs;

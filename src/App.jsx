import { useState, useEffect } from "react";
import TaskOptions from "./components/taskOptions.jsx";
import AddTask from "./components/addTask.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [tasksList, setTasksList] = useState([]);

  // Save tasksList to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("tasksList", JSON.stringify(tasksList));
  }, [tasksList]);

  // Retrieve tasksList from sessionStorage on initial render
  useEffect(() => {
    const storedTasksList = sessionStorage.getItem("tasksList");
    if (storedTasksList) {
      setTasksList(JSON.parse(storedTasksList));
    }
  }, []);

  return (
    <div>
      <AddTask tasksList={tasksList} setTasksList={setTasksList} />
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
  );
}

export default App;

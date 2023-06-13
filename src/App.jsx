import useLocalStorage from "./components/useLocalStorage.jsx"
import AddTask from "./components/addTask.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VerticalTabs from "./components/VerticalTabs.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


function App() {
    const [tasksList, setTasksList] = useLocalStorage("tasksList", []);

  return (
      <>
          <div>
              <button type="button" className="btn btn-warning position-absolute bottom-0 end-0 m-4 btn-lg fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                   <FontAwesomeIcon icon={faPlus} /> &nbsp; Add Task
              </button>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <VerticalTabs tasksList={tasksList} setTasksList={setTasksList}/>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                   aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                              <AddTask tasksList={tasksList} setTasksList={setTasksList}/>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </>
  );
}

export default App;

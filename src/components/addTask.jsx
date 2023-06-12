import {useState} from "react";

// eslint-disable-next-line react/prop-types
function AddTask({ tasksList, setTasksList }) {
  const [inputValue, setInputValue] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [status, setStatus] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputNote = (event) => {
    setInputNote(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() === "") {
      return; // Skip adding an empty task
    }
    const newTask = {
      task: inputValue.trim(),
      note: inputNote.trim(),
      status: false,
    };
    setTasksList([...tasksList, newTask]);
    setInputValue("");
    setInputNote("");
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">Task</label>
        <input type="text" value={inputValue} onChange={handleInputChange} className="form-control" id="task" placeholder="Task 1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="note" className="form-label">Notes</label>
        <textarea value={inputNote} onChange={handleInputNote} className="form-control" id="note" rows="3"></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={addTask} className="btn btn-primary" data-bs-dismiss="modal">Add Task</button>
      </div>
      {/*<input*/}
      {/*  type="checkbox"*/}
      {/*  checked={status}*/}
      {/*  onChange={() => setStatus(!status)}*/}
      {/*/>*/}
    </>
  );
}

export default AddTask;
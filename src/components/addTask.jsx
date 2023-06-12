import { useState } from "react";

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
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <textarea value={inputNote} onChange={handleInputNote} />
      <button onClick={addTask}>Add task</button>
      <input
        type="checkbox"
        checked={status}
        onChange={() => setStatus(!status)}
      />
    </>
  );
}

export default AddTask;
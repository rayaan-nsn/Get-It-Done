import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function MyDatePicker({ selectedDate, handleDateChange }) {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="form-control"
            placeholderText="Select a date"
        />
    );
}

function AddTask({ tasksList, setTasksList }) {
    const [inputValue, setInputValue] = useState("");
    const [inputNote, setInputNote] = useState("");
    const [status, setStatus] = useState(false);
    const [important, setImportant] = useState(false);
    const [date, setDate] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputNote = (event) => {
        setInputNote(event.target.value);
    };

    const handleStatus = () => {
        setStatus(!status);
    };

    const handleImportant = () => {
        setImportant(!important);
    };

    const handleDateChange = (date) => {
        setDate(date);
    };

    const addTask = () => {
        if (inputValue.trim() === "") {
            return; // Skip adding an empty task
        }
        const newTask = {
            task: inputValue.trim(),
            note: inputNote.trim(),
            status: status,
            important: important,
            date: date,
        };
        setTasksList([...tasksList, newTask]);
        setInputValue("");
        setInputNote("");
        setStatus(false);
        setImportant(false);
        setDate(null);
    };

    return (
        <>
            <div className="mb-3">
                <label htmlFor="task" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-control"
                    id="task"
                    placeholder="Task 1"
                    required={true}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="note" className="form-label">
                    Description
                </label>
                <textarea
                    value={inputNote}
                    onChange={handleInputNote}
                    className="form-control"
                    id="note"
                    rows="3"
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="datepicker" className="form-label">
                    Date
                </label>
                <br />
                <MyDatePicker
                    selectedDate={date}
                    handleDateChange={handleDateChange}
                />
            </div>

            <div className="d-flex align-items-center m-4 mb-2">
                <input
                    type="checkbox"
                    checked={important}
                    onChange={handleImportant}
                    className="form-check-input"
                    style={{ height: "20px", width: "20px" }}
                />
                {/*<button onClick={handleImportant} className="border-0 bg-transparent fs-3">*/}
                {/*    {important ? <span className="text-danger">&#9733;</span> : <span>&#9734;</span>}*/}
                {/*</button>*/}
                <p className="m-0 ms-1">&nbsp;Important</p>
            </div>

            <div className="d-flex align-items-center m-4 mt-2">
                <input
                    type="checkbox"
                    checked={status}
                    onChange={handleStatus}
                    className="form-check-input"
                    style={{ height: "20px", width: "20px" }}
                />
                <p className="m-0 ms-1">&nbsp;Completed</p>
            </div>


            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button
                    type="button"
                    onClick={addTask}
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                >
                    Add Task
                </button>
            </div>
        </>
    );
}

export default AddTask;
import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleTask(e) {
    setTask(e.target.value);
  }

  function updateTasks() {
    tasks.push(task);
    setTasks(tasks);
    setTask(" ");
  }

  function handleDeleteTask(id) {
    const filteredTasks = tasks.filter((task, index) => index != id);
    setTasks(filteredTasks);
  }

  return (
    <div className="m-19">
      <input
        type="text"
        className="border"
        value={task}
        onChange={(e) => handleTask(e)}
      ></input>
      <button className="border ml-8" onClick={updateTasks}>
        Add
      </button>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <span>{task}</span>
            <button
              className="border m-4"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default ToDo;

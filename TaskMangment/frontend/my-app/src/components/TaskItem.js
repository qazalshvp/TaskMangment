import React from "react";

function TaskItem({ task }) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.is_complete ? "Completed" : "Incomplete"}</p>
    </li>
  );
}

export default TaskItem;

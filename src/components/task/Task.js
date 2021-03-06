import React from "react"
import "./Task.css"
export default function Task({ id, title, duration, deleteTask }) {

  return (
    <div className="task">
      <div>
        <div className="title">
          {title} ({duration} mn)
        </div>
      </div>
      <div className="actions">
        <div>
          <button onClick={() => deleteTask(id)}>delete</button>
          <button>update</button>
        </div>
      </div>
    </div>
  )
}

import React from "react";

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.status}</td>
                  <td className="d-flex flex-column flex-sm-row justify-content-between">     
                    <button
                      className="btn btn-warning btn-sm mb-2 mb-sm-0 mr-sm-3"
                      onClick={() => editTask(task)}
                    >
                      Edit
                    </button>
                
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No tasks available. Add some tasks!</p>
      )}
    </div>
  );
};

export default TaskList;

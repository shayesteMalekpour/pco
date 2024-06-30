import React from "react";

function Projects() {
  return (
    <div className="table-responsive mb-5">
      <table className="table table-hover text-nowrap table-bordered">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope="col">Callback</th>
            <th scope="col">API Key</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="empty-row">
            <td colSpan="4" className="text-center p-3">
              <div className="text-gray-300 mb-2">
                <i className="fas fa-fw me-2 fa-database fa-3x"></i>
              </div>
              No Data
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

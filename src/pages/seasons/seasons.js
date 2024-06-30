import React from "react";
import { Link } from "react-router-dom";

function Seasons() {
  return (
    <div className="table-responsive mb-5">
      <table className="table table-hover text-nowrap table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Vote Count</th>
            <th scope="col">Candidating Cost</th>
            <th scope="col">Is Calculated</th>
            <th scope="col">Is Voter Detemined</th>
            <th scope="col">Is ended</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sesaon 2</th>
            <td>2024-06-13 00:00 </td>
            <td>2024-12-12 23:59 </td>
            <td>288</td>
            <td>1 USDT</td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td className="py-1 align-middle">
              <span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> Yes
              </span>
            </td>
            <td className="align-middle">
              <Link to="#">Candidates</Link>
            </td>
          </tr>
          <tr>
            <th scope="row">Start </th>
            <td>2024-06-13 00:00 </td>
            <td>2024-12-12 23:59 </td>
            <td>288</td>
            <td>1 USDT</td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td className="py-1 align-middle">
              <span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> Yes
              </span>
            </td>
            <td className="align-middle">
              <Link to="#">Candidates</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Seasons;

import React from "react";

function Referees() {
  return (
    <div id="tableHeadOptions" className="table-responsive mb-5">
      <table className="table table-hover text-nowrap table-bordered  ">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Is Active </th>
            <th scope="col">Line</th>
            <th scope="col">Is Placed </th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Jack</th>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td>288</td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td>2024-06-13 00:00 </td>
          </tr>
          <tr>
            <th scope="row">Jack</th>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td>288</td>
            <td className="py-1 align-middle">
              <span className="badge border border-danger text-danger px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
                <i className="fa fa-circle fs-9px fa-fw me-5px"></i> No
              </span>
            </td>
            <td>2024-06-13 00:00 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Referees;

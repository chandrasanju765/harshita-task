import React, { useEffect, useState } from "react";
import DataTable from "../component/Table";
import { UserForm, Chart } from "../App";
import { Constants } from "../utils/constant";
import { dummyData } from "../utils/UserData";

export default function Dashboard() {
  const [tableData, setTableData] = useState(dummyData);
  const [chartData, setChartData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    getChartData();
  }, [tableData]);

  const handleFormData = (user) => {
    handleClose();
    setTableData([...tableData, user]);
  };

  const getRoleCount = (roleName) => {
    let filteredArray = tableData.filter((item) => item.role === roleName);

    return {
      name: roleName,
      value: filteredArray.length,
    };
  };

  const getChartData = () => {
    setChartData([
      getRoleCount(Constants.admin),
      getRoleCount(Constants.maintainer),
      getRoleCount(Constants.subadmin),
      getRoleCount(Constants.user),
    ]);
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-2 bg-dark text-white p-4 shadow"
            style={{ minHeight: "100vh" }}
          >
            <h3 className="fw-bold border-bottom pb-3 mb-4">Admin Panel</h3>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link active bg-primary text-white rounded"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-10 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="fw-bold mb-1 text-dark">Dashboard</h2>

                <p className="text-muted mb-0">Manage users and analytics</p>
              </div>

              <button
                onClick={handleOpen}
                className="btn btn-primary px-4 py-2 shadow-sm"
              >
                + Add User
              </button>
            </div>

            {open && (
              <UserForm
                open={open}
                close={handleClose}
                submitForm={handleFormData}
              />
            )}

            <div className="row mb-4">
              <div className="col-md-3">
                <div className="card border-0 shadow-sm text-center p-3">
                  <h6 className="text-muted">Admins</h6>

                  <h3 className="fw-bold text-danger">
                    {tableData.filter((item) => item.role === "Admin").length}
                  </h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-0 shadow-sm text-center p-3">
                  <h6 className="text-muted">Subadmin</h6>

                  <h3 className="fw-bold text-danger">
                    {
                      tableData.filter((item) => item.role === "SubAdmin")
                        .length
                    }
                  </h3>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm text-center p-3">
                  <h6 className="text-muted">Maintainers</h6>

                  <h3 className="fw-bold text-success">
                    {
                      tableData.filter((item) => item.role === "Maintainer")
                        .length
                    }
                  </h3>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card border-0 shadow-sm text-center p-3">
                  <h6 className="text-muted">Users</h6>

                  <h3 className="fw-bold text-warning">
                    {tableData.filter((item) => item.role === "User").length}
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Users List</h5>

                    <DataTable data={tableData} />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">User Analytics</h5>

                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "350px" }}
                    >
                      <Chart data={chartData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

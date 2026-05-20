import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "email", headerName: "Email", flex: 1.5, minWidth: 200 },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
    minWidth: 130,
    renderCell: (params) => (
      <span
        style={{
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 200,
          background:
            params.value === "Admin"
              ? "#dc354648"
              : params.value === "Maintainer"
              ? "#19875451"
              : params.value === "SubAdmin"
              ? "#0d6dfd3d"
              : "#ffc10745",
          color: "black",
        }}
      >
        {params.value}
      </span>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ data }) {
  return (
    <div className="container-fluid p-0">
      <Paper
        elevation={3}
        sx={{
          height: 420,
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: 0,

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f8f9fa",
              fontSize: "14px",
              fontWeight: "bold",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f1f5f9",
            },

            "& .MuiDataGrid-cell": {
              fontSize: "13px",
            },

            "& .MuiCheckbox-root": {
              color: "#0d6efd !important",
            },
          }}
        />
      </Paper>
    </div>
  );
}
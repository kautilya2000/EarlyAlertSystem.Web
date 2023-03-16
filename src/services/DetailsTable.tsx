import { useStudentsControllerFindAll } from "../api/services/base/students";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React from "react";

export default function DetailsTable() {
  const studentData = useStudentsControllerFindAll();
  const [rows, setRows] = React.useState<any>([]);
  const columns: GridColDef[] = [
    { field: "id", headerName: "Ksu Id", flex: 1 },
    {
      field: "firstName",
      headerName: "First name",
      editable: true,
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      editable: true,
    },
  ];

  React.useEffect(() => {
    if (studentData?.data) {
      const data = studentData.data.students.map((student: any) => {
        return {
          id: student.ksuId,
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          phone: student.phoneNumber,
          department: student.homeDepartment,
        };
      });
      setRows(data);
    }
  }, [studentData]);

  return (
    <Box sx={{ height: 700, width: "100%", paddingTop: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

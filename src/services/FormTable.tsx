import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowsProp,
} from "@mui/x-data-grid";
import React from "react";
import { useRiskStudentsDetailsControllerFindAll } from "../api/services/base/risk-students-details";

export default function DetailsTable() {
  const { data } = useRiskStudentsDetailsControllerFindAll({
    query: {
      queryKey: ["risk-students-details"],
    },
  });

  const columns: GridColumns = [
    { field: "studentId", headerName: "Stident Id", flex: 1 },

    {
      field: "studentName",
      headerName: "Student Name",
      flex: 1,
    },
    {
      field: "studentNetId",
      headerName: "Net Id",
      flex: 1,
    },
    {
      field: "facultyName",
      headerName: "Faculty Name",
      flex: 1,
    },
    {
      field: "facultyEmail",
      headerName: "Faculty Email",
      flex: 1,
    },
    {
      field: "courseCrn",
      headerName: "Course CRN",
      flex: 1,
    },
    {
      field: "courseNumber",
      headerName: "Course Number",
      flex: 1,
    },
  ];

  const rows: GridRowsProp =
    data?.items?.map((res) => {
      return {
        id: res.riskStudentDetailsId,
        sendEmail: res.sendEmail,
        studentId: res.studentId,
        studentName: res.studentName,
        studentNetId: res.studentNetId,
        courseCrn: res.courseCrn,
        courseNumber: res.courseNumber,
        facultyEmail: res.facultyEmail,
        facultyName: res.facultyName,
        isGraduateStudent: res.isGraduateStudent,
        notes: res.notes,
      };
    }) || [];

  return (
    <Box sx={{ height: 700, width: "100%", paddingTop: 1 }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridColumns,
  GridRowsProp,
} from "@mui/x-data-grid";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRiskStudentsDetailsControllerFindAll } from "../api/services/base/risk-students-details";
import { Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { FactorsConcernedEntity } from "../api/services/base/models";

export default function DetailsTable() {
  const { data } = useRiskStudentsDetailsControllerFindAll({
    query: {
      queryKey: ["risk-students-details"],
    },
  });

  const columns: GridColumns = [
    { field: "studentId", headerName: "Student Id", flex: 1 },
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
      field: "factorsConcerned",
      width: 300,

      headerName: "Factors Concerned",
      renderCell(params) {
        return (
          <div>
            {params.value?.map((res: FactorsConcernedEntity) => {
              return (
                <Typography
                  variant="body2"
                  component="div"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {res.factorConcerned}
                </Typography>
              );
            })}
          </div>
        );
      },
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
    {
      field: "isgraduated",
      headerName: "Graduate Student",
      flex: 1,
      renderCell(params) {
        return (
          <div>
            {params.value ? (
              <CheckCircleOutlineIcon color="success" />
            ) : (
              <CancelIcon color="error" />
            )}
          </div>
        );
      },
    },
  ];
  console.log("dsf", data);
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
        factorsConcerned: res.FactorsConcerned,
        isgraduated: res.isGraduateStudent,
      };
    }) || [];

  return (
    <Box sx={{ width: "100%", paddingTop: 1 }}>
      <DataGrid
        rowHeight={100}
        autoHeight={true}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import FormTable from "./FormTable";

export default function DetailsTable() {
  return (
    <Box sx={{ height: 700, width: "100%", paddingTop: 1 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" component="div" gutterBottom>
          Student Details
        </Typography>
        <Button variant="contained" component={Link} to={`/DetailsForm`}>
          Add Student
        </Button>
      </Box>
      <FormTable />
    </Box>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Early Alert System
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mx: 2, mt: 1 }}>{children}</Box>
    </Box>
  );
}

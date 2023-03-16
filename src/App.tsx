import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DenseAppBar from "./layout/NavBar";
import DetailsTable from "./services/DetailsTable";

function App() {
  return (
    <DenseAppBar>
      <DetailsTable />
    </DenseAppBar>
  );
}

export default App;

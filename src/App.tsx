import "./App.css";
import DenseAppBar from "./layout/NavBar";
import { Route, Routes } from "react-router-dom";
import { PageRoutes } from "./routes";

function App() {
  return (
    <DenseAppBar>
      <Routes>
        {PageRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </DenseAppBar>
  );
}

export default App;

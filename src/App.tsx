import "./App.css";
import DenseAppBar from "./layout/NavBar";
import { Route, Routes } from "react-router-dom";
import { PageRoutes } from "./routes";

function App() {
  return (
    <div>
      <iframe
        title="early_system"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
        src="https://app.powerbi.com/reportEmbed?reportId=f6f13d46-a856-48dd-8167-f979b6079cdc&autoAuth=true&ctid=45f26ee5-f134-439e-bc93-e6c7e33d61c2"
        frameBorder={0}
        allowFullScreen={true}
      ></iframe>
    </div>
    // <DenseAppBar>
    //   <Routes>
    //     {PageRoutes.map(({ path, Component }) => (
    //       <Route key={path} path={path} element={<Component />} />
    //     ))}
    //   </Routes>
    // </DenseAppBar>
  );
}

export default App;

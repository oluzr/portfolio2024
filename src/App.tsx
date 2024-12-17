import Layout from "components/layout/Layout/Layout";
import RouterTransition from "components/layout/RouterTransition/RouterTransition";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "routes/Main/Main";
import SidePrj from "routes/SidePrj/SidePrj";
import Project from "routes/Project/Project";
import Works from "routes/Works/Works";

const App = () => {
  const location = useLocation();
  return (
    <Layout>
      <RouterTransition location={location}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/works/:value" element={<Project />} />
          <Route path="/works" element={<Works />} />
          <Route path="/sideProjects" element={<SidePrj />} />
        </Routes>
      </RouterTransition>
    </Layout>
  );
};

export default App;

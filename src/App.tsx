import Layout from "components/layout/Layout/Layout";
import RouterTransition from "components/layout/RouterTransition/RouterTransition";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "routes/Main/Main";

const App = () => {
  const location = useLocation();
  return (
    <Layout>
      <RouterTransition location={location}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </RouterTransition>
    </Layout>
  );
};

export default App;

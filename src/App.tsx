import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Som from "./routes/Som";
import Home from "./component/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/som',
          element: <Som />,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

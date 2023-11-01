import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/layout";
import Login from "./Pages/Login";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ path: "Login", element: <Login /> }],
  },
]);

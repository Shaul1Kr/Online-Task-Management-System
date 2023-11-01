import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
    ],
  },
]);

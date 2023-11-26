import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import TaskManager, { loader as TaskManagerLoader } from "./Pages/TaskManager";
import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "ResetPassword", element: <ResetPassword /> },
      {
        path: "TaskManager",
        loader: TaskManagerLoader,
        element: <TaskManager />,
      },
      { path: "NewTask", element: <CreateTask /> },
      { path: "EditTask", element: <EditTask /> },
    ],
  },
]);

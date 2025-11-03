import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
export let RouterApp = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

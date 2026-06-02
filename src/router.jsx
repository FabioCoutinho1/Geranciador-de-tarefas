import { createBrowserRouter } from "react-router";
import App from "./App";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRouter from "./components/auth/ProtectedRouter.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRouter>
            <Main />,
          </ProtectedRouter>
        ),
      },
    ],
  },
]);

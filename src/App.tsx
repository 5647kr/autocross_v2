import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layout/Default";
import Home from "./routes/page/Home";
import Vehicle from "./routes/page/Vehicle";
import Product from "./routes/page/Product";
import Log from "./routes/page/Log";
import Calendar from "./routes/page/Calendar";
import Settings from "./routes/page/Settings";

const router = createBrowserRouter([
  {
    path: "",
    Component: Default,
    children: [
      { path: "/", Component: Home },
      { path: "/vehicle", Component: Vehicle },
      { path: "/product", Component: Product },
      { path: "/log", Component: Log },
      { path: "/calendar", Component: Calendar },
      { path: "/settings", Component: Settings },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

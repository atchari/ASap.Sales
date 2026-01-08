// import withAuth from "@app/_hoc/withAuth";
import { Page } from "@/_components/Page";
import withAuth from "@/_hoc/withAuth";
import { SoloLayout } from "@/_layouts/SoloLayout";
import Login1 from "@/pages/auth/login/login-1";
import CryptoDashboard from "@/pages/dashboards/crypto";
import Error404 from "@/pages/extra-pages/404";
import { createBrowserRouter } from "react-router-dom";
const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Page Component={CryptoDashboard} hoc={withAuth} />,
      },
      {
        path: "/dashboards/crypto",
        element: <Page Component={CryptoDashboard} hoc={withAuth} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SoloLayout />,
    children: [
      {
        path: "login-1",
        element: <Login1 />,
      },
    ],
  },
  {
    path: "/extra-pages",
    element: <SoloLayout />,
    children: [
      {
        path: "404",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);

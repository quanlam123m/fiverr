import { lazy } from "react";

import AdminTemplate from "../containers/Admin";

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../containers/Admin/Dashboard")),
  },
];

function renderRouteAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRouteAdmin };

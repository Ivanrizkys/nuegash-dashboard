import React from "react"
import { useRoutes } from "react-router-dom";

const Dashboard = React.lazy(() => import("@/src/components/pages/dashboard"))

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard/>,
    }
  ])
}

export default Routes

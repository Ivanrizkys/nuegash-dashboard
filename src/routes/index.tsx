import React from "react"
import { useRoutes } from "react-router-dom";

const Tasks = React.lazy(() => import("@/src/components/pages/Tasks"))
const Mentors = React.lazy(() => import("@/src/components/pages/Mentors"))
const Dashboard = React.lazy(() => import("@/src/components/pages/dashboard"))

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/tasks",
      element: <Tasks />
    },
    {
      path: "/mentors",
      element: <Mentors />
    }
  ])
}

export default Routes

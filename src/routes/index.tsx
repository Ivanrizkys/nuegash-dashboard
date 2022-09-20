import React from "react"
import { useRoutes } from "react-router-dom";

const Dashboard = React.lazy(() => import("@/src/components/pages/dashboard"))
const Mentors = React.lazy(() => import("@/src/components/pages/Mentors"))

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/tasks",
      element: "Hai sayang"
    },
    {
      path: "/mentors",
      element: <Mentors />
    }
  ])
}

export default Routes

import React from "react"
import { useRoutes } from "react-router-dom";

const Tasks = React.lazy(() => import("@/src/components/pages/Tasks"))
const Mentors = React.lazy(() => import("@/src/components/pages/Mentors"))
const Settings = React.lazy(() => import("@/src/components/pages/Settings"))
const Dashboard = React.lazy(() => import("@/src/components/pages/dashboard"))
const Messages = React.lazy(() => import("@/src/components/pages/Messages"))

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
    },
    {
      path: "/messages",
      element: <Messages />
    },
    {
      path: "/settings",
      element: <Settings />
    }
  ])

}

export default Routes

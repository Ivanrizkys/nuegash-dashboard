import React from "react";
import Routes from "@/src/routes/index";
import { useLocation } from "react-router-dom";
import Spinner from "@/src/components/atoms/Spinner";
import Sidebar from "@/src/components/organisms/Sidebar";

function App() {
  const { pathname } = useLocation() 

  return (
    <div className="font-sans box-border">
      {!pathname.includes("auth") && (
        <Sidebar />
      )}
      <React.Suspense fallback={<Spinner />}>
        <Routes />
      </React.Suspense>
    </div>
  );
}

export default App;

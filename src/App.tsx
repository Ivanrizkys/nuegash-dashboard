import React from "react";
import Routes from "@/src/routes/index";
import Spinner from "@/src/components/atoms/Spinner";
import Sidebar from "@/src/components/organisms/Sidebar";

function App() {
  return (
    <div className="font-sans">
      <Sidebar />
      <React.Suspense fallback={<Spinner />}>
        <Routes />
      </React.Suspense>
    </div>
  );
}

export default App;

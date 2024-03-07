import useAuth from "./hooks/useAuth";
import Routes from "@/src/routes/index";
import { Toaster } from "react-hot-toast";
import React, { useCallback } from "react";
import { RootState } from "./global/store";
import { useLocation } from "react-router-dom";
import { updateShowSidebar } from "./global/app";
import useScreenResize from "./hooks/useScreenResize";
import Backdrop from "@/src/components/atoms/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "@/src/components/organisms/Sidebar";

function App() {
  const auth = useAuth();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.app);

  useCallback(useScreenResize, [])();

  return (
    <div className="font-sans box-border">
      {!pathname.includes("auth") && auth && <Sidebar />}
      <React.Suspense>
        <Routes />
      </React.Suspense>
      {appState.showSidebar && appState.screenWidth < 1280 && (
        <Backdrop
          zIndex={20}
          onClick={() => dispatch(updateShowSidebar(false))}
        />
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            color: "#141522",
            fontWeight: 500,
            fontFamily: "Plus Jakarta Sans",
            backgroundColor: "#FFFFFF",
          },
        }}
      />
    </div>
  );
}

export default App;

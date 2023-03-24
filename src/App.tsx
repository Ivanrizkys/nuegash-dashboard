import React, { useCallback} from "react";
import Routes from "@/src/routes/index";
import { useLocation } from "react-router-dom";
import Spinner from "@/src/components/atoms/Spinner";
import Sidebar from "@/src/components/organisms/Sidebar";
import useScreenResize from "./hooks/useScreenResize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./global/store";
import Backdrop from "./components/atoms/Backdrop";
import { updateShowSidebar } from "./global/app";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.app);

  useCallback(useScreenResize, [])();

  return (
    <div className="font-sans box-border">
      {!pathname.includes("auth") && <Sidebar />}
      <React.Suspense fallback={<Spinner />}>
        <Routes />
      </React.Suspense>
      {appState.showSidebar && appState.screenWidth < 1280 && (
        <Backdrop
          zIndex={20}
          onClick={() => dispatch(updateShowSidebar(false))}
        />
      )}
    </div>
  );
}

export default App;

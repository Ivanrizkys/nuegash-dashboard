import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateScreenWidth, updateShowSidebar } from "../global/app";

const useScreenResize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateScreenWidth(window.innerWidth));
    if (window.innerWidth >= 1280) {
      dispatch(updateShowSidebar(true));
    } else {
      dispatch(updateShowSidebar(false));
    }
    const handleResizeScreen = () => {
      if (window.innerWidth >= 1280) {
        dispatch(updateShowSidebar(true));
      } else {
        dispatch(updateShowSidebar(false));
      }
      dispatch(updateScreenWidth(window.innerWidth));
    };
    window.addEventListener("resize", handleResizeScreen);
    return () => window.removeEventListener("resize", handleResizeScreen);
  }, []);
};

export default useScreenResize;

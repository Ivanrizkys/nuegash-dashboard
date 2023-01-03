import appReducer from "./app";
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/src/components/organisms/Sidebar/store";
import settingReducer from "@/src/components/pages/Settings/store"

export const store = configureStore({
  reducer: {
    app: appReducer,
    sidebar: sidebarReducer,
    setting: settingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";
import sidebarReducer from "@/src/components/organisms/Sidebar/store";

export const store = configureStore({
  reducer: {
    app: appReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Doğru import
import rootReducer from "./index";

export default function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
}

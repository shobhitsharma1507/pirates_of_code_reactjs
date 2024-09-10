import storage from "redux-persist/es/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { categoriesReducer } from "./reducers/categories";

const localPersistConfig = {
  key: "root",
  storage,
};

const localStoreReducer = combineReducers({
  categories: categoriesReducer,
});

const localPersistReducer = persistReducer(
  localPersistConfig,
  localStoreReducer
);

export { localPersistReducer };

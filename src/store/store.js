import { thunk } from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { localPersistReducer } from "./rootReducer";

const rootReducer = combineReducers({
  local: localPersistReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

let persistor = persistStore(store);

const purgeStore = () => {
  persistor.purge();
};

export { store, persistor, purgeStore };

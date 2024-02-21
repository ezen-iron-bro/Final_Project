import { configureStore } from "@reduxjs/toolkit";
import cart from "./modules/cartSlice";
import community from "./modules/commuSlice";
import auth from "./modules/authSlice";
import leaderboards from "./modules/leaderboardsSlice";

const localStorageMiddleware = store => next => action => {
  let result = next(action);
  localStorage.setItem("communityData", JSON.stringify(store.getState().community));
  return result;
};

export const store = configureStore({
  reducer: {
    cart,
    community,
    auth,
    leaderboards,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
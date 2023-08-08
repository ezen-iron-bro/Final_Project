import { configureStore } from "@reduxjs/toolkit";
import cart from "./modules/cartSlice";
import community from "./modules/commuSlice";
import auth from "./modules/authSlice";
import leaderboards from "./modules/leaderboardsSlice";
export const store = configureStore({
  reducer: {
    cart,
    community,
    auth,
    leaderboards,
  },
});

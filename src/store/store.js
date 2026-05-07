import { configureStore } from "@reduxjs/toolkit";
import { getAllProducts, getUserAuthCall } from "../fetures/AllApiCall";

const rootReducer = {
  app: getUserAuthCall.reducer,
  list: getAllProducts.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  //  {
  //   app: getUserAuthCall.reducer,
  // },
});
// export const store2 = configureStore({
//   reducer: {
//     list: getAllProducts.reducer,
//   },
// });

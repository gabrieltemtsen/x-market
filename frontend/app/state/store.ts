import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { bridgeCollectionSlice } from "./slices";


export const store = configureStore({
  reducer: {
   
    bridgeCollection: bridgeCollectionSlice.reducer,
  },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       HackHostApi.middleware,
//       CloudinaryApi.middleware,
//     ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

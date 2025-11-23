import {configureStore} from "@reduxjs/toolkit";
import city from "../features/city/citySlice.ts"
//import weather from "../features/weather/weatherSlice.ts";
//import message from "../features/message/messageSlice.ts";
import {weatherApi} from "../features/api/weatherAction.ts";

export const store = configureStore({
    reducer: {
        /*
        weather, message
         */
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
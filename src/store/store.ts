import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './App.service'
import loginReducer from './Appslice'


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
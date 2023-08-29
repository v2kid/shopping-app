import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  loggedIn: boolean
  user : {
    email : string | any,
  }
}

const initialState: UserState = {
  loggedIn: false,
  user : {
    email : ''
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loggin: (state ,action) => {
      state.loggedIn = true
      state.user = action.payload
    },
    logout: (state) => {
      state.loggedIn = false
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { logout, incrementByAmount ,loggin } = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer
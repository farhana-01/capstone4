import { configureStore } from '@reduxjs/toolkit'
import TrimerReducer from './componands/Trimer-Section/TrimmerSlice'

export const store = configureStore({
  reducer: {
    product:TrimerReducer
  },
})

import { configureStore } from '@reduxjs/toolkit'
import wordReducer from "./features/wordSlice"
export default configureStore({
  reducer: {
    word: wordReducer,
  },
})

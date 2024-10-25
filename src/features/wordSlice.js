import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addWord: "",
  buttonStatus: false,
  wordAr: [],
  showOldName: "",
};

export const wordSlice = createSlice({
  name: "secretWord",
  initialState,
  reducers: {
    addWords: (state, action) => {
      let newName = action.payload;
      state.addWord = newName;
      // console.log(state.addWord)
    },
    sendWords: (state, action) => {
      if (state.addWord.length > 0) {
        let shortName =
          state.addWord.length > 5
            ? state.addWord.slice(0, 5) + "..."
            : state.addWord;
        // console.log(shortName)

        let newAr = {
          name: shortName,
          id: crypto.randomUUID(),
          oldName: state.addWord,
        };
        state.wordAr = [...state.wordAr, newAr];
        state.addWord = "";
      }
      // console.log(state.wordAr)
    },
    showWord: (state, action) => {
      let hidewords = action.payload;
      let show = state.wordAr.find((item) => item.id === hidewords);
      console.log(show.oldName);
      if (show) {
        state.showOldName = show.oldName;
        state.buttonStatus = !state.buttonStatus;
      }
    },
    clean:(state, action)=>{
state.wordAr=state.wordAr.filter((word)=>word.id !== action.payload)
    },
    allClean:(state)=>{
        state.wordAr=[]    
    }
  },
});
export const { addWords, sendWords, showWord ,clean,allClean} = wordSlice.actions;
export default wordSlice.reducer;

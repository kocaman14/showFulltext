import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWords, sendWords,allClean } from '../features/wordSlice'
import './AddWords.css';
const AddWords = () => {
const dispatch = useDispatch()
const {addWord}=useSelector((state)=>state.word)
  return (
   <div className="add-words-container">

   
<input placeholder='Buraya yazınız'  value={addWord}  onChange={(e)=>dispatch(addWords(e.target.value))}></input>
<button   className="submit-button" onClick={()=>dispatch(sendWords())}>Gönder ⬇</button>
<button  className="clean-button" onClick={()=>dispatch(allClean())}>Hepsini Temizle </button>


   </div>
   
  )
}

export default AddWords
import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clean, showWord } from '../features/wordSlice'

import './Page.css'
const Page = () => {
  const dispatch =useDispatch()
  const {wordAr,showOldName,buttonStatus} =useSelector((state)=>state.word)

  return (
<div className="page-container">
  
  {wordAr.map((words)=>{
return (
<ul className="word-list" key={words.id}>
<li onClick={()=>dispatch(showWord(words.id))}>{words.name},{words.name.length>5?"➡ devamı için tıkla":null}</li>
<button  className="delete-button" onClick={()=>dispatch(clean(words.id))}>Sil</button>
</ul>
)

  })}
<span className="completed-text"> {buttonStatus ? `Full Text: ${showOldName}` : null}</span>
    
    
    
    </div>
  )
}

export default Page
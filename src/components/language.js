import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { changeLanguage } from '../redux/speed/speedSlice';

function Language() {
    const language=useSelector(state=>state.speed.language);
    const dispatch=useDispatch();
const handleClick=()=>{
    dispatch(changeLanguage())
}

  return (
    <div onClick={handleClick} className="fs-4 mt-5 language" >{language}</div>
  )
}

export default Language
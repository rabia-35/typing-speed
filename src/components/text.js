
import {useState} from 'react'
import { Container } from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import {compareWords, counter, keyNumber} from "../redux/speed/speedSlice"
import Result from "./result"

function Text() {
  const [count, setCount]=useState(0)
    const items=useSelector(state=>state.speed.items)
    const language=useSelector(state=>state.speed.language)
    const time=useSelector(state=>state.speed.time)
    const dispatch=useDispatch();

      
  
    const handleChange=(e)=> {
        dispatch(keyNumber())
        if((e.target.value).length===1){ dispatch(counter(true)) }
        if((e.target.value).includes(" ")){
          dispatch(compareWords({id:count,  name:e.target.value}))
          setCount(count+1)
          e.target.value=""
        }  
        if(time===false){e.target.value=""}
      }

    
  return (
    <Container >
        <div className='border'>
             <div className='words-border text-break'>
             {
                items.map(word=>(
                  <span key={word.id}
                    className={word.status==="success" ? "text-success fw-bold" : 
                    word.status==="failed" ? "text-danger fw-bold text-decoration-line-through": ""}
                  >
                    {language==="TR" ? word.turkish : word.english}
                   </span>
                ))
              } 
             </div>
             <input type="text" className='form-control mx-auto' onChange={handleChange} />
        </div>
        <Result />
    </Container>
  )
}

export default Text
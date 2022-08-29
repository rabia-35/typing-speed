import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {counter} from "../redux/speed/speedSlice"

function CountDown() {
  const time=useSelector(state=>state.speed.time)
    const [count, setCount]=useState(60)
    const dispatch=useDispatch()

    useEffect(() => {
      let myTime;
      if(count>0 && time && !myTime){
        myTime=setInterval(() => {
          count>0 && setCount((prevState)=> {
            prevState===0 && dispatch(counter(false))
            return  prevState>0 ? prevState-1: prevState
          })
        }, 1000);
      }
      
      return ()=>{
        clearInterval(myTime)
      }
    }, [time]);

  return (
    <div className='count'> {count} </div>
  )
}

export default CountDown
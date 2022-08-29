import {useEffect, useState} from 'react'
import { useSelector} from "react-redux"
import Again from './again';
import { Modal, ModalFooter } from 'react-bootstrap';


function Result() {
  const time=useSelector(state=>state.speed.time)
  const correct=useSelector(state=>state.speed.correct)
  const inCorrect=useSelector(state=>state.speed.incorrect)
  const correctLetters=useSelector(state=>state.speed.correctLetters)
  const key=useSelector(state=>state.speed.key)

  const [show, setShow] = useState();

  const handleClose=()=>{
    setShow(false)
  }
 useEffect(()=>{
  time===false && setShow(true) 
 },[time])

  return (   
  <div className='result'>
  <Modal
    show={show}
    onHide={handleClose}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
    className='color-tomato'
  >
    <Modal.Header >
      <Modal.Title id="example-custom-modal-styling-title" className='result-dks text-center' >
        {correct + inCorrect} <span className='fs-1'>DKS</span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='fs-4' >
      <p> Keystroke <span>
      <strong className='ms-4'>{key}</strong>
         <span className=' ms-4 text-success' >{correctLetters}</span> | <span className='text-danger'> {key -correctLetters}</span> 
        </span> 
      </p>
      <p className='text-success'>Correct Words <strong>{correct}</strong></p>
      <p className='text-danger'>Incorrect Words <strong>{inCorrect}</strong></p>
      <p>Truth  <strong>{correct*100 /40} %</strong></p>
    </Modal.Body>
    <ModalFooter className='mx-auto modal-again'>
    <Again/>
    </ModalFooter>
  </Modal>
</div>
       
  );
}

export default Result
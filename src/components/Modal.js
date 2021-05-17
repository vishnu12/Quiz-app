
import React,{useContext,useEffect} from 'react'
import { ModalContext } from '../context/modalContext'
import { Button } from './LoginDiv'
import { Title } from './Title'


const Modal = () => {

    const {dispatch}=useContext(ModalContext) 
    
    let btnProps={
        width:'200px',
        height:'35px',
        padding:'2px',
    }

function handleClick() {
    dispatch({type:'CLOSE'})
}

  return (
    <>
    <div className='modal-container'>
        <Title className='modal-title' color='blue'>Instructions</Title>
        <ul>
            <li><p>Total 10 questions</p></li>
            <li><p>All questions to be answered</p></li>
            <li><p>Correct answer carries 1 mark</p></li>
            <li><p>Wrong answer will deduct 0.25 marks</p></li>
            <li><p>Do not refresh the browser once started</p></li>
        </ul>
        <Button {...btnProps} onClick={()=>handleClick()}>START</Button>
      </div>
    
    </>
  )
}

export default Modal

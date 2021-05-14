
import React,{useState,useEffect,useContext} from 'react'
import { LoginContainer,Input,FormBtn } from '../components/LoginDiv'
import { Title } from '../components/Title'
import {AuthContext} from '../context/authContext'

export const Login = ({history}) => {

    const {state:{user},dispatch}=useContext(AuthContext)

    const [userID, setUserID] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({
            type:'LOGIN',
            payload:userID
        })
        localStorage.setItem('user',JSON.stringify(userID))
    }

  useEffect(()=>{
  if(user){
    history.push('/')
  }
  },[user])

    return (
        <>
        <Title>Login to start the exam</Title>
        <LoginContainer>
         <Input type="text" id="userId" className="userId" onChange={e=>setUserID(e.target.value)}
         placeholder='Enter Your ID' />
        <FormBtn type='submit' onClick={handleSubmit}>Login</FormBtn>
        </LoginContainer>
        </>
    )
}

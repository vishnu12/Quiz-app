import React,{useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/authContext'
import { Button } from './LoginDiv'
import { Timer } from './Timer'
import { Title } from './Title'
import {ModalContext} from '../context/modalContext'


export const Nav = () => {
 const history=useHistory()
  const {state:{user},dispatch}=useContext(AuthContext)  
  const {modalOpen,dispatch:modDispatch}=useContext(ModalContext) 

  function logoutHandler() {
      dispatch({
          type:'LOGOUT'
      })

      localStorage.removeItem('user')
      setTimeout(() => {
        modDispatch({type:'OPEN'})
      }, 1000);
  }

  useEffect(()=>{
    if(!user){
      history.push('/login')
    }
},[user])


  let props={
    width:'100px',
    height:'35px',
    padding:'2px'
}
    return (
     <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <div className="left">{!modalOpen && <Timer />}</div>
      <div className="right">
          <h5>Hi,{user}</h5>
          <Button {...props} onClick={()=>logoutHandler()}>
          Logout
          </Button></div>
     </NavWrapper>
    )
}


const NavWrapper=styled.nav`
width:100%;
background:rgba(0,0,0,0.3);
dispaly:flex;
justify-content:space-between;
.right{
    display:flex;
}

.right h5{
    color:#fff;
    margin-right:10px;
}
`;


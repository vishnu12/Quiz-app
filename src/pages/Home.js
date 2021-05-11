import React,{useEffect,useContext,useState} from 'react'
import Modal from '../components/Modal'
import { Nav } from '../components/Nav'
import { AuthContext } from '../context/authContext'
import { ModalContext } from '../context/modalContext'


export const Home = ({history}) => {

    const {state:{user}}=useContext(AuthContext)
    const {modalOpen}=useContext(ModalContext)
    
    useEffect(()=>{
     if(!user){
         history.push('/login')
     }
    },[user])
    return (
        <>
        <Nav />   
        {modalOpen && <Modal />}
        </>
    )
}

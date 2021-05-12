import React,{useEffect,useContext,useState} from 'react'
import { LoadQuestions } from '../components/LoadQuestions'
import Modal from '../components/Modal'
import { Nav } from '../components/Nav'
import { AuthContext } from '../context/authContext'
import { ModalContext } from '../context/modalContext'
import { API_KEY, API_URL } from '../config/key'
import { QuesContext } from '../context/quesContext'


export const Home = ({history}) => {

    const {state:{user}}=useContext(AuthContext)
    const {modalOpen}=useContext(ModalContext)
    const {num}=useContext(QuesContext)

    const [questions, setQuestions] = useState([])

    async function getQuestions() {
        try {
            const res=await fetch(`${API_URL}?apiKey=${API_KEY}&&limit=10&&category=DevOps`,{
                method:'GET',
                mode:'cors',
                credentials:'same-origin'
            })
            const data=await res.json()
            setQuestions(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
     if(!user){
         history.push('/login')
     }else{
         getQuestions()
     }
    },[user])


    return (
        <>
        <Nav />   
        {
        modalOpen?<Modal />
        :
        questions && <LoadQuestions num={num>9?9:num} data={questions[num>9?9:num]}/>
        }
        </>
    )
}

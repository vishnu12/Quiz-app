import React,{useContext} from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../components/LoginDiv';
import { AuthContext } from '../context/authContext';
import { ModalContext } from '../context/modalContext';
import { QuesContext } from '../context/quesContext';

export const ExamEndPage = () => {

    const score = localStorage.getItem('score')
    const {dispatch}=useContext(AuthContext)
    const {dispatch:modDispatch}=useContext(ModalContext)
    const {dispatch:numDispatch} =useContext(QuesContext)
    const history=useHistory()

   
    function clickHandler() {
         setTimeout(() => {
            modDispatch({type:'OPEN'})
          }, 1000);
            dispatch({
                type:'LOGOUT'
            })
      
            numDispatch({
              type:'GOTO',
              payload:0
            })
        localStorage.removeItem('user')
        history.push('/login')
    }
    return (
        <Wrapper>
            <h3 className='text-center' style={{ color: `${score > 5 ? 'green' : 'red'}` }}>
                {
                    score > 5 ? 'Congrats You Have Passed'
                        :
                        'Sorry You Could not make it'
                }
            </h3>
            <p>Your Score:{score}</p>
            {
                score <= 5 ? <Button width="150px" onClick={()=>clickHandler()}>
                    RETAKE EXAM
                </Button>
                    :
                    <Button onClick={()=>clickHandler()}>
                        LOGOUT
                </Button>
            }
        </Wrapper>
    )
}



const Wrapper = styled.div`
position:relative;
width:500px;
height:250px;
background-color:#fff;
margin:2rem auto;
border:none;
border-radius:5px;
box-shadow:2px 5px 5px rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
padding:15px;

Button{
    position:absolute;
    top:45%;
    left:35%;
}
p{
    text-align:center;
    color:blue;
}
`